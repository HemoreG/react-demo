import React from "react";
import cat from '../assets/images/cat.png'

export default function ColorCat({color}) {
    const divStyle = {
        background: color,
        borderRadius: '100%'
    };

    const catStyle = {
        width: '20rem'
    };

    return (
        <div style={divStyle}>
            <img style={catStyle} src={cat} alt={"Colored Cat"}/>
        </div>
    );
}