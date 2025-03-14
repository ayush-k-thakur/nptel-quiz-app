import React, { useState } from 'react';
import './App.css';
import { motion, AnimatePresence } from 'framer-motion';
import { QuizCard } from './components/QuizCard';
import { Quiz } from './components/Quiz';
import { QuizResult } from './components/QuizResult';
import { quizSections } from './data/quizData';

function App() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [results, setResults] = useState([]);
  const [showingResults, setShowingResults] = useState(false);

  const handleQuizComplete = (score) => {
    const section = quizSections.find(s => s.id === selectedSection);
    const result = {
      sectionId: section.id,
      score,
      totalQuestions: section.questions.length,
    };
    setResults([...results, result]);
    setShowingResults(true);
  };

  const handleBackToSections = () => {
    setSelectedSection(null);
    setShowingResults(false);
  };

  if (selectedSection !== null) {
    const section = quizSections.find(s => s.id === selectedSection);
    
    if (showingResults) {
      const result = results.find(r => r.sectionId === selectedSection);
      return (
        <QuizResult
          score={result.score}
          totalQuestions={result.totalQuestions}
          onBack={handleBackToSections}
        />
      );
    }

    return (
      <Quiz
        questions={section.questions}
        onComplete={handleQuizComplete}
        onBack={handleBackToSections}
      />
    );
  }

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl mt-[100px] font-bold text-purple-100 text-center mb-12"
        >
          Interactive Quiz Sections
        </motion.h1>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {quizSections.map((section) => (
              <QuizCard
                key={section.id}
                section={section}
                onClick={() => setSelectedSection(section.id)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;