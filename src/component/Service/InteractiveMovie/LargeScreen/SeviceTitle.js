import React from 'react';
import Service from '../../../static/SERVICE.png';


const windowSize = window.innerWidth;
const windowHeight = windowSize *  750 / 1200;
const imgWidth = windowSize * 0.419;
const imgHeight = windowHeight * 0.124;
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
        width: '347px',
        height: '47px',
        left: 46.266 + 'vh',
        top: 5.466 + 'vh',
    }
};

export default ServiceTitle;