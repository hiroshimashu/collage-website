import React from 'react';
import aboutImage from '../../static/aboutTitle.png';


const windowSize = window.innerWidth;
const windowHeight =2917 / 750 * windowSize;
const imgWidth = windowSize * 0.524;
const imgHeight = imgWidth * 94/393;
function calculatePositionX() {
    const x = (windowSize - imgWidth)
    return x / 2;
}
const imgX = calculatePositionX()
const imgY = windowHeight * 133 / 2917;
const aboutX = `${ 174 / 750 * 100}%`;
const aboutY = `${ 133 / 2917 * 100}%`;



function AboutImage2() {
    return (
        <img src = {aboutImage} alt =  'smallImage' style =  {styles.aboutImage2}/>
    );
}

const styles = {
    aboutImage2: {
        position: 'absolute',
        width: imgWidth,
        height:imgHeight,
        left:imgX,
        right:imgX,
        top:imgY,
    }
};

export default AboutImage2;