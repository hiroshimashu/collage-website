import React, { Component } from 'react';
import Brightness from 'material-ui/svg-icons/image/brightness-1';
import Radium from 'radium';
import '../../../../service.css';

const windowWidth = window.innerWidth;
const windowHeight =  window.innerHeight;

const dot1Width = windowWidth * 0.007;
const dot1X = 348 / 1200 *  windowWidth;
const dot1Xsmall = 366/ 1200 * windowWidth;
const dot1Y = windowHeight * 526 / 750;

const dot2Width = windowWidth * 0.007;
const dot2X = 348 / 1200 *  windowWidth;
const dot2Xsmall = 416/ 1200 * windowWidth;
const dot2Y = windowHeight * 545 / 750;


const dot3Width = windowWidth * 0.007;
const dot3X = 348 / 1200 *  windowWidth;
const dot3Xsmall = 456 / 1200 *  windowWidth;
const dot3Y = windowHeight * 564 / 750;


const dot4Width = windowWidth * 0.007;
const dot4X = 348 / 1200 *  windowWidth;
const dot4Xsmall = 496 / 1200 *  windowWidth;
const dot4Y = windowHeight * 583 / 750;

const dot5Width = windowWidth * 0.007;
const dot5X = 348 / 1200 *  windowWidth;
const dot5Xsmall = 536 / 1200 *  windowWidth;
const dot5Y = windowHeight * 601 / 750;

class Dots extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dot1X: 348 / 1200 * this.props.width,
            dot1Xsmall: 366/ 1200 * this.props.width,
            dot2X: 348 / 1200 *  this.props.width,
            dot2Xsmall: 416/ 1200 * this.props.width,
            dot3X: 348 / 1200 *  this.props.width,
            dot3Xsmall: 456 / 1200 * this.props.width,
            dot4X: 348 / 1200 * this.props.width,
            dot4Xsmall: 496 / 1200 * this.props.width,
            dot5X: 348 / 1200 * this.props.width,
            dot5Xsmall: 536 / 1200 * this.props.width
        };
    }

    componentWillReceiveProps(){
        this.setState(() => {
            return {
                dot1X: 348 / 1200 * this.props.width,
                dot1Xsmall: 366/ 1200 * this.props.width,
                dot2X: 348 / 1200 *  this.props.width,
                dot2Xsmall: 416/ 1200 * this.props.width,
                dot3X: 348 / 1200 *  this.props.width,
                dot3Xsmall: 456 / 1200 * this.props.width,
                dot4X: 348 / 1200 * this.props.width,
                dot4Xsmall: 496 / 1200 * this.props.width,
                dot5X: 348 / 1200 * this.props.width,
                dot5Xsmall: 536 / 1200 * this.props.width
            };
        });
    }

    render() {
        return(
            <div>
                <Brightness className = 'logColleDots' style = {{...styles.dot1, color: `${this.props.color1}`}} onClick = {this.props.handleClick1}/>
                <Brightness className = 'logColleDots' style = {{...styles.dot2, color: `${this.props.color2}`}} onClick = {this.props.handleClick2}/>
                <Brightness className = 'logColleDots' style =  {{...styles.dot3, color: `${this.props.color3}`}} onClick = {this.props.handleClick3}/>
                <Brightness className = 'logColleDots' style = {{...styles.dot4, color: `${this.props.color4}`}} onClick = {this.props.handleClick4}/>
                <Brightness className = 'logColleDots' style = {{...styles.dot5, color: `${this.props.color5}`}} onClick = {this.props.handleClick5}/>
            </div>
        );
    }
}

const styles = {
    dot1: {
        position: 'absolute',
        width: 8,
        height: 8,
        top: 294,
        left: 0,
        zIndex: 100,
    },
    dot2: {
        position: 'absolute',
        width: 8,
        height: 8,
        top: 313,
        left: 0,
        zIndex: 100,
    },
    dot3: {
        position: 'absolute',
        width: 8,
        height: 8,
        top: 332,
        left: 0,
        zIndex: 100,
    },
    dot4: {
        position: 'absolute',
        width: 8,
        height: 8,
        top: 351,
        left: 0,
        zIndex: 100,
    },
    dot5: {
        position: 'absolute',
        width: 8,
        height: 8,
        top: 369,
        left: 0,
        zIndex: 100,
    }
};

export default Radium(Dots);
