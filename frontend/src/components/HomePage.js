import React from 'react';
import '../css/HomePage.css';
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    let navigate = useNavigate();


    return (
        <div>
            <div class="row">
                <div class="column7 round shaded_light_norm">
                    <div class="fill round">
                        <img src={require('../inc/img/AI_hero.jpg')} alt='AI' />
                    </div>
                </div>
                <div class="column3">
                    <div class='row p_topL'>
                        <div class="column5"></div>
                        <div class="column5">
                            <button class="bkg_Color1 o_btn o_btnM round" onClick={() => {navigate("/Login");}} type="button">
                                <span class="bigger">Log In</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row p_top">
                <div class="column3">
                     <h1 class="mar_left">AI for Agriculture!</h1>
                </div>
                <div class="column7">
                    <div class="row">
                        <div class="column4"></div>
                        <div class="bkg_Color1 round mar_right p">
                            <h1>SEE THE FUTURE!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 


export default HomePage;