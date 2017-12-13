import React from 'react';
import logo from '../../../../static/logo.png';

const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  1974 / 750;
const logoWidth = windowWidth * 0.035;
const logoX = 15 / 1200 * windowWidth;
const logoY = 20 / 2246  *  windowHeight;

function Logo() {
    return(
        <img src = {logo} style = {styles.logo} />
    );
}




const styles = {
    logo: {
        position: 'absolute',
        width: logoWidth,
        height: logoWidth,
        top: logoY,
        left: logoX,
        zIndex:2
    },
}

export default Logo;