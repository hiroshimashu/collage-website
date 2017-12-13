import React from 'react';
const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  1974 / 750;
const introWidth = windowWidth * 0.684;
const introHeight = windowHeight *  0.078;
const introX = windowWidth * 98 / 750;
const introY = windowHeight * 447 / 1974;



function Introduce() {
    return(
        <div style = { styles.intro }>
            <div style = {{ fontSize: '26px'}}>
                スマホ上で
            </div>
            <div style = {{ fontSize: '34px', color: '#8f82bc'}}>
                ”触って変わる”
            </div>
        </div>
    );
}

const styles = {
    intro: {
        position: 'absolute',
        fontFamily: 'dnp-shuei-mgothic-std',
        width: introWidth,
        height: introHeight,
        fontWeight: '600',
        lineHeight: '41px',
        top: introY,
        left: introX,
        textAlign: 'left',
        transform: 'matrix(1.0314,0.0087,0.0061,1.0001,0,0)',
        letterSpacing: '0.1em'

    },
}

export default Introduce;