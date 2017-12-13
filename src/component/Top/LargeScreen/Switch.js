import React, { Component } from 'react';
import icon from '../../../static/icon.png';

const windowWidth = window.innerWidth;
const windowHeight = 750 / 1200 * windowWidth;


const iconWidth = windowWidth *  0.027;
const iconHeight = windowHeight * 0.043;
const iconX = windowWidth * 1141 /1200;
const iconY = 26 /750 *  windowHeight;


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