import React from 'react';
const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  750 / 1200;
const mailWidth = windowWidth * 0.232;
const mailHeight = windowHeight *  0.036;
const mailX = 483 / 1200 *  windowWidth;
const mailY = windowHeight * 689 / 750;
console.log(mailY, windowHeight);

function MailMain() {
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
        fontSize: '29px',
        letterSpacing: '0.1em',
        textAlign: 'left',
        lineHeight: '29px',
        fontFamily: 'dnp-shuei-mgothic-std',
    }
}

export default MailMain;