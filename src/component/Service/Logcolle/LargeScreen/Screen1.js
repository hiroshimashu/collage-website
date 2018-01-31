import React from 'react';
import whiteScreen from '../../../../static/Iphone_Screen.png';
import LogColle from '../../../../static/logcolle.png';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const screenWidth = windowWidth * 0.142;
const screenX = 377 / 1200 * windowWidth
const screenY = windowHeight * 273 / 750;
const logWidth = windowWidth * 0.083;
const logX = 410 / 1200 * windowWidth;
const logY = windowHeight * 0.499;


function Screen1(props) {
    return(
        <div>
            <img className = 'whiteScreen' src = {whiteScreen} style = {{...styles.screen}} />
            <img className = 'log' src = {LogColle} style = {{...styles.log}} />
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
    },
    log: {
        position: 'absolute',
        width: 100,
        height: 100,
        top: 128,
        left:62
    },


};

export default Screen1;