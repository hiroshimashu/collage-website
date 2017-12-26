import React, { Component } from 'react';
import Iphone from './Iphone';
import { connect } from 'react-redux';
import Introduce1 from './Introduce';
import Introduce2 from './Introduce2';
import Dots from './Dots';
import Screen2 from './InteractiveScreen2';
import { StyleRoot } from 'radium';

const windowWidth = window.innerWidth;
const windowHeight = 750 / 1200  * windowWidth;
const imgWidth = windowWidth * 0.419;
const imgHeight = windowHeight * 0.124;
function calculatePositionX() {
    const x = (windowWidth - imgWidth)
    return x / 2;
}
const imgX = calculatePositionX();
const imgY = windowHeight * 41 / 750;



class InteractiveScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color1: '#a99fc5',
            color2: '#bfbfbf',
            page: 1,
            blur: '',
            width: this.props.window.width

        };

        this.id = null;

        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
    }

    componentDidMount() {
        this.id = setInterval(() => {
            if (this.state.page === 2) {
                this.handleClick1();
            } else {
                this.handleClick2();
            }
        }, 3000);
    }

    componentWillReceiveProps(){
        this.setState(() => {
            return {
                width: this.props.window.width
            };
        });
    }

    componentWillUnmount() {
        clearInterval(this.id);
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
                blur: 'blur(20px)'
            };
        });
    }

    render() {
        return(
            <StyleRoot>
                <div>
                    <Iphone blur = {this.state.blur} width = {this.state.width} />
                    <Introduce1  blur = {this.state.blur} width = {this.state.width}/>
                    <Introduce2  blur = {this.state.blur} width = {this.state.width}/>
                    <Dots color1 = {this.state.color1} color2 = {this.state.color2} handleClick1 = {this.handleClick1} handleClick2 = {this.handleClick2}/>
                    {this.state.page === 2 && <Screen2 width = {this.state.width} />}
                </div>
            </StyleRoot>
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

function mapStateToProps(state) {
    return {
        window: state.windowsize
    };
}


export default connect(mapStateToProps)(InteractiveScreen);