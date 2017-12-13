import React from 'react';
import SellingIcon from '../../../static/SellingMain.gif';
const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  3812 /750;
const IconWidth = windowWidth *  0.512;
const IconHeight = windowHeight *  0.049;
const IconX =  windowWidth * 172 / 750;
const IconY = 806 / 3812 * windowHeight;


function SellingIcon2() {
    return(
        <img src = {SellingIcon} style = { styles.Icon } />
    );
}

const styles = {
    Icon: {
        position: 'absolute',
        width: IconWidth,
        height: IconHeight,
        top: IconY,
        left: IconX,
        right: IconX
    }
}

export default SellingIcon2;