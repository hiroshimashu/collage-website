import React from 'react';
import menu from '../../../static/menu.png';

const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  1974 / 750;
const menuWidth = windowWidth * 0.061;
const menuHeight = windowHeight *  0.016;
const menuX = windowWidth * 17 / 750;
const menuY = windowHeight * 134 / 1974;


const Menu = (props) => {
    console.log(props);

    return(
        <img src = {menu} style = {styles.menu} onClick={props.handleClick} />
    );
}




const styles = {
    menu: {
        position: 'absolute',
        width: menuWidth,
        height: menuHeight,
        top: menuY,
        left: menuX,
        zIndex: 100
    },
}

export default Menu;