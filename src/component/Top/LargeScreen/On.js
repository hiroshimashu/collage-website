import React, { Component } from 'react';
import on from '../../../static/On.png';

const windowWidth = window.innerWidth;
const windowHeight = 750 /1200 * windowWidth;

const onWidth  = windowWidth *  0.16;
const onHeight = windowHeight *  0.467;
const onX = windowWidth *  501 / 1200;




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