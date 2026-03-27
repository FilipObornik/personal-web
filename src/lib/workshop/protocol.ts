import type { WorkshopState } from "./types";

// Client → Server
export type ClientMessage =
  | { type: "vote_submitted"; questionIndex: number; optionIndex: number }
  | { type: "admin_change_question"; direction: "next" | "prev" }
  | { type: "admin_toggle_voting" }
  | { type: "admin_reset_session" }
  | { type: "admin_show_results" };

// Server → Client
export type ServerMessage =
  | { type: "state_update"; state: WorkshopState }
  | { type: "vote_confirmed"; questionIndex: number };
