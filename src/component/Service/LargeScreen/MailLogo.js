import React from 'react';
import Mail from '../../../static/email.png';
const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  750 / 1200;
const logoWidth = windowWidth * 0.03;
const logoHeight = windowHeight *  0.037;
const logoX = 437 / 1200 *  windowWidth
const logoY = windowHeight * 689 / 750;




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