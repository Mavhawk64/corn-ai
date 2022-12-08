import React, {useEffect} from 'react';
import '../css/HomePage.css';
import Draw from "./draw/draw";
import {fetcher} from "./shared/helpers";

const Training = () => {

    let [showAI, setShowAI] = React.useState(false);
    let [imageUrl, setImageUrl] = React.useState("false");
    let userChoice = "none";
    let aiHealth = "unknown";

    function onHealthy() {
        userChoice = "healthy";
        setShowAI(true);
        saveUserChoice();
    }

    function onSick() {
        userChoice = "sick";
        setShowAI(true);
        saveUserChoice();
    }

    function onNext() {
        getImage();
        setShowAI(false);
    }

    async function getImage() {
        let url = "placeholder";

        // let imageData = await fetcher(url, 'GET')

        // setImageUrl = imageData.placeholder;
        // aiHealth = imageData.placeholder;
    }

    async function saveUserChoice() {
        let url = "placeholder";

        return await this.fetcher(url, "POST");

    }

    useEffect(() => {
        getImage();

    })

    return (
        <div className="p_leftL p_rightR">
            {(showAI) ?
                <React.Fragment>
                    <p>{`The AI thinks the leaf is ${aiHealth}.`}</p>
                    {(aiHealth === 'healthy') ?
                        <img
                            src={imageUrl}></img>
                        :
                        <Draw img={imageUrl}/>
                    }
                </React.Fragment>
                :
                <div className="row">
                    <div className="column6 p_topL fill p_leftL">
                        <img
                            src={imageUrl}
                            alt="placeholder"></img>
                    </div>
                    <div className="column4">
                    </div>
                </div>
            }
            {(showAI) ?
                <div className="row header">
                    <button className="bkg_ColorHealthy o_btn o_btnXL" type="button" onClick={onNext}>
                        <b>Next</b>
                    </button>
                </div>
                :
                <div className="row header">
                    <button className="bkg_ColorHealthy o_btn o_btnXL" type="button" onClick={onHealthy}>
                        <b>Healthy</b>
                    </button>
                    <button className="bkg_ColorUnhealthy o_btn o_btnXL mar_left" type="button" onClick={onSick}>
                        <b>Unhealthy</b>
                    </button>
                </div>
            }
        </div>
    );
}

export default Training;