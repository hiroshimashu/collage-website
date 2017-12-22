import React, { Component } from 'react';
import Price from '../../../../static/price.png';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const priceWidth = windowWidth *  767 / 1200;
const priceHeight = windowHeight * 354 / 750;
const priceX = windowWidth * 215 / 1200;
const priceY = windowHeight * 228  / 750;


class Screen3 extends Component {
    render() {
        return(
            <img src = {Price} alt = 'price' style = {styles.price}/>
        );
    }
}

const styles = {
    price: {
        position: 'absolute',
        width: 'auto',
        height: priceHeight,
        left: priceX,
        top: priceY
    }
}

export default Screen3;