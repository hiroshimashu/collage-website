import React, { Component } from 'react';
import Radium from 'radium';
import iphone from '../../../../static/Iphone.png';
import Potato from '../../../../static/potato.png';
import Play from '../../../../static/play.png';
import '../../../../service.css';

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
                <img  className="iphone1" src={ iphone } style={{
                    position: 'absolute',
                    top: 0
                }}/>
                <img  className="potato" src={ Potato } style={{
                    position: 'absolute',
                    zIndex: 1,
                }}/>
                <a href='http://collage-movie.hippy.jp/cooking/cooking.html' target="_blank">
                    <img  className = 'play' src={ Play } style={{
                        position: 'absolute',
                        zIndex: 2,
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