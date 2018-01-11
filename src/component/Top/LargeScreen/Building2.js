import React, { Component } from 'react';
import building2 from '../../../static/building_mod2.png';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


const forestWidth = windowWidth *  0.278;
const forestHeight = windowHeight * 0.215;
const forestY = 589 / 750 *  windowHeight;


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
        width:forestWidth,
        height:forestHeight,
        left: 0,
        top: forestY
    }
};

export default Building2;