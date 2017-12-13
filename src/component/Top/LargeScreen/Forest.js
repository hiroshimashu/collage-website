import React, { Component } from 'react';
import forest1 from '../../../static/forest1Large.png';
import forest2 from '../../../static/forest2Large.png';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const forest1Width = windowWidth * 0.498;
const forest1Height = windowHeight * 0.243;
const forest1Y = 568 /750 *  windowHeight;
const forest2Width = windowWidth * 0.995;
const forest2Height = windowHeight * 0.357;
const forest2X = windowWidth *  6 /1200;
const forest2Y = 482 /750 *  windowHeight;


class Forest extends Component {
    render() {
        return(
            <div>
                <img src = {forest1} alt = 'forest' style = {styles.forest1} />
                <img src = {forest2} alt = 'forest2' style = {styles.forest2} />
            </div>
        );
    }
}


const styles = {
    forest1: {
        position: 'absolute',
        width:forest1Width,
        height: forest1Height,
        left: 0,
        top: forest1Y,
        zIndex:1
    },
    forest2: {
        position: 'absolute',
        width:forest2Width,
        height: forest2Height,
        left: forest2X,
        top: forest2Y,
        zIndex: 1
    }
};

export default Forest;