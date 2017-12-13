import React, { Component } from 'react';
import Iphone from './Iphone';
import Introduce1 from './Introduce';
import Introduce2 from './Introduce2';
import Dots from './Dots';
import Screen2 from './InteractiveScreen2';

const windowWidth = window.innerWidth;
const windowHeight = 750 / 1200  * windowWidth;
const imgWidth = windowWidth * 0.419;
const imgHeight = windowHeight * 0.124;
function calculatePositionX() {
    const x = (windowWidth - imgWidth)
    return x / 2;
}
const imgX = calculatePositionX()
const imgY = windowHeight * 41 / 750;



class InteractiveScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color1: '#a99fc5',
            color2: '#bfbfbf',
            page: 1,
            blur: ''
        };

        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
    }

    handleClick1() {
        console.log(this.state.blur)
        this.setState(() => {
            return {
                color1: '#a99fc5',
                color2: '#bfbfbf',
                page: 1,
                blur: ''
            };
        });
    }

    handleClick2() {
        this.setState(() => {
            return {
                color1: '#bfbfbf',
                color2: '#a99fc5',
                page: 2,
                blur: 'blur(10px)'
            };
        });
    }

    render() {
        return(
            <div>
                <Iphone blur = {this.state.blur}/>
                <Introduce1  blur = {this.state.blur}/>
                <Introduce2  blur = {this.state.blur}/>
                <Dots color1 = {this.state.color1} color2 = {this.state.color2} handleClick1 = {this.handleClick1} handleClick2 = {this.handleClick2}/>
                {this.state.page === 2 && <Screen2 />}
            </div>
        );
    }
}

const styles = {
    share: {
        position: 'absolute',
        width: imgWidth,
        height:imgHeight,
        left:imgX,
        right:imgX,
        top:imgY,
    }
}

export default InteractiveScreen;