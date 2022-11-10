import React, {useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import classes from './AuthForm.module.css';

const ForgotPasswordForm = () => {
    const navigate = useNavigate();
    const emailInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBSwRedbRNzhvkNFu1cuEHmWbhwapkNocY';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                requestType: 'PASSWORD_RESET',
                email: enteredEmail
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                if (res.ok) {

                } else {
                    let errorMessage = 'Reset Password Email Failed!';
                    throw new Error(errorMessage);
                }
            })
        .catch((err) => {
            alert(err.message);
        });
    }
    return (
        <section className={classes.auth}>
            <h1>Send Password Reset Email</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required ref={emailInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Reset Password</button>
                    <button
                    type='button'
                    className={classes.toggle}
                    onClick={() => { navigate('/auth', {replace: true});}}
                    >
                    Back to Login
                    </button>
                </div>
            </form>
        </section>
    )
}
export default ForgotPasswordForm;