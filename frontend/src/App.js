import React from 'react';
import { useContext } from "react";
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Training from './components/training';
import AuthForm from "./components/Auth/AuthForm";
import AuthContext from "./store/auth-context";

function App() {
    const authCtx = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/" element={authCtx.isLoggedIn ? <HomePage /> : <AuthForm />} />
        <Route path="/train" element={authCtx.isLoggedIn ? <Training /> : <AuthForm />} />
        <Route path="/auth" element={authCtx.isLoggedIn ? <AuthForm /> : <HomePage />} />
        <Route path="*" element={authCtx.isLoggedIn ? <HomePage /> : <AuthForm />} />
      </Routes>
    </Router>
  );
}

export default App;
