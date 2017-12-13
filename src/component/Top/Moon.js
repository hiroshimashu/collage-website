import React from 'react';
import moon from '../../static/Moon.png';


const windowWidth = window.innerWidth;
const windowHeight = 1334 / 750 * windowWidth;

const moonWidth  = windowWidth *  0.083;
const moonHeight = windowHeight *  0.057;
const moonX = windowWidth *  66 / 750;
const moonY = windowHeight * 436 / 1334;



function Moon() {
    return(
        <img src = {moon} alt = 'moon' style = {styles.moon} />
    );
}

const styles = {
    moon: {
        position: 'absolute',
        width: moonWidth,
        height: moonHeight,
        top: moonY,
        left: moonX
    }
}

export default Moon;