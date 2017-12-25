import React, { Component } from 'react';
import Brightness from 'material-ui/svg-icons/image/brightness-1';
import Radium from 'radium';

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
    render() {
        return(
            <div>
                <div style = {{...styles.dot1, color: `${this.props.color1}`}}>
                    <Brightness  style = {{...styles.dot1, color: `${this.props.color1}`}} onClick = {this.props.handleClick1}/>
                </div>
                <div style = {{...styles.dot2, color: `${this.props.color2}`}}>
                    <Brightness style = {{...styles.dot2, color: `${this.props.color2}`}} onClick = {this.props.handleClick2}/>
                </div>
                <div style = {{...styles.dot3, color: `${this.props.color3}`}} >
                    <Brightness style =  {{...styles.dot3, color: `${this.props.color3}`}} onClick = {this.props.handleClick3}/>
                </div>
                <div style = {{...styles.dot4, color: `${this.props.color4}`}} >
                    <Brightness  style = {{...styles.dot4, color: `${this.props.color4}`}} onClick = {this.props.handleClick4}/>
                </div>
                <div  style = {{...styles.dot5, color: `${this.props.color5}`}}>
                    <Brightness style = {{...styles.dot5, color: `${this.props.color5}`}} onClick = {this.props.handleClick5}/>
                </div>
            </div>
        );
    }
}

const styles = {
    dot1: {
        height: dot1Width,
        zIndex: 100,
        position: 'absolute',
        width: dot1Width,
        '@media (min-width: 1001px)': {
            top: dot1Y,
            left: dot1X,

        },
        '@media(max-width: 1000px)': {
            top: dot3Y,
            left: dot1Xsmall,
        }
    },
    dot2: {
        zIndex: 100,
        position: 'absolute',
        width: dot2Width,
        height: dot2Width,
        '@media (min-width: 1001px)': {
            top: dot2Y,
            left: dot2X,
        },
        '@media(max-width: 1000px)': {
            top: dot3Y,
            left: dot2Xsmall,
        }
    },
    dot3: {
        zIndex: 100,
        position: 'absolute',
        width: dot3Width,
        height: dot3Width,
        '@media (min-width: 1001px)': {
            top: dot3Y,
            left: dot3X,
        },
        '@media(max-width: 1000px)': {
            top: dot3Y,
            left: dot3Xsmall,
        }
    },
    dot4: {
        zIndex: 100,
        position: 'absolute',
        width: dot3Width,
        height: dot3Width,
        '@media (min-width: 1001px)': {
            top: dot4Y,
            left: dot4X,
        },
        '@media(max-width: 1000px)': {
            top: dot3Y,
            left: dot4Xsmall,
        }
    },
    dot5: {
        zIndex: 100,
        position: 'absolute',
        width: dot3Width,
        height: dot3Width,
        '@media (min-width: 1001px)': {
            top: dot5Y,
            left: dot5X,
        },
        '@media(max-width: 1000px)': {
            top: dot3Y,
            left: dot5Xsmall
        }
    }
};

export default Radium(Dots);
