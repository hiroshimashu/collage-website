import React from 'react';
import Property from '../../../static/Property.png';

const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  1974 / 750;
const titleWidth = windowWidth * 0.633;
const titleHeight = windowHeight *  0.018;
function calculateTitleX() {
    const  x = (windowWidth - titleWidth)/2;
    return x;
}
const titleX = calculateTitleX();
const titleY = windowHeight * 1136 / 1974;



function InteractiveMainTitle2() {
    return(
        <img src = {Property} style = {styles.property} />
    );
}

const styles = {
    property: {
        position: 'absolute',
        width: titleWidth,
        height: titleHeight,
        top: titleY,
        left: titleX,
        right: titleX
    }
}

export default InteractiveMainTitle2;