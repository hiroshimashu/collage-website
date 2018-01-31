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





function AboutTitle(props) {
    return(
        <img className="AboutTitle" src = {aboutImage} alt = 'aboutTitle' style = {{...styles.image}}/>
    );
}

const styles = {
    image: {
        position: 'absolute',
        width: 32.75 + 'vw',
        left: 33.625 +'vw',
        height:'auto',
        top: 5.25 + 'vw',
    }
}

export default AboutTitle;