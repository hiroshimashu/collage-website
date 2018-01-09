import React from 'react';
import mailButton from '../../../static/Mail-wrapper.png';

const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  3812 / 750;
const ButtonWidth = windowWidth * 0.631;
const ButtonHeight = windowHeight *  0.023;
function calculateButtonX() {
    const  x = (windowWidth - ButtonWidth)/2;
    return x;
}
const ButtonX = calculateButtonX();
const ButtonY = windowHeight * 3649 / 3812;


function MailButton() {
    return(
        <img style = {styles.wrapper} src = {mailButton} />
    );
}

const styles = {
    wrapper: {
        position: 'absolute',
        width: ButtonWidth,
        height:  ButtonHeight,
        top: ButtonY,
        right: ButtonX,
        left: ButtonX,
        zIndex:2,
        border: '1px solid',
        borderRadius: '0.1em'
    }
}

export default MailButton;