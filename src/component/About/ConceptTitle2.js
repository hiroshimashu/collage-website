import React from 'react';
import ConceptTitle from '../../static/CONCEPTitle.png';

const windowSize = window.innerWidth;
const windowHeight = 2917 / 750 * windowSize ;
const titleWidth = 205 / 750 * windowSize;
const titleHeight =  32 / 2917 * windowHeight;

function calculatePositionX() {
    const x = (windowSize - titleWidth)
    return x / 2;
}

const titleX  = calculatePositionX();
const titleY = windowHeight *   290 / 2917;




function ConceptTitle2() {
    return(
        <img src = {ConceptTitle} alt = 'ctitle' style ={styles.conceptMainTitle}/>
    );
}

const styles = {
    conceptMainTitle: {
        position: 'absolute',
        width: titleWidth,
        height: titleHeight,
        fontSize: '20px',
        left: titleX,
        right:titleX,
        top: titleY,
        letterSpacing: '0.1em',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        fontWeight: 600,
        textAlign: 'center',
        color: '#2d2d2d',
    }
};

export default ConceptTitle2;