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
                <Brightness style = {{...styles.dots, top: 42.533 + 'vh', color: `${this.props.color1}`}} onClick = {this.props.handleClick1}/>
                <Brightness style = {{...styles.dots, top: 46.9333 + 'vh', color: `${this.props.color2}`}} onClick = {this.props.handleClick2}/>
                <Brightness style = {{...styles.dots, top: 51.46 + 'vh',color: `${this.props.color3}`}} onClick = {this.props.handleClick3}/>
                <Brightness style = {{...styles.dots, top: 55.86 + 'vh',color: `${this.props.color4}`}} onClick = {this.props.handleClick4}/>
            </div>
        );
    }
}

const styles = {
    dots: {
        position: 'absolute',
        width: 1.2 + 'vw',
        height: 1.9 + 'vh',
        left: 2.083 + 'vw',
        zIndex: 100
    }
}

export default Dots;