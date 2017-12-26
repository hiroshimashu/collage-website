import React from 'react';
import sns from '../../../../static/sns.png';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const screenWidth = windowWidth * 0.142;
const screenHeight = windowHeight * 0.403;
const screenX = 377 / 1200 * windowWidth
const screenY = windowHeight * 273 / 750;


function Screen2(props) {
    return(
        <div>
            <img src = {sns} style = {{...styles.screen, width: props.screenWidth, left: props.screenX}} />
        </div>
    );
}

const styles = {
    screen: {
        position: 'absolute',
        height: 'auto',
        top: screenY,
    }
};


export default Screen2;