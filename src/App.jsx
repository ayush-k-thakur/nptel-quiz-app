import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import { courses } from "./data/courses";
import { CourseCard } from "./components/CourseCard";
import { courseRoutes } from "./data/courses";
import ConservationEconomics from "./components/ConservationEconomics";
import ConservationGeography from "./components/ConservationGeography";

function CoursesPage() {
  return (
    <div className="p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl mt-[125px] font-bold text-purple-500 text-center"
      >
      NPTEL Assignments
      </motion.h1>
      <div className="max-w-6xl mx-auto relative top-[-50px]">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {courses.map((section, index) => (
              <Link to={courseRoutes[index]} key={index}>
                <CourseCard key={index} course={courses[index]} />
              </Link>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoursesPage />} />
        <Route
          path="/conservation-economics"
          element={<ConservationEconomics />}
        />
        <Route
          path="/conservation-geography"
          element={<ConservationGeography />}
        />
      </Routes>
    </Router>
  );
}

export default App;
