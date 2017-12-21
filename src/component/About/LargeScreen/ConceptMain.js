import React from 'react';
import concept from '../../../static/concept.png';
const windowWidth = window.innerWidth;
const windowHeight = 2744 / 1200 * windowWidth;
const conceptWidth = 539;
const conceptHeight = 481;


function calculatePositionX() {
    const x = (windowWidth - conceptWidth)
    return x / 2;
}
const conceptX = calculatePositionX();
const conceptY = windowHeight * 322 / 2917;



function ConceptMain(props) {
    return(
        <img src ={concept} style={{...styles.conceptMain, left: props.conceptX, right: props.conceptX}} />
    );
}

const styles = {
    conceptMain: {
        position: 'absolute',
        width: conceptWidth,
        height: 'auto',
        top:conceptY
    }
}

export default ConceptMain;
