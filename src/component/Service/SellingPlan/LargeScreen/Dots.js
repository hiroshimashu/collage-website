import React, { Component } from 'react';
import Brightness from 'material-ui/svg-icons/image/brightness-1';

const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  750 / 1200;
const dot1Width = windowWidth * 0.012;
const dot1Height = windowHeight *  0.019;
const dot1X = 25 / 1200 *  windowWidth;
const dot1Y = windowHeight * 319 / 750;

const dot2Width = windowWidth * 0.012;
const dot2Height = windowHeight *  0.019;
const dot2X = 25 / 1200 *  windowWidth;
const dot2Y = windowHeight * 352 / 750;


const dot3Width = windowWidth * 0.012;
const dot3Height = windowHeight *  0.019;
const dot3X = 25 / 1200 *  windowWidth;
const dot3Y = windowHeight * 386 / 750;


const dot4Width = windowWidth * 0.012;
const dot4Height = windowHeight *  0.019;
const dot4X = 25 / 1200 *  windowWidth;
const dot4Y = windowHeight * 419 / 750;

class Dots extends Component {
    render() {
        return(
            <div>
                <Brightness style = {{zIndex: 100, position: 'absolute', width: dot1Width, height: dot1Height, top: dot1Y, left: dot1X, color: `${this.props.color1}`}} onClick = {this.props.handleClick1}/>
                <Brightness style = {{zIndex: 100, position: 'absolute', width: dot2Width, height: dot2Height, top: dot2Y, left: dot2X, color: `${this.props.color2}`}} onClick = {this.props.handleClick2}/>
                <Brightness style = {{zIndex: 100, position: 'absolute', width: dot3Width, height: dot3Height, top: dot3Y, left: dot3X, color: `${this.props.color3}`}} onClick = {this.props.handleClick3}/>
                <Brightness style = {{zIndex: 100, position: 'absolute', width: dot4Width, height: dot4Height, top: dot4Y, left: dot4X, color: `${this.props.color4}`}} onClick = {this.props.handleClick4}/>
            </div>
        );
    }
}

export default Dots;