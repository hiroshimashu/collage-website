import React from 'react';
import Mail from '../../../static/email.png';
const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  1974 / 750;
const logoWidth = windowWidth * 0.06;
const logoHeight = windowHeight *  0.018;
const logoX = 168 / 750 *  windowWidth
const logoY = windowHeight * 1841 / 1974;




function MailLogo() {
    return(
        <img style = {styles.logo} src = {Mail} alt = 'email' />
    );
}

const styles = {
    logo: {
        position: 'absolute',
        width: logoWidth,
        height: logoHeight,
        top: logoY,
        left: logoX
    }
}
export default MailLogo;