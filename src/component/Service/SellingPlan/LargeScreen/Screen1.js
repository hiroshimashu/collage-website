import React, { Component } from 'react';
import SellingMain from '../../../../static/SellingMain.gif';
import SellingTitle from '../../../../static/SellingTitle.png';
import LeftTalk from '../../../../static/leftTalk.png';
import RightTalk from '../../../../static/rightTalk.png';



const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const titleWidth = windowWidth * 0.363;
const titleHeight = windowHeight * 0.119;
function calculatePositionX() {
    const x = (windowWidth - titleWidth)
    return x / 2;
}
const titleX = calculatePositionX()
const titleY = windowHeight * 222 / 750;

const mainWidth = windowWidth * 0.32;
const mainHeight = windowHeight * 0.251;
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
    render() {
        return(
            <div>
                <img src ={ SellingMain }  style = {styles.main}/>
                <img src ={ SellingTitle }  style = {styles.title}/>
                <img src ={ LeftTalk }  style = {styles.left}/>
                <img src ={ RightTalk }  style = {styles.right}/>
            </div>
        );
    }
}

const styles = {
    main: {
        position: 'absolute',
        width: mainWidth,
        height: 'auto',
        top: mainY,
        left: mainX,
        right: mainX
    },
    title: {
        position: 'absolute',
        width: titleWidth,
        height: 'auto',
        top: titleY,
        left: titleX,
        right: titleX
    },
    left: {
        position: 'absolute',
        width: leftWidth,
        height: 'auto',
        top: leftY,
        left: leftX
    },
    right: {
        position: 'absolute',
        width: rightWidth,
        height: 'auto',
        top: rightY,
        left: rightX
    }
}

export default Screen1;