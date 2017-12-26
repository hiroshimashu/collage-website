import React, { Component } from 'react';
import SellingMain from '../../../../static/SellingMain.gif';
import SellingTitle from '../../../../static/SellingTitle.png';
import LeftTalk from '../../../../static/leftTalk.png';
import RightTalk from '../../../../static/rightTalk.png';



const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const titleWidth = windowWidth * 0.363;
function calculatePositionX() {
    const x = (windowWidth - titleWidth)
    return x / 2;
}
const titleX = calculatePositionX()
const titleY = windowHeight * 222 / 750;

const mainWidth = windowWidth * 0.32;
function calculateMainPositionX() {
    const x = (windowWidth - mainWidth)
    return x / 2;
}
const mainX = calculateMainPositionX()
const mainY = windowHeight * 375 / 750;

const leftWidth = windowWidth * 0.246;
const leftHeight = windowHeight * 0.296;
const leftX = 96 / 1200 * windowWidth;
const leftY = windowHeight * 269 / 750;

const rightWidth = windowWidth * 0.246;
const rightHeight = windowHeight * 0.296;
const rightX = 832 / 1200 * windowWidth;
const rightY = windowHeight * 311 / 750;




class Screen1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: this.props.width,
            mainWidth:this.props.width * 0.32,
            mainX: this.calculateX(this.props.width, this.props.width * 0.32),
            titleWidth:this.props.width * 0.363,
            titleX: this.calculateX(this.props.width, this.props.width * 0.363),
            leftWidth:this.props.width * 0.246,
            leftX: this.props.width * 96 / 1200,
            rightWidth: this.props.width * 0.246,
            rightX: this.props.width * 832 / 1200
        };
        this.calculateX = this.calculateX.bind(this);
    }

    componentWillReceiveProps(){
        this.setState(() => {
            return {
                width: this.props.width,
                mainWidth:this.props.width * 0.32,
                mainX: this.calculateX(this.props.width, this.props.width * 0.32),
                titleWidth:this.props.width * 0.363,
                titleX: this.calculateX(this.props.width, this.props.width * 0.363),
                leftWidth:this.props.width * 0.246,
                leftX: this.props.width * 96 / 1200,
                rightWidth: this.props.width * 0.246,
                rightX: this.props.width * 832 / 1200
            };
        });
    }

    calculateX(window, width) {
        return (window - width) / 2;
    }

    render() {
        return(
            <div>
                <img src ={ SellingMain }  style = {{...styles.main, width: this.state.mainWidth, left: this.state.mainX, right: this.state.mainX}}/>
                <img src ={ SellingTitle }  style = {{...styles.title, width:this.state.titleWidth,left: this.state.titleX, right: this.state.titleX }}/>
                <img src ={ LeftTalk }  style = {{...styles.left, width: this.state.leftWidth, left: this.state.leftX }}/>
                <img src ={ RightTalk }  style = {{...styles.right, width: this.state.rightWidth, left: this.state.rightX }}/>
            </div>
        );
    }
}

const styles = {
    main: {
        position: 'absolute',
        height: 'auto',
        top: mainY,
    },
    title: {
        position: 'absolute',
        height: 'auto',
        top: titleY,
    },
    left: {
        position: 'absolute',
        height: 'auto',
        top: leftY,
    },
    right: {
        position: 'absolute',
        height: 'auto',
        top: rightY,
    }
}

export default Screen1;