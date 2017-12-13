import React from 'react';
import Sub2 from '../../../../static/sub2.png';
const windowWidth = window.innerWidth;
const windowHeight = 750 / 1200  * windowWidth;
const screenWidth = windowWidth * 0.142;
const screenHeight = windowHeight * 0.403;
const screenX = 377 / 1200 * windowWidth
const screenY = windowHeight * 273 / 750;


function Screen4() {
    return(
        <div>
            <img src = {Sub2} style ={styles.screen} />
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


export default Screen4;