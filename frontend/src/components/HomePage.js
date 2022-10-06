import React from 'react';
import '../css/HomePage.css';
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    let navigate = useNavigate();


    return (
        <div>
            <div class="row">
                <div class="column7 fill">
                    <img src={require('../inc/img/AI_hero.jpg')} alt='AI' />
                </div>
                <div class="column3 center">
                    <div class='row p_topL'>
                        <div class="column5"></div>
                        <div class="column5">
                            <button class="bkg_Color1 o_btn o_btnM" onClick={() => {navigate("/train");}} type="button">
                                <b>Train</b>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row p_top">
                <div class="column3">
                     <h1>AI for Agriculture!</h1>
                </div>
                <div class="column7">
                    <div class="row">
                        <div class="column4"></div>
                        <div class="column6 center">
                            <h1 class="bkg_Color1 cut">SEE THE FUTURE!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 


export default HomePage;