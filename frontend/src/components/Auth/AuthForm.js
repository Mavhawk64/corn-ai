import React, {useEffect} from 'react';
import {useState, useRef, useContext} from 'react';
import {useNavigate} from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';
import Verify from './Verify';
import SendVerificationEmail from "./SendVerificationEmail";
import {fetcher} from "../shared/helpers";

const AuthForm = () => {
    const navigate = useNavigate();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

        useEffect(() => {
            if (authCtx.isLoggedIn) {
                navigate('/verify', {replace: true});
            }
        });

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        setIsLoading(true);
        let url;
        if (isLogin) {
            url =
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBSwRedbRNzhvkNFu1cuEHmWbhwapkNocY';
        } else {
            url =
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBSwRedbRNzhvkNFu1cuEHmWbhwapkNocY';
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                setIsLoading(false);
                if (res.ok) {
                    return res.json();
                } else {
                    return res.json().then(() => {
                        let errorMessage = 'Authentication failed!';

                        throw new Error(errorMessage);
                    });
                }
            })
            .then((data) => {
                if(!isLogin) {
                    newUser(data.email, data.localId);
                }
                const expirationTime = new Date(
                    new Date().getTime() + +data.expiresIn * 1000
                );
                authCtx.login(data.idToken, expirationTime.toISOString(), data.email, data.localId);
                const verified = Verify();
                return verified;

            })
            .then((verified) => {
                if (verified) {
                    authCtx.verify(verified);
                    navigate('/', {replace: true});
                } else {
                    SendVerificationEmail();
                    navigate('/verify', {replace: true});
                }
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    async function newUser(email, id) {
        let url = "placeholder";
        let data = {
            "placeholder1": email,
            "placeholder2": id
        };
        let args = {
            method: "PUT",
            body: JSON.stringify("data")
        };
        // return await this.fetcher(url, args);
    }

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required ref={emailInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input
                        type='password'
                        id='password'
                        required
                        ref={passwordInputRef}
                    />
                </div>
                <div className={classes.actions}>
                    {!isLoading && (
                        <button>{isLogin ? 'Login' : 'Create Account'}</button>
                    )}
                    {isLoading && <p>Sending request...</p>}
                    <button
                        type='button'
                        className={classes.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                    <button
                        type='button'
                        className={classes.toggle}
                        onClick={() => { navigate('/forgot-password', {replace: true});}}
                        >
                        Forgot Password
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AuthForm;