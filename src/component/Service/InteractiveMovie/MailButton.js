import React from 'react';
import MailWrapper from '../../../static/Mail-wrapper.png';

const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  1974 / 750;
const ButtonWidth = windowWidth * 0.631;
const ButtonHeight = windowHeight *  0.044;
function calculateButtonX() {
    const  x = (windowWidth - ButtonWidth)/2;
    return x;
}
const ButtonX = calculateButtonX();
const ButtonY = windowHeight * 1814 / 1974;


function MailButton() {
    return(
        <img style =  {styles.wrapper} src = {MailWrapper}onClick ={() => {console.log('question?');}} />
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