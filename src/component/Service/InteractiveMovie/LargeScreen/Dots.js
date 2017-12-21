import React, { Component } from 'react';
import Brightness from 'material-ui/svg-icons/image/brightness-1';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  750 / 1200;
const dot1Width = windowWidth * 0.012;
const dot1Height = windowHeight *  0.019;
const dot1X = 25 / 1200 *  windowWidth;
const dot1Y = windowHeight * 352 / 750;

const dot2Width = windowWidth * 0.012;
const dot2Height = windowHeight *  0.019;
const dot2X = 25 / 1200 *  windowWidth;
const dot2Y = windowHeight * 387 / 750;

class Dots extends Component {
    render() {
        return(
            <MuiThemeProvider>
                <div>
                    <Brightness style = {{zIndex: 100, position: 'absolute', width: dot1Width, height: dot1Height, top: dot1Y, left: dot1X, color: `${this.props.color1}`}} onClick = {this.props.handleClick1}/>
                    <Brightness style = {{zIndex: 100, position: 'absolute', width: dot2Width, height: dot2Height, top: dot2Y, left: dot2X, color: `${this.props.color2}`}} onClick = {this.props.handleClick2}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Dots;
