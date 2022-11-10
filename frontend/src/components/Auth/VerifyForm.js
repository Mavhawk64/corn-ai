import React from 'react';
import {useContext} from 'react';
import SendVerificationEmail from "./SendVerificationEmail";
import {useNavigate} from "react-router-dom";

import classes from './AuthForm.module.css';
import Verify from "./Verify";
import AuthContext from "../../store/auth-context";

const VerifyForm = () => {
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);

    const checkVerification = async () => {
        let verified = await Verify();
        if (verified) {
            authCtx.verify(verified);
            navigate('/', {replace: true});
        }
    };

    return (
        <section className={classes.auth}>
            <h1>Please check your inbox to verify your email address</h1>
            <div className={classes.actions}>
                <button
                    type-='button'
                    onClick={checkVerification}
                    >I'm Verified!</button>
                <button
                type='button'
                className={classes.toggle}
                onClick={SendVerificationEmail}
                >
                    Resend Verification Email</button>
            </div>
        </section>
    );
};

export default VerifyForm;