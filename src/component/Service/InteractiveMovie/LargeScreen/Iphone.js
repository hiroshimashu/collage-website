import React, { Component } from 'react';
import Radium from 'radium';
import iphone from '../../../../static/Iphone.png';
import Potato from '../../../../static/potato.png';
import Play from '../../../../static/play.png';

const windowWidth = window.innerWidth;
const windowHeight =  window.innerHeight;
const iphoneWidth = windowWidth * 0.518;
const iphoneHeight = windowHeight *  0.411;

const iphoneX = 541 /1200 * windowWidth;
const iphoneY = windowHeight * 220 / 750;

const potatoWidth = windowWidth * 0.407;
const potatoHeight = windowHeight *  0.365;
const potatoX = windowWidth * 607 /1200;
const potatoY = windowHeight * 237 / 750;
const potatoYsmall = windowHeight * 232 / 750;
const playWidth = windowWidth * 0.066;
const playHeight = windowHeight *  0.105;
const playX = 812 /1200 *  windowWidth;
const playY = windowHeight * 341 /750;
const playYsmall = windowHeight * 330 /750;




class Iphone extends Component {
    constructor(props) {
        super(props);

        this.state = {
            iphoneWidth: this.props.width * 0.518,
            iphoneX: this.props.width * 541 /1200,
            potatoWidth: this.props.width * 0.407,
            potatoX: this.props.width * 607 / 1200,
            playWidth: this.props.width * 0.066,
            playX: this.props.width * 812 / 1200
        };

    }


    componentWillReceiveProps() {
        this.setState(() => {
            return {
                iphoneWidth: this.props.width * 0.518,
                iphoneX: this.props.width * 541 /1200,
                potatoWidth: this.props.width * 0.407,
                potatoX: this.props.width * 607 / 1200,
                playWidth: this.props.width * 0.066,
                playX: this.props.width * 812 / 1200
            };
        });
    }

    render() {

        return (
            <div className='iphoneWrapper'>
                <img src={ iphone } style={{
                    position: 'absolute',
                    width: this.state.iphoneWidth,
                    height: 'auto',
                    top: iphoneY,
                    left: this.state.iphoneX,
                    filter: `${this.props.blur}`
                }}/>
                <img src={ Potato } style={{
                    position: 'absolute',
                    width: this.state.potatoWidth,
                    height: 'auto',
                    '@media(max-width: 1000px)': {
                        top: potatoYsmall
                    },
                    '@media(min-width: 1001px)': {
                        top: potatoY
                    },
                    left: this.state.potatoX,
                    zIndex: 1,
                    filter: `${this.props.blur}`
                }}/>
                <a href='http://collage-movie.hippy.jp/cooking/cooking.html' target="_blank">
                    <img src={ Play } style={{
                        position: 'absolute',
                        width: this.state.playWidth,
                        height: 'auto',
                        '@media(max-width: 1000px)': {
                            top: playYsmall,
                        },
                        '@media(min-width: 1001px)': {
                            top: playY
                        },
                        left: this.state.playX,
                        zIndex: 2,
                        filter: `${this.props.blur}`
                    }} onClick={() => {
                        console.log('hello');
                    }}/>
                </a>
            </div>
        );
    }
}

const styles = {
    iphoneImg: {
        position: 'absolute',
        width:iphoneWidth,
        height: iphoneHeight,
        top: iphoneY,
        left: iphoneX,
        right: iphoneX,
    },
    potato: {
        position: 'absolute',
        width:potatoWidth,
        height: potatoHeight,
        top: potatoY,
        left: potatoX,
        right: potatoX,
        zIndex: 1
    },
    play: {
        position: 'absolute',
        width:playWidth,
        height: playHeight,
        top: playY,
        left: playX,
        right: playX,
        zIndex: 2
    }
}

export default Radium(Iphone);