import React from "react";
import pandaRoux from '../../assets/images/red-panda.jpg'
import {Columns} from "react-bulma-components";

export default function MultiFirefox({count = 0}) {

    const firefoxStyle = {
        width: '10rem'
    };

    let allFirefoxes = [];
    for (let i = 0; i < count; i++) {
        allFirefoxes.push(
            <Columns.Column key={i}>
                <img style={firefoxStyle} src={pandaRoux} alt={"MultiFirefox image" + count}/>
            </Columns.Column>
        )
    }

    return allFirefoxes;
}