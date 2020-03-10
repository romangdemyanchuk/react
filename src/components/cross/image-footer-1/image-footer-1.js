import React from 'react';
import './image-footer-1.css';

function ImageFooter1 (props) {
    return (
        <img src={props.itemSrc} alt={props.alt} />
    );
};

export default ImageFooter1;