import React from 'react';
import Service from '../../../static/sevice-title-mod.png';


const windowSize = window.innerWidth;
const windowHeight = window.innerHeight;
const imgWidth = 503;
const imgHeight = 93;
function calculatePositionX() {
    const x = (windowSize - imgWidth)
    return x / 2;
}
const imgX = calculatePositionX()
const imgY = windowHeight * 41 / 750;


function ServiceTitle(props) {
    return (
        <img src = {Service}  className="serviceTitle" alt =  'smallImage' style =  {{...styles.serviceTitle}} />
    );
}

const styles = {
    serviceTitle: {
        position: 'absolute',
        width: imgWidth,
        height:imgHeight,
        top: '41px',
        left: 'calc(50vw - 251.5px)'
    }
};

export default ServiceTitle;