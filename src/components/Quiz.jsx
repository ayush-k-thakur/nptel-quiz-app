import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Quiz = ({ questions, onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = () => {
    if (selectedOption === null) return;

    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      onComplete(score);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mt-[100px] max-w-2xl mx-auto p-6"
    >
      <button
        onClick={onBack}
        className="mb-6 text-purple-300 hover:text-purple-100 transition-colors"
      >
        ← Back to Sections
      </button>

      <div className="mt-[20px] backdrop-blur-sm rounded-lg p-8 border border-purple-700/30">
        <div className="mb-6">
          <p className="text-purple-300 mb-2">
            Question {currentQuestion + 1} of {questions.length}
          </p>
          <h2 className="text-2xl font-bold text-purple-100">
            {questions[currentQuestion].question}
          </h2>
        </div>

        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedOption(index)}
              className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                selectedOption === index
                  ? 'bg-purple-700/80 text-purple-100 border-purple-400 hover'
                  : 'bg-purple-800/30 text-white hover:bg-purple-800/50 border-transparent'
              } border`}
            >
              {option}
            </motion.button>
          ))}
        </div>

        <button
          onClick={handleAnswer}
          disabled={selectedOption === null}
          className={`mt-6 w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
            selectedOption === null
              ? 'bg-purple-800/30 text-purple-400 cursor-not-allowed'
              : 'bg-purple-600 text-purple-100 hover:bg-purple-500'
          }`}
        >
          {currentQuestion + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>
    </motion.div>
  );
};