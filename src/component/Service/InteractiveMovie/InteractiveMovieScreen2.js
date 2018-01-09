import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../../index.css';
import ServiceTitle2 from '../ServiceTitle2';
import ServiceSelector from '../ServiceSelector';
import Introduce from './Introduce';
import Introduce2 from './Introduce2';
import Iphone2 from './Iphone2';
import Menu from './Menu';
import Logo from './Logo';
import TapD from '../../../static/play-mini.png';
import ViveD from '../../../static/vive-mini.png';
import Choice from '../../../static/choice-mini.png';
import InteractiveMainTitle2 from './InteractiveMainTitle2';
import InteractiveMain from './InteractiveMain';
import MailButton from './MailButton';
import MailLogo from './MailLogo';
import MailMain from './MailMain';
import Tap from '../../../static/finger-touching.png';
import Style1 from './style1';
import Smartphone from '../../../static/smartphone.png';
import Style2 from './style2';
import Play from '../../../static/video-player.png';
import Style3 from './style3';
const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  1974 /750;

const Fade = ({ children, ...props }) => (
    <CSSTransition
        {...props}
        timeout={1000}
        classNames="fade"
    >
        {children}
    </CSSTransition>
);



class InteractiveMovieScreen2 extends Component {
    constructor(props){
        super(props);

        this.state = { show: false };

        setTimeout(() => {
            this.setState({show: !this.state.show});
        }, 0);
    }

    render() {
        return (
            <Fade in = { this.state.show}>
            <div style =  {styles.interactiveWrapper}>
                <Logo />
                <ServiceTitle2 />
                <Introduce />
                <Introduce2 />
                <Iphone2 />
                <InteractiveMainTitle2 />
                <InteractiveMain
                    src = {Tap}
                    src2 = {TapD}
                    imgStyle= {Style1.imgStyle}
                    exStyle = {Style1.exStyle}
                >
                </InteractiveMain>
                <InteractiveMain
                    src = {Smartphone}
                    src2 = {ViveD}
                    imgStyle= {Style2.imgStyle}
                    exStyle = {Style2.exStyle}
                >
                </InteractiveMain>
                <InteractiveMain
                    src = {Play}
                    src2 = {Choice}
                    imgStyle= {Style3.imgStyle}
                    exStyle = {Style3.exStyle}
                >
                </InteractiveMain>
                <MailButton />
                <MailMain />
            </div>
            </Fade>
        );
    }
}

const styles = {
    interactiveWrapper:  {
        position: 'relative',
        width: '100%',
        height: windowHeight,
        backgroundColor: '#f7f7ed'
    }
}

export default InteractiveMovieScreen2;