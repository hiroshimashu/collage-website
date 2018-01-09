import React from 'react';
import MailMain from '../../../static/Mail-main.png';
const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  1974 / 750;
const mailWidth = windowWidth * 0.463;
const mailHeight = windowHeight *  0.009;
const mailX = 229 / 750 *  windowWidth;
const mailY = windowHeight * 1841 / 1974;
console.log(mailY, windowHeight);

function MailMain2() {
    return(
        <div style={styles.mailMain} src = {MailMain}>お問い合わせはこちら</div>
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
        fontSize: '14.6px',
        letterSpacing: '0.1em',
        textAlign: 'left',
        fontFamily: 'dnp-shuei-mgothic-std',
        lineHeight: '18.6px',
        transform: 'scaleY(1.0019)'
    }
}

export default MailMain2;