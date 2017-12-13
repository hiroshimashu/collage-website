import React from 'react';
import Satoshi from '../../../../static/satoshiLarge.png';
import Yuya from '../../../../static/yuyaLarge.png';
import Miki from '../../../../static/mikiLarge.png';
import LineStore from '../../../../static/lineStoreLarge.png';
import Characters from '../../../../static/characters.png';

const windowWidth = window.innerWidth;
const windowHeight = 750 / 1200  * windowWidth;
const img1Width = windowWidth * 0.609;
const img1Height = windowHeight * 0.415;
const img1X = 262 / 1200 * windowWidth
const img1Y = windowHeight * 228 / 750;

const img4Width = windowWidth * 0.131;
const img4Height = windowHeight * 0.061;
const img4X = 523 / 1200 * windowWidth
const img4Y = windowHeight * 592 / 750;


function LineStampScreen() {
    return(
        <div>
            <img src = {Characters} alt = 'character' style = {styles.character}/>
            <img src = {LineStore} alt = 'line' style = {styles.line} />
        </div>
    );
}

const styles = {
    character: {
        position: 'absolute',
        width: img1Width,
        height: img1Height,
        left: img1X,
        top: img1Y
    },
    line: {
        position: 'absolute',
        width: img4Width,
        height: img4Height,
        left: img4X,
        top: img4Y
    },
}


export default LineStampScreen;