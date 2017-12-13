import React from 'react';
import Access from '../../static/ACCESS.png';


const windowSize = window.innerWidth;
const windowHeight =1974 / 750 * windowSize;
const imgWidth = windowSize * 0.671;
const imgHeight = windowHeight * 0.047;
function calculatePositionX() {
    const x = (windowSize - imgWidth)
    return x / 2;
}
const imgX = calculatePositionX()
const imgY = windowHeight * 132 / 1974;


function ServiceTitle2() {
    return (
        <img src = {Access} alt =  'smallImage' style =  {styles.serviceTitle2} />
    );
}

const styles = {
    serviceTitle2: {
        position: 'absolute',
        width: imgWidth,
        height:imgHeight,
        left:imgX,
        right:imgX,
        top:imgY,
    }
};

export default ServiceTitle2;