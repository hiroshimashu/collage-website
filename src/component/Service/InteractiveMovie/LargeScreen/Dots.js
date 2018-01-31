import React, { Component } from 'react';
import Brightness from 'material-ui/svg-icons/image/brightness-1';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const windowWidth = window.innerWidth;
const windowHeight =  window.innerHeight;
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
                    <Brightness style = {{...styles.dots, zIndex: 100, top: 46.93 + 'vh', color: `${this.props.color1}`}} onClick = {this.props.handleClick1}/>
                    <Brightness style = {{...styles.dots, zIndex: 100, top: 51.5 + 'vh', color: `${this.props.color2}`}} onClick = {this.props.handleClick2}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    dots: {
        position: 'absolute',
        width: 1.2 + 'vw',
        height: 1.9 + 'vh',
        left: 2.0 + 'vw',
    }
}

export default Dots;
