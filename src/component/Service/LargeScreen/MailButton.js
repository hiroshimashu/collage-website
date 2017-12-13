import React from 'react';

const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  750 / 1200;
const ButtonWidth = windowWidth * 0.27;
const ButtonHeight = windowHeight *  0.037;
function calculateButtonX() {
    const  x = (windowWidth - ButtonWidth)/2;
    return x;
}
const ButtonX = calculateButtonX();
const ButtonY = windowHeight * 689 / 750;


function MailButton() {
    return(
        <div style =  {styles.wrapper} onClick ={() => {console.log('question?');}}>

        </div>
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
    }
}

export default MailButton;