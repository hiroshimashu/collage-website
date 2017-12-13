import React from 'react';
import aboutImage from '../../../static/aboutTitle.png';

const windowWidth = window.innerWidth;
const windowHeight = windowWidth * 2744 / 1200;

const imgWidth = 393;
const imgHeight = 94;
function calculatePositionX() {
    const x = (windowWidth - imgWidth)
    return x / 2;
}
const imgX = calculatePositionX()
const imgY = windowHeight * 63 / 2744;





function AboutTitle() {
    return(
        <img className="AboutTitle" src = {aboutImage} alt = 'aboutTitle' style = {styles.image}/>
    );
}

const styles = {
    image: {
        position: 'absolute',
        width: imgWidth,
        height:imgHeight,
        left:imgX,
        right:imgX,
        top:imgY,
    }
}

export default AboutTitle;