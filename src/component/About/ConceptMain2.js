import React from 'react';
import conceptMain from '../../static/concept.png';

const windowWidth = window.innerWidth;
const windowHeight = 2917 / 750 * windowWidth;
const conceptWidth = windowWidth * 0.827;
const conceptHeight = windowHeight *  0.177;

function calculatePositionX() {
    const x = (windowWidth - conceptWidth)
    return x / 2;
}
const conceptX = calculatePositionX();
const conceptY = windowHeight * 359 / 2917;



function ConceptMain2() {
    return(
        <img src = {conceptMain} style={styles.conceptMain} alt =  'main'/>
    );
}

const styles = {
    conceptMain: {
        position: 'absolute',
        width: conceptWidth,
        height: conceptHeight,
        top:conceptY,
        left:conceptX,
        right:conceptX,
        fontSize: '11px',
        color:  '#484848',
        lineHeight: '23px',
        textAlign: 'center',
        transform: 'scaleY(1.0008)',
        fontFamily: 'a-otf-gothic-bbb-pr6n'
    }
}

export default ConceptMain2;
