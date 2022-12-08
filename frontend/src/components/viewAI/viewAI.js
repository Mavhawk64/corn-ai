import React, {useEffect} from 'react';
import '../../css/HomePage.css';
import Draw from "../draw/draw";
import {fetcher} from "../shared/helpers";

const ViewAI = () => {
    let [imageUrl, setImageUrl] = React.useState("https://via.placeholder.com/468x60?text=Agro-AI+Placeholder");
    let [health, setHealth] = React.useState('unknown');
    let sickAreaAi = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    };
    let sickAreaActual = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    };

    function onNext() {
        getImage();
    }

    async function getImage() {
        let imageData = await fetcher('requestImage', 'GET')

        console.log(imageData);

        (imageData.isSick) ? setHealth("healthy") : setHealth("sick");
        sickAreaAi = imageData.sickAreaAI;
        sickAreaActual = imageData.sickAreaActual;
        setImageUrl(imageData.imageUrl);
    }

    useEffect(() => {
        getImage();
    })

    return (
        <div className="p_leftL p_rightR">
            <React.Fragment>
                <p>{`The AI thinks the leaf is ${health}.`}</p>
                {(health === 'healthy') ?
                    <div>
                        <img src={imageUrl}></img>
                    </div>
                    :
                    <div>
                        <p>The blue rectangle represents the area the AI determines as sick.</p>
                        <p>The red rectangle represents the actual sick area.</p>
                        <Draw img={imageUrl} sickAreaAi={sickAreaAi} sickAreaActual={sickAreaActual}/>
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