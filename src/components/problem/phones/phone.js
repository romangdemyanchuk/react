import React from 'react';
import './phone.css';

function Phones (props) {
    return (
            <img src={props.itemSrc} alt={props.alt} />
    );
};

export default Phones;