"use client";

import { useReducer, useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, ArrowRight, Sparkles, BookOpen, X } from "lucide-react";
import Link from "next/link";
import QuizQuestionComponent from "./QuizQuestion";
import QuizResults from "./QuizResults";
import { type GlossaryTerm } from "@/lib/glossary-data";

const QUIZ_LENGTH = 10;

interface QuizQuestionData {
  term: GlossaryTerm;
  options: string[];
  correctAnswer: number;
}

type QuizPhase = "start" | "playing" | "results";

interface QuizState {
  phase: QuizPhase;
  questions: QuizQuestionData[];
  currentQuestion: number;
  score: number;
  selectedAnswer: number | null;
}

type QuizAction =
  | { type: "START"; questions: QuizQuestionData[] }
  | { type: "ANSWER"; index: number }
  | { type: "NEXT" }
  | { type: "RESET" };

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "START":
      return {
        phase: "playing",
        questions: action.questions,
        currentQuestion: 0,
        score: 0,
        selectedAnswer: null,
      };
    case "ANSWER": {
      const isCorrect =
        action.index === state.questions[state.currentQuestion].correctAnswer;
      return {
        ...state,
        selectedAnswer: action.index,
        score: isCorrect ? state.score + 1 : state.score,
      };
    }
    case "NEXT": {
      const nextQuestion = state.currentQuestion + 1;
      if (nextQuestion >= state.questions.length) {
        return { ...state, phase: "results", selectedAnswer: null };
      }
      return {
        ...state,
        currentQuestion: nextQuestion,
        selectedAnswer: null,
      };
    }
    case "RESET":
      return {
        phase: "start",
        questions: [],
        currentQuestion: 0,
        score: 0,
        selectedAnswer: null,
      };
    default:
      return state;
  }
}

// Strip term name from the beginning of a definition
// "Umělá inteligence je obor..." → "Obor..."
// "ChatGPT je AI chatbot..." → "AI chatbot..."
function stripTermName(definition: string, termName: string, termEn?: string): string {
  let result = definition;

  // Try stripping Czech term: "[Term] je " or "[Term] (zkratka) je "
  const names = [termName, ...(termEn ? [termEn] : [])];
  for (const name of names) {
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    // Match: "Term je ", "Term (Something) je ", "Term / Something je "
    const regex = new RegExp(
      `^${escaped}(\\s*\\([^)]*\\))?\\s+je\\s+`,
      "i"
    );
    const match = result.match(regex);
    if (match) {
      result = result.slice(match[0].length);
      // Capitalize first letter
      return result.charAt(0).toUpperCase() + result.slice(1);
    }
  }

  // Fallback: try just stripping the term name from the start
  for (const name of names) {
    if (result.toLowerCase().startsWith(name.toLowerCase())) {
      result = result.slice(name.length).replace(/^\s+/, "");
      if (result.startsWith("je ")) {
        result = result.slice(3);
      }
      return result.charAt(0).toUpperCase() + result.slice(1);
    }
  }

  return result;
}

function generateQuestions(terms: GlossaryTerm[], allTerms: GlossaryTerm[]): QuizQuestionData[] {
  const shuffled = [...terms].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(QUIZ_LENGTH, shuffled.length));

  return selected.map((term) => {
    const correctAnswer = Math.floor(Math.random() * 4);

    // Use shortDefinitions from other terms as distractors for uniform length
    const otherTerms = allTerms
      .filter((t) => t.slug !== term.slug)
      .sort(() => Math.random() - 0.5);
    const distractors = otherTerms.slice(0, 3);

    const options: string[] = [];
    let distractorIndex = 0;
    for (let i = 0; i < 4; i++) {
      if (i === correctAnswer) {
        // Strip term name from correct answer too
        options.push(stripTermName(term.shortDefinition, term.term, term.termEn));
      } else {
        const d = distractors[distractorIndex];
        options.push(stripTermName(d.shortDefinition, d.term, d.termEn));
        distractorIndex++;
      }
    }

    return { term, options, correctAnswer };
  });
}

interface QuizGameProps {
  terms: GlossaryTerm[];
}

