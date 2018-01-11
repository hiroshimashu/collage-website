import React, { Component } from 'react';
import building1 from '../../../static/building_mod1.png';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


const forestWidth = windowWidth *  0.748;
const forestHeight = windowHeight * 0.231;
const forestX =  windowWidth *  302 / 1200;
const forestY = 577 / 750 *  windowHeight;


class Building1 extends Component {
    render() {
        return(
            <img src = {building1} alt = 'forest' style = {styles.forest} />
        );
    }
}


const styles = {
    forest: {
        position: 'absolute',
        width: forestWidth,
        height: forestHeight,
        left: forestX,
        top: forestY
    }
};

export default Building1;