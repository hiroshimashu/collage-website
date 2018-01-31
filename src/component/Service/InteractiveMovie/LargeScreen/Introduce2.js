import React, { Component } from 'react';
import title2 from '../../../../static/title2.png';
import Radium from 'radium';
const windowWidth = window.innerWidth;
const windowHeight =  window.innerHeight;
const intro2Width = windowWidth * 0.258;
const intro2X = windowWidth * 195 / 1200;
const intro2Y = windowHeight * 440 / 750;
const intro2Ymedium = windowHeight * 420 / 750;
const intro2Ysmall = windowHeight * 400 / 750;
const intro2YXL = windowHeight * 480 / 750;



class Introduce2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: this.props.width * 0.258,
            intro2X: this.props.width * 195 /1200
        };

    }


    componentWillReceiveProps(){
        this.setState(() => {
            return {
                width: this.props.width * 0.258,
                intro2X: this.props.width * 195 / 1200
            };
        });
    }

    render() {
        return (
            <img src={title2}  className = 'introduce2' style={{
                position: 'absolute',
                width: 309,
                height: 40,
                top: 200,
                left: 96
            }} />

        );
    }
}

export default Radium(Introduce2);