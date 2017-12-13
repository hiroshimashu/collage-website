import React from 'react';
import logo from '../../static/logo.png';

const windowSize = window.innerWidth;
const wrapperHight = `${2917 / 750 * 100}%`;
const logoWidth = windowSize * 0.064;


function Logo2() {
    return(
        <img src = {logo} style = {styles.logo} />
    );
}




const styles = {
    logo: {
        width: logoWidth,
        height:logoWidth
    }
}

export default Logo2;