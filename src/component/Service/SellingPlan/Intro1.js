import React from 'react';
import SellingIntro from '../../../static/Selling-intro.png';



const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  3812 /750;
const introWidth = windowWidth *  0.890;
const introHeight = windowHeight *  0.038;
function calculateIntroX() {
    const  x = (windowWidth - introWidth)/2;
    return x;
}
const introX = calculateIntroX();
const introY = windowHeight * 403 / 3812;



function Intro1() {
    return(
        <img src = {SellingIntro} style = {styles.intro} />
    );
}

const styles = {
    intro:{
        position: 'absolute',
        width: introWidth,
        height: introHeight,
        left: introX,
        right: introX,
        top: introY,
    }
}

export default Intro1;