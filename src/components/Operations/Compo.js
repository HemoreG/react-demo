import React from "react";
import ant from '../../assets/images/ant.png'

export default function Compo({count = 0}) {
    const divStyle = {
        margin: '0.5rem',
        border: 'black dashed 1px',
        borderRadius: '100%'
    };

    const antStyle = {
        width: '20rem'
    };

    return (!count ?
            (
                <img style={antStyle} src={ant} alt={"Ant image" + count}/>
            ) :
            (
                <div style={divStyle}>
                    <Compo count={count - 1}/>
                </div>
            )
    );
}