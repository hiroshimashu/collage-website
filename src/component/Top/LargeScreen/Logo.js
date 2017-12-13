import React from 'react';
import logo from '../../../static/logo.png';

const windowWidth = window.innerWidth;
const windowHeight =  window.innerHeight * 750 / 1200;
const logoWidth = windowWidth * 0.035;
const logoX = windowWidth * 19/ 750;
const logoY = windowHeight * 20 / 1200;


function Logo() {
    return(
        <img src = {logo} style = {styles.logo} />
    );
}




const styles = {
    logo: {
        position: 'fixed',
        width: '42px',
        height: '42px',
        marginTop: '20px',
        marginLeft: '19px',
        zIndex:2
    },
}

export default Logo;