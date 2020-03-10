import React from 'react';
import './slide.css';

function Slide (props) {
    return (
        <div className="reviews-slider-item">
            <img src={props.itemSrc} alt={props.alt} />
        </div>
    );
};

export default Slide;