import React from 'react';
import './image-footer-2.css';

function ImageFooter2 (props) {
    return (
        <img src={props.itemSrc} alt={props.alt} />
    );
};

export default ImageFooter2;