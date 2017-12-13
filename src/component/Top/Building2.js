import React, { Component } from 'react';
import building2 from '../../static/Building2.png';

const windowWidth = window.innerWidth;
const windowHeight = 1334 / 750 * windowWidth;


const forestWidth = windowWidth *  0.713;
const forestHeight = windowHeight * 0.173;
const forestY = 1103 / 1334 *  windowHeight;


class Building2 extends Component {
    render() {
        return(
            <img src = {building2} alt = 'forest' style = {styles.forest} />
        );
    }
}


const styles = {
    forest: {
        position: 'absolute',
        width:windowWidth,
        height: forestHeight,
        left: 0,
        top: forestY
    }
};

export default Building2;