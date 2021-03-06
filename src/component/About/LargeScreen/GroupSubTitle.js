import React from 'react';
import sub from '../../../static/GROUPSUB.png';


const windowWidth = window.innerWidth;
const windowHeight = 2744 / 1200 * windowWidth;
const titleWidth =  windowWidth * 0.078;
const titleHeight = windowHeight *  0.007;
function calculatePositionX() {
    const x = (windowWidth - titleWidth)
    return x / 2;
}

const titleX = calculatePositionX()
const titleY = 183 / 2744 * windowHeight;


function GroupSubTitle(props) {
    return(
        <img src = {sub} alt = 'sub' style = {{...styles.subtitle}} />
    );
}

const styles = {
    subtitle: {
        position: 'absolute',
        width: 7.8 + 'vw',
        height: 'auto',
        top: 15.25 + 'vw',
        left: 46.1 + 'vw'
    }
};

export default GroupSubTitle;