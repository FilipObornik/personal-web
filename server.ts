import { createServer, IncomingMessage, ServerResponse } from "http";
import { WebSocketServer, WebSocket } from "ws";
import { workshopQuestions } from "./src/lib/workshop/questions";
import type { WorkshopState } from "./src/lib/workshop/types";
import type { ClientMessage, ServerMessage } from "./src/lib/workshop/protocol";

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME || "0.0.0.0";
const port = parseInt(process.env.PORT || "3000", 10);

// In-memory workshop state
const state: WorkshopState = {
  currentQuestionIndex: 0,
  isVotingOpen: false,
  votes: {},
  connectedClients: 0,
  showResults: false,
};

function broadcast(wss: WebSocketServer, msg: ServerMessage) {
  const data = JSON.stringify(msg);
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
}

function broadcastState(wss: WebSocketServer) {
  broadcast(wss, { type: "state_update", state });
}

function setupWebSocket(wss: WebSocketServer) {
  wss.on("connection", (ws) => {
    state.connectedClients++;
    broadcastState(wss);

    ws.on("message", (raw) => {
      try {
        const msg: ClientMessage = JSON.parse(raw.toString());

        switch (msg.type) {
          case "vote_submitted": {
            if (!state.isVotingOpen) return;
            if (msg.questionIndex !== state.currentQuestionIndex) return;
            const question = workshopQuestions[msg.questionIndex];
            if (!question || msg.optionIndex < 0 || msg.optionIndex >= question.options.length) return;

            if (!state.votes[msg.questionIndex]) {
              state.votes[msg.questionIndex] = {};
            }
            state.votes[msg.questionIndex][msg.optionIndex] =
              (state.votes[msg.questionIndex][msg.optionIndex] || 0) + 1;

            ws.send(JSON.stringify({ type: "vote_confirmed", questionIndex: msg.questionIndex }));
            broadcastState(wss);
            break;
          }

          case "admin_change_question": {
            const newIndex =
              msg.direction === "next"
                ? state.currentQuestionIndex + 1
                : state.currentQuestionIndex - 1;

            if (newIndex < 0 || newIndex >= workshopQuestions.length) return;
            state.currentQuestionIndex = newIndex;
            state.isVotingOpen = false;
            state.showResults = false;
            broadcastState(wss);
            break;
          }

          case "admin_toggle_voting": {
            state.isVotingOpen = !state.isVotingOpen;
            state.showResults = false;
            broadcastState(wss);
            break;
          }

          case "admin_reset_session": {
            state.currentQuestionIndex = 0;
            state.isVotingOpen = false;
            state.votes = {};
            state.showResults = false;
            broadcastState(wss);
            break;
          }

          case "admin_show_results": {
            state.isVotingOpen = false;
            state.showResults = !state.showResults;
            broadcastState(wss);
            break;
          }
        }
      } catch {
        // Ignore malformed messages
      }
    });

    ws.on("close", () => {
      state.connectedClients--;
      broadcastState(wss);
    });
  });
}

function startServer(handle: (req: IncomingMessage, res: ServerResponse) => Promise<void> | void) {
  const server = createServer(async (req, res) => {
    try {
      await handle(req, res);
    } catch (err) {
      console.error("Request error:", err);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  });
  const wss = new WebSocketServer({ noServer: true });

  server.on("upgrade", (request, socket, head) => {
    const { pathname } = new URL(request.url || "/", `http://${request.headers.host}`);

    if (pathname === "/ws") {
      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit("connection", ws, request);
      });
    } else if (dev) {
      // Don't destroy — Next.js dev server needs upgrade for HMR websocket
      return;
    } else {
      socket.destroy();
    }
  });

  setupWebSocket(wss);

  server.listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port}`);
    console.log(`> WebSocket server on ws://${hostname}:${port}/ws`);
  });
}

async function main() {
  if (dev) {
    // Development: use next() with full dev server (HMR, etc.)
    const next = (await import("next")).default;
    const app = next({ dev: true, hostname, port });
    await app.prepare();
    startServer(app.getRequestHandler());
  } else {
    // Production: use NextServer directly (doesn't need webpack)
    // Must use require() — dynamic import() needs .js extension in standalone
    const path = require("path");
    const NextServer = require("next/dist/server/next-server").default;

    const nextServer = new NextServer({
      hostname,
      port,
      dir: path.join(__dirname),
      dev: false,
      customServer: false,
      conf: require(path.join(__dirname, ".next", "required-server-files.json")).config,
    });

    startServer(nextServer.getRequestHandler());
  }
}

main().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
