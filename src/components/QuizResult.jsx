import React from "react";
import { motion } from "framer-motion";

export const QuizResult = ({ score, totalQuestions, onBack }) => {
  const percentage = (score / totalQuestions) * 100;

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="w-[400px] backdrop-blur-xs rounded-lg p-8 text-center border border-purple-700/30">
        <h2 className="text-3xl font-bold text-purple-100 mb-4">
          Quiz Complete!
        </h2>
        <div className="text-6xl font-bold text-purple-300 mb-4">
          {percentage}%
        </div>
        <p className="text-purple-200 mb-6">
          You scored {score} out of {totalQuestions} questions correctly
        </p>
        <button
          onClick={onBack}
          className="bg-purple-700 text-purple-100 py-3 px-6 rounded-lg hover:bg-purple-600 transition-all duration-300"
        >
          Back to Sections
        </button>
      </div>
    </div>
  );
};
