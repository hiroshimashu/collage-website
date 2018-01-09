import React from 'react';
import title1 from '../../../static/title1.png';
const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  1974 / 750;
const introWidth = windowWidth * 0.684;
const introHeight = windowHeight *  0.078;
const introX = windowWidth * 98 / 750;
const introY = windowHeight * 447 / 1974;




function Introduce() {
    return(
        <img src = {title1} style = {styles.intro} />
    );
}

const styles = {
    intro: {
        position: 'absolute',
        fontFamily: 'dnp-shuei-mgothic-std',
        width: introWidth,
        height: 'auto',
        top: introY,
        left: introX,
    },
}

export default Introduce;