import React from 'react';
import '../css/HomePage.css';
import {useNavigate} from "react-router-dom";

const Signup = () => {
    let navigate = useNavigate();

    return (
        <div class="center">
            <div class="row center">
                <h1>Signup for an Account</h1>
            </div>
            <div class="center shaded_light">
                <div class="row">
                    <form onSubmit={() => {navigate("/Login");}}>
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
                        <label>
                            <span class="bigger">Password<br /></span>
                            <input type="text" name="passConf" placeholder="Confirm your password here" />
                            <br /><br />
                        </label>
                        <input class="o_btn bkg_ColorHealthy o_btnS" type="submit" value="Submit" placeholder="Sign In" /><br />
                    </form>
                </div>
            </div>
        </div>
    );
} 
     
    export default Signup;