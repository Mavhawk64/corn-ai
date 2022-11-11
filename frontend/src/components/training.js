import React from 'react';
import '../css/HomePage.css';

const Training = () => {

    return (
        <div>
            <div className="row header">
                <div className="header-background row">
                    <button className="bkg_ColorBlack o_btn o_btnM" type="button">
                        <b>Previous</b>
                    </button>
                    <button className="bkg_ColorWhite o_btn o_btnM" type="button">
                        <b>Next</b>
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="column6 p_topL fill p_leftL">
                    <img
                        src='https://sfo3.digitaloceanspaces.com/csci4970-agro-ai-images/AI_Images/original_corn_pics/images_handheld/DSC00033.JPG'
                        height={600}
                        width={100} alt="placeholder"></img>
                </div>
                <div className="column4"></div>
            </div>
            <div className="row header">
                <button className="bkg_ColorHealthy o_btn o_btnXL" type="button">
                    <b>Healthy</b>
                </button>
                <button className="bkg_ColorUnhealthy o_btn o_btnXL mar_left" type="button">
                    <b>Unhealthy</b>
                </button>
            </div>
        </div>
    );
}

export default Training;