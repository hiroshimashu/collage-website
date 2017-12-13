import React, { Component } from 'react';
import star from '../../../static/starsLarge.png';

const windowWidth = window.innerWidth;
const windowHeight = 750 / 1200 * windowWidth;

const starWidth  = windowWidth;
const starHeight = windowHeight;





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