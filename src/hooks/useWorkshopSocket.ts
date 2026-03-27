"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import type { WorkshopState } from "@/lib/workshop/types";
import type { ClientMessage, ServerMessage } from "@/lib/workshop/protocol";

interface UseWorkshopSocketReturn {
  state: WorkshopState | null;
  isConnected: boolean;
  submitVote: (questionIndex: number, optionIndex: number) => void;
  changeQuestion: (direction: "next" | "prev") => void;
  toggleVoting: () => void;
  resetSession: () => void;
  showResults: () => void;
}

export function useWorkshopSocket(): UseWorkshopSocketReturn {
  const [state, setState] = useState<WorkshopState | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const reconnectAttemptRef = useRef(0);

  const send = useCallback((msg: ClientMessage) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(msg));
    }
  }, []);

  useEffect(() => {
    function connect() {
      const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
      const wsUrl = `${protocol}//${window.location.host}/ws`;
      const ws = new WebSocket(wsUrl);
      wsRef.current = ws;

      ws.onopen = () => {
        setIsConnected(true);
        reconnectAttemptRef.current = 0;
      };

      ws.onmessage = (event) => {
        try {
          const msg: ServerMessage = JSON.parse(event.data);
          if (msg.type === "state_update") {
            setState(msg.state);
          }
        } catch {
          // Ignore malformed messages
        }
      };

      ws.onclose = () => {
        setIsConnected(false);
        wsRef.current = null;

        // Reconnect with exponential backoff
        const delay = Math.min(1000 * Math.pow(2, reconnectAttemptRef.current), 8000);
        reconnectAttemptRef.current++;
        reconnectTimeoutRef.current = setTimeout(connect, delay);
      };

      ws.onerror = () => {
        ws.close();
      };
    }

    connect();

    return () => {
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);

  const submitVote = useCallback(
    (questionIndex: number, optionIndex: number) => {
      send({ type: "vote_submitted", questionIndex, optionIndex });
    },
    [send]
  );

  const changeQuestion = useCallback(
    (direction: "next" | "prev") => {
      send({ type: "admin_change_question", direction });
    },
    [send]
  );

  const toggleVoting = useCallback(() => {
    send({ type: "admin_toggle_voting" });
  }, [send]);

  const resetSession = useCallback(() => {
    send({ type: "admin_reset_session" });
  }, [send]);

  const showResults = useCallback(() => {
    send({ type: "admin_show_results" });
  }, [send]);

  return {
    state,
    isConnected,
    submitVote,
    changeQuestion,
    toggleVoting,
    resetSession,
    showResults,
  };
}
