import React, { Component } from 'react';
import Brightness from 'material-ui/svg-icons/image/brightness-1';

const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  750 / 1200;
const dot1Width = windowWidth * 0.007;
const dot1X = 348 / 1200 *  windowWidth;
const dot1Y = windowHeight * 526 / 750;

const dot2Width = windowWidth * 0.007;
const dot2X = 348 / 1200 *  windowWidth;
const dot2Y = windowHeight * 545 / 750;


const dot3Width = windowWidth * 0.007;
const dot3X = 348 / 1200 *  windowWidth;
const dot3Y = windowHeight * 564 / 750;


const dot4Width = windowWidth * 0.007;
const dot4X = 348 / 1200 *  windowWidth;
const dot4Y = windowHeight * 583 / 750;

const dot5Width = windowWidth * 0.007;
const dot5X = 348 / 1200 *  windowWidth;
const dot5Y = windowHeight * 601 / 750;

class Dots extends Component {
    render() {
        return(
            <div>
                <Brightness style = {{zIndex: 100, position: 'absolute', width: dot1Width, height: dot1Width, top: dot1Y, left: dot1X, color: `${this.props.color1}`}} onClick = {this.props.handleClick1}/>
                <Brightness style = {{zIndex: 100, position: 'absolute', width: dot2Width, height: dot2Width, top: dot2Y, left: dot2X, color: `${this.props.color2}`}} onClick = {this.props.handleClick2}/>
                <Brightness style = {{zIndex: 100, position: 'absolute', width: dot3Width, height: dot3Width, top: dot3Y, left: dot3X, color: `${this.props.color3}`}} onClick = {this.props.handleClick3}/>
                <Brightness style = {{zIndex: 100, position: 'absolute', width: dot4Width, height: dot4Width, top: dot4Y, left: dot4X, color: `${this.props.color4}`}} onClick = {this.props.handleClick4}/>
                <Brightness style = {{zIndex: 100, position: 'absolute', width: dot5Width, height: dot5Width, top: dot5Y, left: dot5X, color: `${this.props.color5}`}} onClick = {this.props.handleClick5}/>
            </div>
        );
    }
}

export default Dots;