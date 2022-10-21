import React from 'react';
import '../css/HomePage.css';
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();

    return (
        <div class="center">
            <div class="row center">
                <img class="mini_mar" width="50px" height="50px" src={require('../inc/img/corn.jpg')} alt='AI' />
                <h2>CornAI</h2>
                <img width="50px" height="50px" src={require('../inc/img/corn.jpg')} alt='AI' />
            </div>
            <div class="row center">
                <h1>Welcome Back</h1>
            </div>
            <div class="center shaded_light">
                <div class="row">
                    <form onSubmit={() => {navigate("/train");}}>
                        <label>
                            <span class="bigger">Email</span><br />
                            <input type="text" name="email" placeholder="Enter your email here" />
                            <br /><br />
                        </label>
                        <label>
                            <span class="bigger">Password<br /></span>
                            <input type="text" name="pass" placeholder="Enter your password here" />
                            <br /><br />
                        </label>
                        <input class="o_btn bkg_ColorHealthy o_btnS" type="submit" value="Submit" placeholder="Sign In" /><br />
                    </form>
                </div>
                <div class="row">
                    <Link to="/Signup">Sign Up</Link>
                </div>
            </div>

        </div>
    );
} 
     
    export default Login;