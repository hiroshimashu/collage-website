import React from 'react';
import LineStore from '../../../static/lineStore.png';
const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  1334 /750;


const wrapperWidth = windowWidth * 0.344;
const wrapperHeight = windowHeight * 0.057;
function calculateWrapperX() {
    return (windowWidth - wrapperWidth) / 2;
}
const wrapperX = calculateWrapperX()
const wrapperY = windowHeight * 1079 / 1334;

const buttonWidth = windowWidth * 0.243;
const buttonHeight = windowHeight * 0.018;
function calculateButtonX() {
    return (windowWidth - buttonWidth) / 2;
}
const buttonX = calculateButtonX()
const buttonY = windowHeight * 1106 / 1334;



function LineButton() {
    return(
        <div>
            <img src = {LineStore} style = {styles.buttonWrapper}/>
            <div style = { styles.button }>LINE STORE</div>
        </div>
    );
}
const styles = {
    buttonWrapper: {
        position: 'absolute',
        width: wrapperWidth,
        height:wrapperHeight,
        top: wrapperY,
        left: wrapperX,
        backgroundColor: '#ffffff',
        borderRadius: '0.1em'
    },
    button: {
        position: 'absolute',
        width: buttonWidth,
        height:buttonHeight,
        top: buttonY,
        left: buttonX,
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        color: '#ffffff',
        textAlign: 'center',
        transform : 'scaleY(1.0128)',
        fontSize: '12px',
        lineHeight: '12px',
        letterSpacing: '0.1em'
    }
}

export default LineButton;