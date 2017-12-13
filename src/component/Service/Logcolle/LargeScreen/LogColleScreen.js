import React, { Component } from 'react';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';

import Dots from './Dots';
import Explanation1 from '../../../../static/explanation1.png';
import Video from '../../../../static/video-player.png';
import Google from '../../../../static/googleplay.png';
import Apple from '../../../../static/appstore.png';
import Iphone from '../../../../static/Iphone_vertical.png';

const windowWidth = window.innerWidth;
const windowHeight = 750 / 1200  * windowWidth;
const exWidth = windowWidth * 0.238;
const exHeight = windowHeight * 0.224;
const exX = 593 / 1200 * windowWidth
const exY = windowHeight * 247 / 750;

const videoWidth = windowWidth * 0.043;
const videoHeight = windowHeight * 0.055;
const videoX = 710 / 1200 * windowWidth
const videoY = windowHeight * 443 / 750;

const googleWidth = windowWidth * 0.142;
const googleHeight = windowHeight * 0.067;
const googleX = 650 / 1200 * windowWidth
const googleY = windowHeight * 510 / 750;


const appleWidth = windowWidth * 0.142;
const appleHeight = windowHeight * 0.067;
const appleX = 651 / 1200 * windowWidth
const appleY = windowHeight * 568 / 750;

const iphoneWidth = windowWidth * 0.159;
const iphoneHeight = windowHeight * 0.516;
const iphoneX = 366 / 1200 * windowWidth
const iphoneY = windowHeight * 232 / 750;




class LogColle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color1: '#a99fc5',
            color2: '#bfbfbf',
            color3: '#bfbfbf',
            color4: '#bfbfbf',
            color5: '#bfbfbf',
            page: 1,
            blur: ''
        };

        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
        this.handleClick5 = this.handleClick5.bind(this);
    }

    handleClick1() {
        this.setState(() => {
            return {
                color1: '#a99fc5',
                color2: '#bfbfbf',
                color3: '#bfbfbf',
                color4: '#bfbfbf',
                color5: '#bfbfbf',
                page: 1,
                blur: ''
            };
        });
    }

    handleClick2() {
        console.log('clicked')

        this.setState(() => {
            return {
                color1: '#bfbfbf',
                color2: '#a99fc5',
                color3: '#bfbfbf',
                color4: '#bfbfbf',
                color5: '#bfbfbf',
                page: 2,
                blur: 'blur(10px)'
            };
        });
    }

    handleClick3() {
        this.setState(() => {
            return {
                color1: '#bfbfbf',
                color2: '#bfbfbf',
                color3: '#a99fc5',
                color4: '#bfbfbf',
                color5: '#bfbfbf',
                page: 3,
                blur: 'blur(10px)'
            };
        });
    }

    handleClick4() {
        this.setState(() => {
            return {
                color1: '#bfbfbf',
                color2: '#bfbfbf',
                color3: '#bfbfbf',
                color4: '#a99fc5',
                color5: '#bfbfbf',
                page: 4,
                blur: 'blur(10px)'
            };
        });
    }

    handleClick5() {
        this.setState(() => {
            return {
                color1: '#bfbfbf',
                color2: '#bfbfbf',
                color3: '#bfbfbf',
                color4: '#bfbfbf',
                color5: '#a99fc5',
                page: 5,
                blur: 'blur(10px)'
            };
        });
    }

    render() {
        return(
            <div>
                <img src = {Explanation1} alt = 'exp' style = {styles.ex} />
                <img src = {Video} alt = 'video' style = {styles.video} />
                <img src = {Google} alt = 'google' style = {styles.google} />
                <img src = {Apple} alt = 'apple' style = {styles.apple} />
                <img src = {Iphone} alt = 'iphone' style = {styles.iphone} />
                {this.state.page === 1 &&<Screen1 />}
                {this.state.page === 2 &&<Screen2 />}
                {this.state.page === 3 &&<Screen3 />}
                {this.state.page === 4 &&<Screen4 />}
                {this.state.page === 5 &&<Screen5 />}
                <Dots
                    color1 = {this.state.color1}
                    color2 = {this.state.color2}
                    color3 = {this.state.color3}
                    color4 = {this.state.color4}
                    color5 = {this.state.color5}
                    handleClick1 = {this.handleClick1}
                    handleClick2 = {this.handleClick2}
                    handleClick3 = {this.handleClick3}
                    handleClick4 = {this.handleClick4}
                    handleClick5 = {this.handleClick5}
                />
            </div>
        );
    }
}

const styles = {
    ex: {
        position: 'absolute',
        width: exWidth,
        height: exHeight,
        top: exY,
        left: exX,
        right: exX
    },
    video: {
        position: 'absolute',
        width: videoWidth,
        height: videoHeight,
        top: videoY,
        left: videoX,
        right: videoX
    },
    google: {
        position: 'absolute',
        width: googleWidth,
        height: googleHeight,
        top: googleY,
        left: googleX,
        right: googleX
    },
    apple: {
        position: 'absolute',
        width: appleWidth,
        height: appleHeight,
        top: appleY,
        left: appleX,
        right: appleX
    },
    iphone: {
        position: 'absolute',
        width: iphoneWidth,
        height: iphoneHeight,
        top: iphoneY,
        left: iphoneX
    },



}

export default LogColle;