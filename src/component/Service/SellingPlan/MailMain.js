import React from 'react';
const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  3812 / 750;
const mailWidth = windowWidth * 0.463;
const mailHeight = windowHeight *  0.018;
const mailX = 231 / 750 *  windowWidth;
const mailY = windowHeight * 3676 / 3812;

console.log(mailY, windowHeight);
function MailMain2() {

    return(
        <div style={styles.mailMain}>お問い合わせはこちら</div>
    );
}

const styles = {
    mailMain: {
        position: 'absolute',
        width:mailWidth,
        height:mailHeight,
        top: mailY,
        left: mailX,
        right: mailX,
        fontSize: '15.6px',
        letterSpacing: '0.1em',
        textAlign: 'left',
        fontFamily: 'dnp-shuei-mgothic-std',
        transform: 'scaleY(1.0019)',
        lineHeight: '18.7px'
    }
}

export default MailMain2;