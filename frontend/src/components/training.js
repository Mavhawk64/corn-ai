import React from 'react';
import '../css/homepage.css';
import {useNavigate} from "react-router-dom";

const Training = () => {
    let navigate = useNavigate();

    return (
        <div>
            <div class="row p_topL">
                <div class="column6 shaded">
                    <div class="row">
                        <div class="column5">
                            <div class='row'>
                                <div class="column4"></div>
                                <div class="column6">
                                    <button class="bkg_ColorBlack o_btn o_btnM" type="button">
                                        <b>Previous</b>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="column5">
                            <div class='row'>
                                <div class="column4"></div>
                                <div class="column6">
                                    <button class="bkg_ColorWhite o_btn o_btnM" type="button">
                                        <b>Next</b>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column2"></div>
                <div class="column2">
                    <button class="bkg_Color1 o_btn o_btnM" onClick={() => {navigate("/");}} type="button">
                        <b>Home</b>
                    </button>
                </div>
            </div>
            <div class="row">
                <div class="column6 p_topL fill p_leftL">
                    <img src={require('../inc/img/placeholder.jpg')} alt="placeholder"></img>
                </div>
                <div class="column4"></div>
            </div>
            <div class="row">
                <div class="column6 p_topL p_leftL">
                    <div class="row">
                    <div class="column5">
                            <div class='row'>
                                <div class="column4"></div>
                                <div class="column6">
                                    <button class="bkg_ColorHealthy o_btn o_btnXL" type="button">
                                        <b>Healthy</b>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="column5">
                            <div class='row'>
                                <div class="column4"></div>
                                <div class="column6">
                                    <button class="bkg_ColorUnhealthy o_btn o_btnXL" type="button">
                                        <b>Unhealthy</b>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column4"></div>
            </div>
        </div>
    );
}

export default Training;