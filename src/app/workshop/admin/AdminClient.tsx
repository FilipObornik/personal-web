"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  Users,
  BarChart3,
  Monitor,
  Loader2,
} from "lucide-react";
import { useWorkshopSocket } from "@/hooks/useWorkshopSocket";
import { workshopQuestions } from "@/lib/workshop/questions";
import VoteResults from "@/components/workshop/VoteResults";
import QuestionCard from "@/components/workshop/QuestionCard";
import ConnectionStatus from "@/components/workshop/ConnectionStatus";
import QRCode from "qrcode";

type ViewMode = "live" | "results";

export default function AdminClient() {
  const {
    state,
    isConnected,
    changeQuestion,
    toggleVoting,
    resetSession,
    showResults,
  } = useWorkshopSocket();

  const [viewMode, setViewMode] = useState<ViewMode>("live");
  const [qrDataUrl, setQrDataUrl] = useState<string>("");

  // Generate QR code
  useEffect(() => {
    const voteUrl = `${window.location.origin}/workshop/vote`;
    QRCode.toDataURL(voteUrl, {
      width: 200,
      margin: 2,
      color: {
        dark: "#E88F31",
        light: "#05121F",
      },
    }).then(setQrDataUrl);
  }, []);

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

  const currentQuestion = workshopQuestions[state.currentQuestionIndex];
  const currentVotes = state.votes[state.currentQuestionIndex] || {};
  const totalCurrentVotes = Object.values(currentVotes).reduce(
    (sum, count) => sum + count,
    0
  );
  const isFirst = state.currentQuestionIndex === 0;
  const isLast = state.currentQuestionIndex === workshopQuestions.length - 1;

  return (
    <div className="min-h-dvh bg-secondary flex flex-col">
      {/* Top bar */}
      <div className="border-b border-white/10 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <ConnectionStatus isConnected={isConnected} />
          <div className="flex items-center gap-2 text-white/50 text-sm">
            <Users className="w-4 h-4" />
            <span>{state.connectedClients} připojeno</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* View toggle */}
          <div className="flex bg-white/5 rounded-xl p-1">
            <button
              onClick={() => {
                setViewMode("live");
                if (state.showResults) showResults();
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === "live"
                  ? "bg-primary text-white"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              <Monitor className="w-4 h-4" />
              Živě
            </button>
            <button
              onClick={() => {
                setViewMode("results");
                if (!state.showResults) showResults();
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === "results"
                  ? "bg-primary text-white"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              Výsledky
            </button>
          </div>

          {/* Reset */}
          <button
            onClick={() => {
              if (window.confirm("Opravdu resetovat celou session?")) {
                resetSession();
                setViewMode("live");
              }
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white/40 hover:text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          {viewMode === "live" ? (
            <motion.div
              key="live"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col"
            >
              {/* Question + results area */}
              <div className="flex-1 flex items-center justify-center px-8 py-12">
                <div className="w-full max-w-4xl flex gap-12">
                  {/* Left: question + results */}
                  <div className="flex-1 flex flex-col gap-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={state.currentQuestionIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col gap-8"
                      >
                        {/* Question counter */}
                        <div className="text-primary/60 text-sm font-medium tracking-wide uppercase">
                          Otázka {state.currentQuestionIndex + 1} z{" "}
                          {workshopQuestions.length}
                        </div>

                        {/* Question text */}
                        <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight">
                          {currentQuestion.text}
                        </h1>

                        {/* Voting status badge */}
                        <div className="flex items-center gap-3">
                          <div
                            className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                              state.isVotingOpen
                                ? "bg-green-500/15 text-green-400"
                                : "bg-white/5 text-white/40"
                            }`}
                          >
                            {state.isVotingOpen
                              ? "Hlasování otevřeno"
                              : "Hlasování zavřeno"}
                          </div>
                          <span className="text-white/30 text-sm">
                            {totalCurrentVotes}{" "}
                            {totalCurrentVotes === 1
                              ? "hlas"
                              : totalCurrentVotes >= 2 && totalCurrentVotes <= 4
                              ? "hlasy"
                              : "hlasů"}
                          </span>
                        </div>

                        {/* Results bars */}
                        <VoteResults
                          question={currentQuestion}
                          votes={currentVotes}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Right: QR code */}
                  {qrDataUrl && (
                    <div className="hidden lg:flex flex-col items-center gap-3 shrink-0">
                      <div className="bg-secondary-dark rounded-2xl p-4 border border-white/5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={qrDataUrl}
                          alt="QR kód pro hlasování"
                          width={160}
                          height={160}
                          className="rounded-lg"
                        />
                      </div>
                      <p className="text-white/30 text-xs text-center">
                        Naskenujte pro hlasování
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom controls */}
              <div className="border-t border-white/10 px-6 py-4 flex items-center justify-between">
                {/* Previous */}
                <button
                  onClick={() => changeQuestion("prev")}
                  disabled={isFirst}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isFirst
                      ? "text-white/15 cursor-not-allowed"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Předchozí
                </button>

                {/* Open/Close voting */}
                <button
                  onClick={toggleVoting}
                  className={`flex items-center gap-3 px-8 py-3 rounded-xl text-base font-semibold transition-all ${
                    state.isVotingOpen
                      ? "bg-red-500/15 text-red-400 hover:bg-red-500/25"
                      : "bg-primary text-white hover:bg-primary-dark"
                  }`}
                >
                  {state.isVotingOpen ? (
                    <>
                      <Pause className="w-5 h-5" />
                      Ukončit hlasování
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5" />
                      Spustit hlasování
                    </>
                  )}
                </button>

                {/* Next */}
                <button
                  onClick={() => changeQuestion("next")}
                  disabled={isLast}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isLast
                      ? "text-white/15 cursor-not-allowed"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  Další
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 px-8 py-12"
            >
              <div className="max-w-5xl mx-auto">
                <h2 className="text-white text-3xl font-bold mb-8">
                  Přehled výsledků
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {workshopQuestions.map((question, index) => (
                    <QuestionCard
                      key={question.id}
                      question={question}
                      questionNumber={index + 1}
                      votes={state.votes[index]}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
