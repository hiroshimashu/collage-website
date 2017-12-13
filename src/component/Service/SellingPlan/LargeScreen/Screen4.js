import React, { Component } from 'react';
import Feel1 from '../../../../static/feeling1.png';
import Feel2 from '../../../../static/feeling2.png';
import Title from '../../../../static/feelingTitle.png';
import Woman from '../../../../static/woman.svg';
import who1 from '../../../../static/who1.png';
import who2 from '../../../../static/who2.png';
import Man from '../../../../static/man.svg';

const windowWidth = window.innerWidth;
const windowHeight = 750 / 1200  * windowWidth;

const feel1Width = windowWidth * 0.293;
const feel1Height = windowHeight * 0.419;
const feel1X = windowWidth * 83 / 1200;
const feel1Y = windowHeight * 246 / 750;

const feel2Width = windowWidth * 0.304;
const feel2Height = windowHeight * 0.419;
const feel2X = windowWidth * 785 / 1200;
const feel2Y = windowHeight * 254 / 750;

const titleWidth = windowWidth * 0.164;
const titleHeight = windowHeight * 0.036;
const titleX = windowWidth * 500 / 1200;
const titleY = windowHeight * 227 / 750;


const womanWidth = windowWidth * 0.071;
const womanHeight = windowHeight * 0.147;
const womanX = windowWidth * 450 / 1200;
const womanY = windowHeight * 314 / 750;


const manWidth = windowWidth * 0.071;
const manHeight = windowHeight * 0.157;
const manX = windowWidth * 665 / 1200;
const manY = windowHeight * 314 / 750;

const who1Width = windowWidth * 0.099;
const who1Height = windowHeight * 0.055;
const who1X = windowWidth * 433 / 1200;
const who1Y = windowHeight * 457 / 750;

const who2Width = windowWidth * 0.099;
const who2Height = windowHeight * 0.055;
const who2X = windowWidth * 648 / 1200;
const who2Y = windowHeight * 457 / 750;

class Screen4 extends Component {
    render() {
        return(
            <div>
                <img src = {Title} alt = 'title' style ={styles.title} />
                <img src = {Feel1} alt = 'feel1' style = {styles.feel1} />
                <img src = {Feel2} alt = 'feel1' style = {styles.feel2}/>
                <img src = {Woman} alt = 'woman' style = {styles.woman} />
                <img src = {who1} alt = 'who1' style = {styles.who1} />
                <img src = {Man} alt = 'woman' style = {styles.man} />
                <img src = {who2} alt = 'who2' style = {styles.who2} />

            </div>
        );
    }
}

const styles = {
    feel1: {
        position: 'absolute',
        width: feel1Width,
        height: feel1Height,
        left: feel1X,
        top: feel1Y
    },
    feel2: {
        position: 'absolute',
        width: feel2Width,
        height: feel2Height,
        left: feel2X,
        top: feel2Y
    },
    title: {
        position: 'absolute',
        width: titleWidth,
        height: titleHeight,
        left: titleX,
        top: titleY
    },
    woman: {
        position: 'absolute',
        width: womanWidth,
        height: womanHeight,
        left: womanX,
        top: womanY
    },
    man: {
        position: 'absolute',
        width: manWidth,
        height: manHeight,
        left: manX,
        top: manY
    },
    who1: {
        position: 'absolute',
        width: who1Width,
        height: who1Height,
        left: who1X,
        top: who1Y
    },
    who2: {
        position: 'absolute',
        width: who2Width,
        height: who2Height,
        left: who2X,
        top: who2Y
    }
}

export default Screen4;