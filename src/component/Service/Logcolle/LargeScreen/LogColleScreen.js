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
import '../../../../service4.css';

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
            <div className="logColleScreenWrapper" style = {styles.wrapper}>
                <img src = {Explanation1} alt = 'exp' style = {{...styles.ex}} className = 'explanation' />
                <iframe id="ytplayer" type="text/html" style = {{...styles.video}} src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com" frameBorder="0"/>
                <img className = 'iphone' src = {Iphone} alt = 'iphone' style = {{...styles.iphone}} />
                <img className = 'google' src = {Google} style = {{...styles.google}} />
                <img className = 'apple' src = {Apple} style = {{...styles.apple}} />
                {this.state.page === 1 &&<Screen1 />}
                {this.state.page === 2 &&<Screen2 />}
                {this.state.page === 3 &&<Screen3 />}
                {this.state.page === 4 &&<Screen4  />}
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
    wrapper: {
        position: 'absolute'
    },

    ex: {
        position: 'absolute',
        width:285,
        height:168,
        top:15,
        left:248
    },
    video: {
        position: 'absolute',
        width: 285,
        height:160.3125,
        top: 195,
        left:248
    },
    google: {
        position: 'absolute',
        width: 120,
        height: 'auto',
        top: 365.3125,
        left:248
    },
    apple: {
        position: 'absolute',
        width: 120,
        height: 'auto',
        top: 365.3125,
        left: 413
    },
    iphone: {
        position: 'absolute',
        width: 191,
        height: 387,
        top:0,
        left: 18
    },
};

function mapStateToProps(state) {
    return {
        window: state.windowsize
    };
}

export default connect(mapStateToProps)(LogColle);