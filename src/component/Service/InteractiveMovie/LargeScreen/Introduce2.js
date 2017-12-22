import React from 'react';
import title2 from '../../../../static/title2.png';
const windowWidth = window.innerWidth;
const windowHeight =  window.innerHeight;
const intro2Width = windowWidth * 0.258;
const intro2Height = windowHeight *  0.053;
const intro2X = windowWidth * 195 / 1200;
const intro2Y = windowHeight * 424 / 750;



function Introduce2(props) {
    return(
        <img src = {title2} style = {{
            position: 'absolute',
            width: intro2Width,
            height: intro2Height,
            top: intro2Y,
            left: intro2X,
            filter: `${props.blur}`
        }} />
    );
}

export default Introduce2;