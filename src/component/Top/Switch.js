import React, { Component } from 'react';
import icon from '../../static/icon.png';

const windowWidth = window.innerWidth;
const windowHeight = 1334 / 750 * windowWidth;


const iconWidth = windowWidth *  0.043;
const iconHeight = windowHeight * 0.024;
const iconX = windowWidth * 683 / 750;
const iconY = 74 / 1334 *  windowHeight;


class Switch extends Component {
    render() {
        return(
            <img src = {icon} alt = 'icon'
                 style ={{
                    position: 'absolute',
                    width:iconWidth,
                    height: iconHeight,
                    left: iconX,
                    top: iconY,
                    zIndex: 1,
                     opacity:this.props.opacity
                }}
                 onClick={this.props.handleClick}
            />
        );
    }
}



export default Switch;