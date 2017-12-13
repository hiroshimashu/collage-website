import React, { Component } from 'react';
import on from '../../static/On.png';

const windowWidth = window.innerWidth;
const windowHeight = 1334 / 750 * windowWidth;

const onWidth  = windowWidth *  0.623;
const onHeight = windowHeight *  0.54;
const onX = windowWidth *  140 / 750;




class On extends Component {
    render() {
        return(
            <img src = {on} alt = 'on' style = { styles.on } />
        );
    }
}

const styles = {
    on: {
        position: 'absolute',
        width: onWidth,
        height: onHeight,
        top: 0,
        left: onX
    }
}


export default On;