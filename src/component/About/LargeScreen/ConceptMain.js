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



function ConceptMain() {
    return(
        <img src ={concept} style={styles.conceptMain} />
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
        fontSize: '16.99px',
        color:  '#484848',
        lineHeight: '45px',
        textAlign: 'center',
        transform: 'scaleY(1.0008)',
        fontFamily: 'a-otf-futo-min-a101-pr6n'
    }
}

export default ConceptMain;
