import React from 'react';
import {useContext} from "react";
import './App.css';
import HomePage from './components/HomePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Training from './components/training';
import AuthForm from "./components/Auth/AuthForm";
import AuthContext from "./store/auth-context";
import Header from "./components/header/Header";
import VerifyForm from "./components/Auth/VerifyForm";
import ForgotPasswordForm from "./components/Auth/ForgotPasswordForm";

function App() {
    const authCtx = useContext(AuthContext);
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={(authCtx.isLoggedIn && authCtx.isVerified) ? <HomePage/> : <AuthForm/>}/>
                <Route path="/train" element={(authCtx.isLoggedIn && authCtx.isVerified) ? <Training/> : <AuthForm/>}/>
                <Route path="/auth" element={(authCtx.isLoggedIn && authCtx.isVerified) ? <HomePage/> : <AuthForm/>}/>
                <Route path="/forgot-password" element=<ForgotPasswordForm/>/>
                <Route path="/verify" element={authCtx.isLoggedIn ? <VerifyForm/> : <AuthForm/>}/>
            </Routes>
        </Router>
    );
}

export default App;
