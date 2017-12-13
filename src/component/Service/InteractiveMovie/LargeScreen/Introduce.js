import React from 'react';
import title1 from '../../../../static/title1.png';
const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  750 /1200;
const introWidth = windowWidth * 0.335;
const introHeight = windowHeight *  0.16;
const introX = windowWidth * 99 / 1200;
const introY = windowHeight * 334 / 750;

function Introduce(props) {
    return(
        <img src = {title1} alt = 'introduce1' style = {{
            position: 'absolute',
            width: introWidth,
            height: introHeight,
            top: introY,
            left: introX,
            filter: `${props.blur}`
        }} />


    );
}

export default Introduce;