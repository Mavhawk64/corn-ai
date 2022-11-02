import React from 'react';
import '../css/HomePage.css';

const Training = () => {

    return (
        <div>
            <div class="row header">
                <div class="header-background row">
                    <button class="bkg_ColorBlack o_btn o_btnM" type="button">
                        <b>Previous</b>
                    </button>
                    <button class="bkg_ColorWhite o_btn o_btnM" type="button">
                        <b>Next</b>
                    </button>
                </div>
            </div>
            <div class="row">
                <div class="column6 p_topL fill p_leftL">
                    <img
                        src='https://sfo3.digitaloceanspaces.com/csci4970-agro-ai-images/AI_Images/original_corn_pics/images_handheld/DSC00033.JPG'
                        height={600}
                        width={100} alt="placeholder"></img>
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
                                    <button class="bkg_ColorHealthy o_btn o_btnXL mar_leftS" type="button">
                                        <b>Healthy</b>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="column5">
                            <div class='row'>
                                <div class="column4"></div>
                                <div class="column6 mar_left">
                                    <button class="bkg_ColorUnhealthy o_btn o_btnXL mar_left" type="button">
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