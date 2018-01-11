import React from 'react';
import moon from '../../../static/Moon.png';


const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const moonWidth  = windowWidth *  0.052;
const moonHeight = windowHeight *  0.101;
const moonX = windowWidth *  115 / 1200;
const moonY = windowHeight * 224 /750;



function Moon() {
    return(
        <img src = {moon} alt = 'moon' style = {styles.moon} />
    );
}

const styles = {
    moon: {
        position: 'absolute',
        width: moonWidth,
        height: 'auto',
        top: moonY,
        left: moonX
    }
}

export default Moon;