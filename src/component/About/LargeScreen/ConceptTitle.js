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
const titleY = windowHeight *  253 / 2744;




function ConceptTitle(props) {
    return(
        <img src = {conceptTitle} alt = 'conceptTitle' style = {{...styles.conceptMainTitle}}/>
    );
}

const styles = {
    conceptMainTitle: {
        position: 'absolute',
        width: 17.08 + 'vw',
        height: 'auto',
        top: 21.083 + 'vw',
        left: 41.46 + 'vw'
    }
};

export default ConceptTitle;