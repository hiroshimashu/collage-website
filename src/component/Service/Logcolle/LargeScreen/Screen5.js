import React from 'react';
import Sub4 from '../../../../static/sub4.png';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const screenWidth = windowWidth * 0.142;
const screenHeight = windowHeight * 0.403;
const screenX = 377 / 1200 * windowWidth
const screenY = windowHeight * 273 / 750;

function Screen5(props) {
    return(
        <div>
            <img  className = 'logColleScreen5' src = {Sub4} style = {{...styles.screen}} />
        </div>
    );
}

const styles = {
    screen: {
        position: 'absolute',
        width: 170,
        height: 302,
        top:41,
        left:29
    }
};


export default Screen5;