import React from 'react';


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
        <div style = {styles.intro}>
            <div style = {{fontFamily: 'dnp-shuei-mgothic-std',color: '#000000',fontSize: '20px', textAlign: 'center',letterSpacing: '0.1em', fontWeight: '600'}}>
                特急仕上げで
            </div>
            <div style = {{fontFamily: 'dnp-shuei-mgothic-std',fontSize: '35px',letterSpacing: '0.05em' ,fontWeight: '600', color: '#8f82bc',lineHeight: '30px'}}>
                ”企画書作成を代行”
            </div>
        </div>
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