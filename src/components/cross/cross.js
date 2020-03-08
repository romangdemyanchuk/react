import React from 'react';
import './cross.css';
import img1 from '../images/Lingua web 1.png'
import img2 from '../images/Lingua web 2.png'
import img5 from '../images/Lingua web 5.png'
import img6 from '../images/Lingua web 6.png'

const Cross = () =>{
    return (
        <section className="cross">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="cross-subtitle">Cross platform experience
                        </div>
                        <p className="text">In order to make the on-demand learning experience more accessible, we
                            deemed web responsivity to be crusial to our users. This allows students to easily have
                            conversations at any time or on the go.
                        </p>
                    </div>
                </div>
            </div>
            <div className="image-footer">
                <div className="image-footer-1">
                    <img src={img1} alt="logo" />
                    <img src={img2} alt="logo" />
                    <img src={img5} alt="logo" />
                </div>
                <div className="image-footer-2">
                    <img className="img-first" src={img5} alt="logo" />
                    <img src={img6} alt="logo" />
                    <img src={img1} alt="logo" />
                    <img className="img-last" src={img2} alt="logo" />
                </div>
            </div>
        </section>
    );

};

export default Cross;