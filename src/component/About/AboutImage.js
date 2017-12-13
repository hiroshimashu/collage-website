import React from 'react';
import aboutImage from '../../static/aboutTitle.png';
import Radium from 'radium';
const { StyleRoot }  = Radium;

function AboutImage() {
    return(
        <StyleRoot>
            <img src = {aboutImage} style = {styles.title} />
        </StyleRoot>
    );
}


const windowSize = window.innerWidth;
const wrapperHight = `${2917 / 750 * 100}%`;
const logoWidth = windowSize * 0.064;
function calculatePositionX() {
    const x = (windowSize - imgWidth)
    return x / 2;
}
const imgX = calculatePositionX()
const aboutX = `${ 174 / 750 * 100}%`;
const aboutY = `${ 133 / 2917 * 100}%`;
const styles = {
    title: {
        position: 'absolute',
        width: logoWidth,
        height:logoWidth,
        left:imgX,
        right:imgX,
        top:aboutY,
    }
};

export default AboutImage;