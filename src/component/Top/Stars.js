import React, { Component } from 'react';
import star from '../../static/stars.png';

const windowWidth = window.innerWidth;
const windowHeight = 1334 / 750 * windowWidth;

const starWidth  = windowWidth *  0.623;
const starHeight = windowHeight *  0.54;
const starX = windowWidth *  140 / 750;
const starY = windowHeight * 74 / 1334;





class Stars extends Component {
    render() {
        return(
            <img src = {star} alt = 'on' style = { styles.star } />
        );
    }
}

const styles = {
    star: {
        position: 'absolute',
        width: windowWidth,
        height: windowHeight,
    }
}



export default  Stars;