import React, {useEffect} from 'react';
import '../../css/HomePage.css';
import Draw from "../draw/draw";
import {fetcher} from "../shared/helpers";

const ViewAI = () => {
    let [imageUrl, setImageUrl] = React.useState("https://via.placeholder.com/468x60?text=Agro-AI+Placeholder");
    let [health, setHealth] = React.useState('unknown');
    let [sickAreaAi, setSickAreaAi] = React.useState({});
    let [sickAreaActual, setSickAreaActual] = React.useState({});
    let [loading, setLoading] = React.useState(true);
    let [id, setId] = React.useState(0);

    function onNext() {
        console.log("next");
        if (id === 10) {
            setId(0);
        } else {
            setId(id+1);
        }
        getImage();
    }

    async function getImage() {
        setLoading(true);

        console.log(id);
        let imageData = await fetcher(`requestImage/${id}`, 'GET');

        // (imageData.isSick) ? setHealth("sick") : setHealth("healthy");
        setHealth("sick");
        setSickAreaAi(imageData.sickAreaAI);
        setSickAreaActual(imageData.sickAreasActual);
        setImageUrl(imageData.imageUrl);
        setLoading(false);
    }

    useEffect(() => {
        if (loading) {
            getImage();
        }
    })

    return (
        <div className="p_leftL p_rightR">
            <React.Fragment>
                <p>{`The AI thinks the leaf is ${health}.`}</p>
                {(health === 'healthy') ?
                    <div>
                        <img src={imageUrl} alt="corn leaf"
                             style={{
                                 width: "40%",
                                 height: "auto",
                                 aspectRatio: 3 / 2,
                             }}></img>
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