import React, {useEffect} from 'react';
import '../css/HomePage.css';
import Draw from "./draw/draw";
import {fetcher} from "./shared/helpers";

const Training = () => {

    let [showAI, setShowAI] = React.useState(false);
    let [imageUrl, setImageUrl] = React.useState("false");
    let userChoice = "none";
    let [health, setHealth] = React.useState('unknown');
    let [sickAreaAi, setSickAreaAi] = React.useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    });
    let [sickAreaActual, setSickAreaActual] = React.useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    });

    let [loading, setLoading] = React.useState(true);

    function onHealthy() {
        userChoice = "healthy";
        setShowAI(true);
        // saveUserChoice();
    }

    function onSick() {
        userChoice = "sick";
        setShowAI(true);
       // saveUserChoice();
    }

    function onNext() {
        getImage();
        setShowAI(false);
    }

    async function getImage() {

        setLoading(true);

        let imageData = await fetcher('requestImage', 'GET');

        (imageData.isSick) ? setHealth("sick") : setHealth("healthy");
        setSickAreaAi(imageData.sickAreaAI);
        setSickAreaActual(imageData.sickAreaActual);
        setImageUrl(imageData.imageUrl);
        setLoading(false);

    }

    async function saveUserChoice() {
        let url = "placeholder";

        return await this.fetcher(url, "POST");

    }

    useEffect(() => {
        if (loading) {
            getImage();
        }
    })

    return (
        <div className="p_leftL p_rightR">
            {(showAI) ?
                <React.Fragment>
                    <p>{`The AI thinks the leaf is ${health}.`}</p>
                    {(health === 'healthy') ?
                        <img
                            src={imageUrl} alt="corn leaf"style={{
                                width: "40%",
                                height: "auto",
                                aspectRatio: 3 / 2,
                            }}></img>
                        :
                        <div>
                            <p>The blue rectangle represents the area the AI determines as sick.</p>
                            <p>The red rectangle represents the actual sick area.</p>
                            <Draw img={imageUrl} sickAreaAi={sickAreaAi} sickAreaActual={sickAreaActual}/>
                        </div>
                    }
                </React.Fragment>
                :
                <div className="row">
                        <img
                            src={imageUrl}
                            alt="placeholder"
                            style={{
                                width: "40%",
                                height: "auto",
                                aspectRatio: 3 / 2,
                            }}></img>
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