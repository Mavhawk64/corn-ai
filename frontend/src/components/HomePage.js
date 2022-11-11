import React from 'react';
import '../css/HomePage.css';

const HomePage = () => {


    return (
        <div>
            <div className="row">
                <div className="column7 round shaded_light_norm">
                    <div className="fill round">
                        <img src={require('../inc/img/AI_hero.jpg')} alt='AI'/>
                    </div>
                </div>
                <div className="column3">
                    <div className='row p_topL'>
                        <div className="column5"></div>
                    </div>
                </div>
            </div>
            <div className="row p_top">
                <div className="column3">
                    <h1 className="mar_left">AI for Agriculture!</h1>
                </div>
                <div className="column7">
                    <div className="row">
                        <div className="column4"></div>
                        <div className="bkg_Color1 round mar_right p">
                            <h1>SEE THE FUTURE!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default HomePage;