import React, { Component } from 'react';
import star from '../../../static/starsLarge.png';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

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
        width: 100 + 'vw',
        height: 100  + 'vh',
    }
}



export default  Stars;