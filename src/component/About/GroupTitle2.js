import React from 'react';
import group from '../../static/COLLAGEGROUP.png';

const windowWidth = window.innerWidth;
const windowHeight = 2917 / 750 * windowWidth;
const titleWidth =  windowWidth * 0.264;
const titleHeight = windowHeight *  0.011;
function calculatePositionX() {
    const x = (windowWidth - titleWidth)
    return x / 2;
}

const titleX = calculatePositionX()
const titleY = 80 / 2917 * windowHeight;

function GroupTitle2() {
    return(
        <img src = {group} className="groupTitle" alt = 'group' style = {styles.group} />
    );
}

const styles = {
    group: {
        color:  '#2d2d2d',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        fontWeight: 600,
        fontSize: '20px',
        textAlign: 'center',
        letterSpacing: '0.1em',
        position: 'absolute',
        width: titleWidth,
        height: titleHeight,
        top: titleY,
        left: titleX,
        right: titleX,
    }
}

export default GroupTitle2;