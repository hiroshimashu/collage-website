import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Radium from 'radium';
const { StyleRoot } = Radium;


const conceptTitleWidth = `${205/1200 * 100}vw`;
const conceptTitleLeft = `${calculatePositionConceptX('205px')}%`;
const conceptTitleTop = `${253/930 * 100}%`;
const conceptTitleLeft2 = `${269/750 * 100}%`;
const conceptTitleTop2 = `${290/963 * 100}%`;



function calculatePositionConceptX(width) {
    const x = 'calc(' + '(100%' + ' - width)' + '/2)';
    console.log(x)
    return x;
}


function ConceptTitle() {
    return(
        <StyleRoot>
            <div style ={styles.conceptMainTitle}>
              CONCEPT
            </div>
        </StyleRoot>
    );
}

const styles = {
    conceptMainTitle: {
        position: 'absolute',
        width: '205px',
        height: '32px',
        top: '253px',
        fontWeight: '500',
        right:conceptTitleLeft,
        left: conceptTitleLeft,
        letterSpacing: '0.1em',
        fontFamily: 'HiraginoUDSansStdN',
        fontSize: '40px',
        color:'#2d2d2d',
        lineHeight: '41.316px',
        textAlign: 'center',
        '@media (maxWidth: 500px)':{
            right: conceptTitleLeft2,
            left:  conceptTitleLeft2,
            position: 'absolute',
            width: '205px',
            height: '32px',
        }
    }
};


export default ConceptTitle;