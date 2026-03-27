"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useWorkshopSocket } from "@/hooks/useWorkshopSocket";
import { workshopQuestions } from "@/lib/workshop/questions";
import VoteButton from "@/components/workshop/VoteButton";
import WaitingState from "@/components/workshop/WaitingState";
import ConnectionStatus from "@/components/workshop/ConnectionStatus";

const STORAGE_KEY = "workshop-votes";

function getVotedQuestions(): Record<string, number> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function markVoted(questionId: string, optionIndex: number) {
  const voted = getVotedQuestions();
  voted[questionId] = optionIndex;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(voted));
}

export default function VoteClient() {
  const { state, isConnected, submitVote } = useWorkshopSocket();
  const [votedQuestions, setVotedQuestions] = useState<Record<string, number>>(
    () => {
      if (typeof window === "undefined") return {};
      return getVotedQuestions();
    }
  );
  const [lastVotedIndex, setLastVotedIndex] = useState<number | null>(null);

  const currentQuestion = state
    ? workshopQuestions[state.currentQuestionIndex]
    : null;

  const alreadyVoted = currentQuestion
    ? votedQuestions[currentQuestion.id] !== undefined
    : false;

  const selectedOption = currentQuestion
    ? votedQuestions[currentQuestion.id]
    : undefined;

  const justVoted = alreadyVoted && lastVotedIndex === state?.currentQuestionIndex;

  const handleVote = useCallback(
    (optionIndex: number) => {
      if (!state || !currentQuestion || alreadyVoted) return;
      submitVote(state.currentQuestionIndex, optionIndex);
      markVoted(currentQuestion.id, optionIndex);
      setVotedQuestions((prev) => ({
        ...prev,
        [currentQuestion.id]: optionIndex,
      }));
      setLastVotedIndex(state.currentQuestionIndex);
    },
    [state, currentQuestion, alreadyVoted, submitVote]
  );

  // Loading / connecting state
  if (!state) {
    return (
      <div className="min-h-dvh bg-secondary flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
          <p className="text-white/50 text-sm">Připojuji se...</p>
        </div>
      </div>
    );
  }

  // Final results view
  if (state.showResults) {
    return (
      <div className="min-h-dvh bg-secondary flex items-center justify-center px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary text-xl">&#10003;</span>
            </div>
            <h2 className="text-white text-xl font-semibold">
              Děkujeme za účast!
            </h2>
            <p className="text-white/50 text-sm">
              Výsledky jsou promítány na obrazovce
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  // Voting not open / waiting
  if (!state.isVotingOpen || !currentQuestion) {
    return (
      <div className="min-h-dvh bg-secondary flex flex-col">
        <div className="px-4 pt-4">
          <ConnectionStatus isConnected={isConnected} />
        </div>
        <div className="flex-1 flex items-center justify-center px-4">
          <WaitingState />
        </div>
      </div>
    );
  }

  // Active voting
  return (
    <div className="min-h-dvh bg-secondary flex flex-col">
      <div className="px-4 pt-4">
        <ConnectionStatus isConnected={isConnected} />
      </div>
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={state.currentQuestionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6"
            >
              {/* Question counter */}
              <div className="text-primary/60 text-sm font-medium">
                Otázka {state.currentQuestionIndex + 1} / {workshopQuestions.length}
              </div>

              {/* Question text */}
              <h1 className="text-white text-2xl font-bold leading-tight">
                {currentQuestion.text}
              </h1>

              {/* Vote buttons or confirmation */}
              <AnimatePresence mode="wait">
                {alreadyVoted || justVoted ? (
                  <motion.div
                    key="voted"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-3"
                  >
                    <div className="bg-primary/10 border border-primary/20 rounded-2xl px-6 py-4 text-center">
                      <p className="text-primary font-semibold">
                        Díky za váš hlas!
                      </p>
                    </div>
                    {/* Show selected option */}
                    <div className="flex flex-col gap-2">
                      {currentQuestion.options.map((option, index) => (
                        <VoteButton
                          key={index}
                          label={option}
                          index={index}
                          isSelected={selectedOption === index}
                          isDisabled={true}
                          onClick={() => {}}
                        />
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="options"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-3"
                  >
                    {currentQuestion.options.map((option, index) => (
                      <VoteButton
                        key={index}
                        label={option}
                        index={index}
                        isSelected={false}
                        isDisabled={false}
                        onClick={() => handleVote(index)}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
