import React from 'react';
import { motion } from 'framer-motion';

export const QuizCard = ({ section, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="backdrop-blur-sm rounded-lg p-6 cursor-pointer hover:bg-purple-800/60 transition-all duration-300 border border-purple-400/30"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-bold text-purple-100 mb-2">{section.title}</h3>
      <p className="text-purple-300">{section.questions.length} Questions</p>
    </motion.div>
  );
};