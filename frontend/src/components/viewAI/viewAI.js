import React, {useEffect} from 'react';
import '../../css/HomePage.css';
import Draw from "../draw/draw";
import {fetcher} from "../shared/helpers";

const ViewAI = () => {
    let [imageUrl, setImageUrl] = React.useState("https://via.placeholder.com/468x60?text=Agro-AI+Placeholder");
    let aiHealth = "unknown";

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
        // setImageUrl(imageData.placeholder);
    }

    useEffect(() => {
        getImage();
    })

    return (
        <div class="p_leftL p_rightR">
            <React.Fragment>
                <p>{`The AI thinks the leaf is ${aiHealth}.`}</p>
                {(aiHealth === 'healthy') ?
                    <div>
                        <img src={imageUrl}></img>
                    </div>
                    :
                    <div>
                        <p>The green rectangle represents the area the AI determines as sick.</p>
                        <p>The red rectangle represents the actual sick area.</p>
                        <Draw img={imageUrl}/>
                    </div>
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