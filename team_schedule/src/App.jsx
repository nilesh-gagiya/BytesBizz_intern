// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard'
import TeamSchedule from './Team'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/schedule" element={<TeamSchedule />} />
        
      </Routes>
    </Router>
  );
};

export default App;
