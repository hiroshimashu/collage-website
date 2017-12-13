import React from 'react';
import sub from '../../static/GROUPSUB.png';

const windowWidth = window.innerWidth;
const windowHeight = 2917 / 750 * windowWidth;
const titleWidth =  windowWidth * 0.125;
const titleHeight = windowHeight *  0.007;
function calculatePositionX() {
    const x = (windowWidth - titleWidth)
    return x / 2;
}

const titleX = calculatePositionX()
const titleY = 128 / 2917 * windowHeight;


function GroupSubTitle2() {
    return(
        <img src = {sub} alt = 'sub' style = {styles.subtitle} />
    );
}

const styles = {
    subtitle: {
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        color: '#a2a2a2',
        fontSize: '11px',
        textAlign: 'center',
        position: 'absolute',
        letterSpacing: '0.1em',
        width: titleWidth,
        height: titleHeight,
        top: titleY,
        left: calculatePositionX(),
        right: calculatePositionX()
    }
};

export default GroupSubTitle2;