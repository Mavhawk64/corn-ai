import React, {useEffect} from 'react';
import '../../css/HomePage.css';
import Draw from "../draw/draw";
import {fetcher} from "../shared/helpers";

const ViewAI = () => {
    let [imageUrl, setImageUrl] = React.useState("https://via.placeholder.com/468x60?text=Agro-AI+Placeholder");
    let aiHealth = "unknown";
    let confidence = "one billion";

    function onNext() {
        getImage();
    }

    async function getImage() {
        let url = "placeholder";
        let args = {
            method: "GET",
            body: JSON.stringify("placeholder")
        };
        // let imageData =  await this.fetcher(url, args);
        // aiHealth = imageData.placeholder;
        // confidence = imageData.placeholder;
        // setImageUrl(imageData.placeholder);
    }

    useEffect(() => {
        getImage();
    })

    return (
        <div>
            <React.Fragment>
                <p>{`The AI thinks the leaf is ${aiHealth} with a confidence of ${confidence}.`}</p>
                {(aiHealth === 'healthy') ?
                    <img
                        src={imageUrl}></img>
                    :
                    <Draw img={imageUrl}/>
                }
            </React.Fragment>
            <div className="row header">
                <button className="bkg_ColorHealthy o_btn o_btnXL" type="button" onClick={onNext}>
                    <b>Next</b>
                </button>
            </div>
        </div>
    );

}

export default ViewAI;