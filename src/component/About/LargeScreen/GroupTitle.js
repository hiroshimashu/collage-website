import React from 'react';
import group from '../../../static/COLLAGEGROUP.png';

const windowWidth = window.innerWidth;
const windowHeight = 2744 / 1200 * windowWidth;
const titleWidth =  windowWidth * 0.165;
const titleHeight = windowHeight *  0.012;
function calculatePositionX() {
    const x = (windowWidth - titleWidth)
    return x / 2;
}

const titleX = calculatePositionX()
const titleY = 133 /2744 * windowHeight;

function GroupTitle2(props) {
    return(
        <img src = {group} className="groupTitle" alt = 'group' style = {{...styles.group}} />
    );
}

const styles = {
    group: {
        position: 'absolute',
        width: 16.5 + 'vw',
        height: 'auto',
        top: 11.083 + 'vw',
        left: 41.75 + 'vw'
    }
}

export default GroupTitle2;