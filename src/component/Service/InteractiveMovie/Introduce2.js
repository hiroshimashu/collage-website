import React from 'react';
const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  1974 / 750;
const intro2Width = windowWidth * 0.525;
const intro2Height = windowHeight *  0.026;
const intro2X = windowWidth * 220 / 750;
const intro2Y = windowHeight * 627 / 1974;



function Introduce2() {
    return(
        <div style = { styles.intro }>
            <div style = {{ fontSize: '26px',position: 'absolute', top:-10}}>
                新感覚ムービー
            </div>
        </div>
    );
}

const styles = {
    intro: {
        position: 'absolute',
        fontFamily: 'dnp-shuei-mgothic-std',
        width: intro2Width,
        height: intro2Height,
        fontWeight: '600',
        top: intro2Y,
        left: intro2X,
        textAlign: 'left',
        transform: 'matrix(1.0314,0.0087,0.0061,1.0001,0,0)',
        letterSpacing: '0.1em',
    },
}

export default Introduce2;