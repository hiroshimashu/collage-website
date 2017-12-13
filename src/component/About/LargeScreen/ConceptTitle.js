import React from 'react';
import conceptTitle from '../../../static/CONCEPTitle.png';

const windowSize = window.innerWidth;
const windowHeight = 2744 / 1200 * windowSize ;
const titleWidth = 205;
const titleHeight = 32;

function calculatePositionX() {
    const x = (windowSize - titleWidth)
    return x / 2;
}

const titleX  = calculatePositionX();
const titleY = windowHeight *  240 / 2744;




function ConceptTitle() {
    return(
        <img src = {conceptTitle} alt = 'conceptTitle' style = {styles.conceptMainTitle}/>
    );
}

const styles = {
    conceptMainTitle: {
        position: 'absolute',
        width: titleWidth,
        height: titleHeight,
        left: titleX,
        right:titleX,
        top: titleY,
    }
};

export default ConceptTitle;