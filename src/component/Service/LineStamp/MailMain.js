import React from 'react';
const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  1334 / 750;
const mailWidth = windowWidth * 0.463;
const mailHeight = windowHeight *  0.025;
const mailX = 229 / 750 *  windowWidth;
const mailY = windowHeight * 1220 / 1334;

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