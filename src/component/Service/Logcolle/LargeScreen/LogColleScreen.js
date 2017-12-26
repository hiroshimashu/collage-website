import React, { Component } from 'react';
import { connect } from 'react-redux';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';
import  { StyleRoot } from 'radium';
import Dots from './Dots';
import Explanation1 from '../../../../static/explanation1.png';
import Google from '../../../../static/googleplay.png';
import Apple from '../../../../static/appstore.png';
import Iphone from '../../../../static/Iphone_vertical.png';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const exWidth = windowWidth * 0.238;
const exHeight = windowHeight * 0.224;
const exX = 593 / 1200 * windowWidth
const exY = windowHeight * 247 / 750;
const videoWidth = exWidth
const videoY = windowHeight * 460 / 750;
const googleY = windowHeight * 640 / 750;
const appleY = windowHeight * 640 / 750;
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
            blur: '',
            width: this.props.window.width,
            exWidth:this.props.window.width * 0.238,
            exX: 593 / 1200 * this.props.window.width,
            screenWidth: this.props.window.width * 0.142,
            screenX: 377 / 1200 * this.props.window.width,
            logWidth: this.props.window.width * 0.083,
            logX: 410 / 1200 * this.props.window.width,
            videoHeight:  this.props.window.width * 593 / 1200 * 0.4,
            googleWidth: this.props.window.width * 0.11,
            googleX: 593 / 1200 * this.props.window.width,
            appleWidth: this.props.window.width * 0.11,
            appleX: 0.6221  * this.props.window.width,
            iphoneWidth: this.props.window.width * 0.159,
            iphoneX: 366 / 1200 * this.props.window.width
        };

        this.id = null;

        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
        this.handleClick5 = this.handleClick5.bind(this);
    }

    componentDidMount() {
        this.id = setInterval(() => {
            if (this.state.page === 1) {
                this.handleClick2();
            } else if (this.state.page === 2) {
                this.handleClick3();
            } else if (this.state.page === 3) {
                this.handleClick4();
            } else if(this.state.page === 4){
                this.handleClick5();
            } else {
                this.handleClick1();
            }
        }, 4000);
    }

    componentWillUnmount() {
        console.log('cleared');
        clearInterval(this.id);
    }

    componentWillReceiveProps(){
        this.setState(() => {
            return {
                width: this.props.window.width,
                exWidth:this.props.window.width * 0.238,
                exX: 593 / 1200 * this.props.window.width,
                screenWidth: this.props.window.width * 0.142,
                screenX: 377 / 1200 * this.props.window.width,
                logWidth:this.props.window.width * 0.083,
                logX: 410 / 1200 * this.props.window.width,
                googleWidth: this.props.window.width * 0.11,
                googleX: 593 / 1200 * this.props.window.width,
                videoHeight:  this.props.window.width * 593 / 1200 * 0.4 ,
                appleWidth: this.props.window.width * 0.11,
                appleX: 0.6221  * this.props.window.width,
                iphoneWidth: this.props.window.width * 0.159,
                iphoneX: 366 / 1200 * this.props.window.width
            };
        });
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
        console.log(window.innerWidth);

        return(
            <StyleRoot>
                <div>
                    <img src = {Explanation1} alt = 'exp' style = {{...styles.ex, width: this.state.exWidth,left: this.state.exX }} />
                    <iframe id="ytplayer" type="text/html" style = {{...styles.video, width: this.state.exWidth,left: this.state.exX}} src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com" frameBorder="0"/>
                    <img src = {Iphone} alt = 'iphone' style = {{...styles.iphone, width: this.state.iphoneWidth,left: this.state.iphoneX}} />
                    <img src = {Google} style = {{...styles.google, width: this.state.googleWidth,left: this.state.googleX}} />
                    <img src = {Apple} style = {{...styles.apple, width: this.state.appleWidth,left: this.state.appleX}} />
                    {this.state.page === 1 &&<Screen1 screenWidth = {this.state.screenWidth} screenX = {this.state.screenX} logWidth = {this.state.logWidth} logX = {this.state.logX} />}
                    {this.state.page === 2 &&<Screen2 screenWidth = {this.state.screenWidth} screenX = {this.state.screenX} />}
                    {this.state.page === 3 &&<Screen3 screenWidth = {this.state.screenWidth} screenX = {this.state.screenX} />}
                    {this.state.page === 4 &&<Screen4 screenWidth = {this.state.screenWidth} screenX = {this.state.screenX} />}
                    {this.state.page === 5 &&<Screen5 screenWidth = {this.state.screenWidth} screenX = {this.state.screenX} />}
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
                        width = {this.state.width}
                    />
                </div>
            </StyleRoot>
        );
    }
}

const styles = {
    ex: {
        position: 'absolute',
        height: 'auto',
        top: exY,
    },
    video: {
        position: 'absolute',
        top: videoY,
        height: 'auto'
    },
    google: {
        position: 'absolute',
        height: 'auto',
        top: googleY
    },
    apple: {
        position: 'absolute',
        height: 'auto',
        top: appleY
    },
    iphone: {
        position: 'absolute',
        height: 'auto',
        top: iphoneY
    },
};

function mapStateToProps(state) {
    return {
        window: state.windowsize
    };
}

export default connect(mapStateToProps)(LogColle);