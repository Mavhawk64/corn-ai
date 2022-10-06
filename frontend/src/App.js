import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Training from './components/training';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Train" element={<Training />} />
      </Routes>
    </Router>
  );
}

export default App;
