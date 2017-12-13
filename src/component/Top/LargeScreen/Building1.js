import React, { Component } from 'react';
import building1 from '../../../static/Building.png';

const windowWidth = window.innerWidth;
const windowHeight = 750 /1200 * windowWidth;


const forestWidth = windowWidth *  0.274;
const forestHeight = windowHeight * 0.168;
const forestX =  windowWidth *  871 / 1200;
const forestY = 624 / 750 *  windowHeight;


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
        width:windowWidth,
        height: forestHeight,
        left: forestX,
        top: forestY
    }
};

export default Building1;