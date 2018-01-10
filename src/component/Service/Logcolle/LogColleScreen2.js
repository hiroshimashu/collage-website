import React, { Component } from 'react';
import ServiceTitle2 from '../ServiceTitle2';
import Menu from '../InteractiveMovie/Menu';
import Logo from '../InteractiveMovie/Logo';
import LogColleD from '../../../static/logcolleD.png';
import Iphone from './Iphone';
import Play from '../../../static/video-player.png';
import GooglePlay from '../../../static/googleplay.png';
import AppStore from '../../../static/appstore.png';
import Dots2 from './Dots2';
import MailButton from './MailButton';
import MailMain from './MailMain';
import MailLogo from './MailLogo';

const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  1334 /750;

const playWidth = windowWidth * 0.461;
const playHeight = windowHeight * 0.142;
const playX = windowWidth * 372 / 750;
const playY = 325 / 1334 * windowHeight;

const discriptionWidth = windowWidth * 0.461;
const discriptionHeight = windowHeight * 0.142;
const discriptionX = windowWidth * 372 / 750;
const discriptionY = windowHeight * 559 / 1334;

const googleWidth = windowWidth * 0.345;
const googleHeight = windowHeight * 0.057;
function calculateGoogleX() {
    return (windowWidth - googleWidth) / 2;
}
const googleX = calculateGoogleX();
const googleY = windowHeight * 946 / 1334;

const appWidth = windowWidth * 0.343;
const appHeight = windowHeight * 0.057;
function calculateAppX() {
    return (windowWidth - appWidth) / 2;
}
const appX = calculateAppX();
const appY = windowHeight * 1034 / 1334;




class LogColleScreen2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screen:1
        };

        this.handleSwitch1 = this.handleSwitch1.bind(this);
        this.handleSwitch2 = this.handleSwitch2.bind(this);
        this.handleSwitch3 = this.handleSwitch3.bind(this);
        this.handleSwitch4 = this.handleSwitch4.bind(this);
        this.handleSwitch5 = this.handleSwitch5.bind(this);
    }

    componentDidMount() {
        this.id = setInterval(() => {
            if (this.state.screen === 1) {
                this.handleSwitch2();
            } else if (this.state.screen === 2) {
                this.handleSwitch3();
            } else if (this.state.screen === 3) {
                this.handleSwitch4();
            } else if(this.state.screen === 4){
                this.handleSwitch5();
            } else {
                this.handleSwitch1();
            }
        }, 5000);
    }


    handleSwitch1() {
        this.setState({screen:1});
    }

    handleSwitch2() {
        this.setState({screen:2});
    }

    handleSwitch3() {
        this.setState({screen:3});
    }

    handleSwitch4() {
        this.setState({screen:4});
    }

    handleSwitch5() {
        this.setState({screen:5});
    }


    render() {
        return (
            <div className="logColleWrapper" style={ styles.logColleWrapper }>
                <Logo />
                <ServiceTitle2 />
                <Dots2
                    handleSwitch1 = {this.handleSwitch1}
                    handleSwitch2 = {this.handleSwitch2}
                    handleSwitch3 = {this.handleSwitch3}
                    handleSwitch4 = {this.handleSwitch4}
                    handleSwitch5 = {this.handleSwitch5}
                />
                <Iphone screen = {this.state.screen} />
                <iframe id="ytplayer" type="text/html" style = {styles.play} src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com" frameBorder="0"/>
                <img src = {LogColleD} style = {styles.discription} />
                <img src = {GooglePlay} alt = 'googleplay' style = { styles.google } />
                <img src = {AppStore} alt = 'appstore' style = { styles.app } />
                <MailButton />
                <MailMain />
            </div>
        );
    }
}

const styles = {
    logColleWrapper: {
        position: 'relative',
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#edf8fd',
    },
    play: {
        position: 'absolute',
        width: playWidth,
        height: playHeight,
        top: playY,
        left: playX
    },
    discription: {
        position: 'absolute',
        width: discriptionWidth,
        height: discriptionHeight,
        top: discriptionY,
        left: discriptionX,
        fontSize: '8.5px',
        color: '#5a5a5a',
        letterSpacing: '0.1em',
        textAlign: 'left',
        transform: 'scaleY(1.0017)',
        fontFamily: 'Kozuka Gothic Pr6N',
        lineHeight: '17px',
        fontWeight: 600
    },
    google: {
        position: 'absolute',
        width: googleWidth,
        height: googleHeight,
        top: googleY,
        left: googleX,
    },
    app: {
        position: 'absolute',
        width: appWidth,
        height: appHeight,
        top: appY,
        left: appX,
    }
}

export default LogColleScreen2;