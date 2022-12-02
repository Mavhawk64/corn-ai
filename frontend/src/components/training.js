import React, {useEffect} from 'react';
import '../css/HomePage.css';
import Draw from "./draw/draw";
import {fetcher} from "./shared/helpers";

const Training = () => {

    let [showAI, setShowAI] = React.useState(false);
    let userChoice = "none";
    let imageUrl = "https://via.placeholder.com/468x60?text=Agro-AI+Placeholder";
    let aiHealth = "unknown";
    let confidence = "one billion";

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
        let args = {
            method: "GET",
            body: JSON.stringify("placeholder")
        };

        // let imageData =  await this.fetcher(url, args);
        // imageUrl = imageData.placeholder;
        // aiHealth = imageData.placeholder;
        // confidence = imageData.placeholder;
    }

    async function saveUserChoice() {
        let url = "placeholder";
        let data = {
            'placeholder': imageUrl,
            'placeholder1': aiHealth,
            'placeholder2': confidence,
            'placeholder3': userChoice
        };
        let args = {
            method: "PUT",
            body: JSON.stringify(data)
        };

        return await this.fetcher(url, args);

    }

    useEffect(() => {
        getImage();

    })

    return (
        <div>
            {(showAI) ?
                <React.Fragment>
                    <p>{`The AI thinks the leaf is ${aiHealth} with a confidence of ${confidence}.`}</p>
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