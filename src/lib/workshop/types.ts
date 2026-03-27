export interface WorkshopState {
  currentQuestionIndex: number;
  isVotingOpen: boolean;
  votes: Record<number, Record<number, number>>;
  connectedClients: number;
  showResults: boolean;
}

export interface VotePayload {
  questionIndex: number;
  optionIndex: number;
}
