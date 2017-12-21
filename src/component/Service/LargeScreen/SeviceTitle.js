import React from 'react';
import Service from '../../../static/ServiceTitle.png';


const windowSize = window.innerWidth;
const windowHeight = windowSize *  750 / 1200;
const imgWidth = 503;
const imgHeight = 93;
function calculatePositionX() {
    const x = (windowSize - imgWidth)
    return x / 2;
}
const imgX = calculatePositionX()
const imgY = windowHeight * 41 / 750;


function ServiceTitle() {
    return (
        <img src = {Service} alt =  'smallImage' style =  {styles.serviceTitle} />
    );
}

const styles = {
    serviceTitle: {
        position: 'absolute',
        width: imgWidth,
        height:imgHeight,
        left:imgX,
        right:imgX,
        top:imgY,
    }
};

export default ServiceTitle;