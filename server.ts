import { createServer } from "http";
import next from "next";
import { WebSocketServer, WebSocket } from "ws";
import { workshopQuestions } from "./src/lib/workshop/questions";
import type { WorkshopState } from "./src/lib/workshop/types";
import type { ClientMessage, ServerMessage } from "./src/lib/workshop/protocol";

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME || "0.0.0.0";
const port = parseInt(process.env.PORT || "3000", 10);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

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

app.prepare().then(() => {
  const server = createServer((req, res) => {
    handle(req, res);
  });

  const wss = new WebSocketServer({ noServer: true });

  server.on("upgrade", (request, socket, head) => {
    const { pathname } = new URL(request.url || "/", `http://${request.headers.host}`);

    if (pathname === "/ws") {
      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit("connection", ws, request);
      });
    } else {
      // Let Next.js handle other upgrades (HMR in dev)
      if (dev) {
        // Don't destroy — Next.js dev server needs upgrade for HMR websocket
        return;
      }
      socket.destroy();
    }
  });

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

  server.listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port}`);
    console.log(`> WebSocket server on ws://${hostname}:${port}/ws`);
  });
});