export default function QuizGame({ terms }: QuizGameProps) {
  const [state, dispatch] = useReducer(quizReducer, {
    phase: "start",
    questions: [],
    currentQuestion: 0,
    score: 0,
    selectedAnswer: null,
  });

  const [mounted, setMounted] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);

  useEffect(() => setMounted(true), []);

  // Close modal on Escape
  useEffect(() => {
    if (!showDetailModal) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowDetailModal(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [showDetailModal]);

  const handleStart = useCallback(() => {
    const questions = generateQuestions(terms, terms);
    dispatch({ type: "START", questions });
  }, [terms]);

  const handleAnswer = useCallback((index: number) => {
    dispatch({ type: "ANSWER", index });
  }, []);

  const handleNext = useCallback(() => {
    setShowDetailModal(false);
    dispatch({ type: "NEXT" });
  }, []);

  const handleRetry = useCallback(() => {
    setShowDetailModal(false);
    dispatch({ type: "RESET" });
    setTimeout(() => {
      const questions = generateQuestions(terms, terms);
      dispatch({ type: "START", questions });
    }, 100);
  }, [terms]);

  const currentQ = state.questions[state.currentQuestion];
  const isWrongAnswer =
    state.selectedAnswer !== null &&
    currentQ &&
    state.selectedAnswer !== currentQ.correctAnswer;

  if (!mounted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Brain className="text-primary" size={32} />
        </div>
        <p className="text-muted">Načítání kvízu...</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {state.phase === "start" && (
          <motion.div
            key="start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center py-8"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="text-primary" size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Kvíz: Znáte AI pojmy<span className="text-primary">?</span>
            </h2>
            <p className="text-muted text-lg mb-2 max-w-lg mx-auto">
              Otestujte své znalosti AI pojmů v rychlém kvízu s {QUIZ_LENGTH} otázkami.
            </p>
            <p className="text-muted text-sm mb-8">
              U každé otázky vyberte správnou definici pojmu.
            </p>
            <button
              onClick={handleStart}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              <Sparkles size={20} />
              Spustit kvíz
            </button>
          </motion.div>
        )}

        {state.phase === "playing" && currentQ && (
          <motion.div
            key={`question-${state.currentQuestion}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <QuizQuestionComponent
              questionNumber={state.currentQuestion + 1}
              totalQuestions={state.questions.length}
              term={currentQ.term.term}
              options={currentQ.options}
              selectedAnswer={state.selectedAnswer}
              correctAnswer={currentQ.correctAnswer}
              onAnswer={handleAnswer}
            />

            {/* Action buttons after answering */}
            {state.selectedAnswer !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 flex flex-wrap items-center justify-center gap-3"
              >
                {isWrongAnswer && (
                  <button
                    onClick={() => setShowDetailModal(true)}
                    className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-light text-white px-5 py-3 rounded-full font-semibold text-sm transition-colors"
                  >
                    <BookOpen size={16} />
                    Zjistit více o pojmu
                  </button>
                )}
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  {state.currentQuestion < state.questions.length - 1
                    ? "Další otázka"
                    : "Zobrazit výsledky"}
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            )}
          </motion.div>
        )}

        {state.phase === "results" && (
          <QuizResults
            score={state.score}
            totalQuestions={state.questions.length}
            onRetry={handleRetry}
          />
        )}
      </AnimatePresence>

      {/* Term detail modal */}
      <AnimatePresence>
        {showDetailModal && currentQ && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setShowDetailModal(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg md:max-h-[80vh] bg-secondary rounded-2xl md:rounded-3xl overflow-y-auto z-50 shadow-2xl"
            >
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BookOpen className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-1">
                        Správná odpověď
                      </p>
                      <h3 className="text-white font-bold text-xl">
                        {currentQ.term.term}
                        <span className="text-primary">.</span>
                      </h3>
                      {currentQ.term.termEn && (
                        <p className="text-white/40 text-sm mt-0.5">
                          {currentQ.term.termEn}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setShowDetailModal(false)}
                    className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-colors flex-shrink-0"
                    aria-label="Zavřít"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Definition */}
                <div className="bg-white/5 rounded-xl p-4 mb-4">
                  <p className="text-white/80 text-sm leading-relaxed font-medium">
                    {currentQ.term.shortDefinition}
                  </p>
                </div>

                {/* Full description (first paragraph) */}
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {currentQ.term.fullDescription.split("\n\n")[0]}
                </p>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/slovnicek/${currentQ.term.slug}`}
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-colors border border-white/10"
                  >
                    Přečíst celý článek
                    <ArrowRight size={14} />
                  </Link>
                  <button
                    onClick={() => setShowDetailModal(false)}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-colors"
                  >
                    Pokračovat v kvízu
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
