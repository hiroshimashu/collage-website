import React, { Component } from 'react';
import menu from '../../../static/Menu2x.png';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


const menuWidth = windowWidth *  0.058;
const menuHeight = windowHeight * 0.044;
const menuX =  565 / 1200 *  windowWidth;
const menuY = 701 / 750 *  windowHeight;


class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <img src =  {menu} alt =  'menuButton' style = {styles.menu} onClick =  {this.props.handleClick} />
        );
    }
}

const styles = {
    menu: {
        position: 'absolute',
        width:menuWidth,
        height: 'auto',
        top:menuY,
        left:menuX,
        zIndex: 100
    }
};
export default Menu;