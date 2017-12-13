import React from 'react';
import Sub4 from '../../../../static/sub4.png';
const windowWidth = window.innerWidth;
const windowHeight = 750 / 1200  * windowWidth;
const screenWidth = windowWidth * 0.142;
const screenHeight = windowHeight * 0.403;
const screenX = 377 / 1200 * windowWidth
const screenY = windowHeight * 273 / 750;


function Screen5() {
    return(
        <div>
            <img src = {Sub4} style ={styles.screen} />
        </div>
    );
}

const styles = {
    screen: {
        position: 'absolute',
        width: screenWidth,
        height: screenHeight,
        top: screenY,
        left: screenX
    }
};


export default Screen5;