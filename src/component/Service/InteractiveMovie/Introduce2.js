import React from 'react';
import title2 from '../../../static/title2.png';
const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  1974 / 750;
const intro2Width = windowWidth * 0.525;
const intro2Height = windowHeight *  0.026;
const intro2X = windowWidth * 220 / 750;
const intro2Y = windowHeight * 580 / 1974;



function Introduce2() {
    return(
        <img src = {title2} style = {styles.intro} />
    );
}

const styles = {
    intro: {
        position: 'absolute',
        width: intro2Width,
        height: 'auto',
        top: intro2Y,
        left: intro2X
    },
}

export default Introduce2;