import React from 'react';
import Service from '../../../static/ServiceTitle.png';


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
        <img src = {Service} alt =  'smallImage' style =  {{...styles.serviceTitle, left: props.titleX, right: props.titleX}} />
    );
}

const styles = {
    serviceTitle: {
        position: 'absolute',
        width: imgWidth,
        height:imgHeight,
        top:imgY,
    }
};

export default ServiceTitle;