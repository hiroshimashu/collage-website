import React from 'react';
import facebook from '../../static/facebook.svg';
import mail from '../../static/e-mail-envelope.svg';

const windowWidth = window.innerWidth;
const windowHeight = 1334 / 750 * windowWidth;


const faceWidth = windowWidth *  0.035;
const faceHeight = windowHeight * 0.031;
const faceX =  319 / 750 *  windowWidth;
const faceY = 1258 / 1334 *  windowHeight;

const mailWidth = windowWidth *  0.048;
const mailHeight = windowHeight * 0.022;
const mailX =  392 / 750 *  windowWidth;
const mailY = 1263 / 1334 *  windowHeight;




function SNS2() {
    return(
        <div>
            <a href = 'https://www.facebook.com/collage.inc/' target = '_blank'><img src = {facebook} alt = 'facebook' style = {styles.facebook}/></a>
            <a href = 'https://www.facebook.com/collage.inc/' target = '_blank'><img src = {mail} alt = 'facebook' style = {styles.email}/></a>
        </div>
    );
}

const styles = {
    facebook: {
        position:'absolute',
        width: faceWidth,
        height: faceHeight,
        left: faceX,
        top: faceY,
        zIndex:100
    },
    email: {
        position: 'absolute',
        width:mailWidth,
        height:mailHeight,
        top:mailY,
        left:mailX,
        zIndex: 100
    }
}

export default SNS2;