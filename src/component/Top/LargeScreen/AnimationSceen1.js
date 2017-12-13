import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../../index.css';
import Logo from '../../../static/logo.png';

const windowWidth = window.innerWidth;
const windowHeight = 750 / 1200 * windowWidth;


const imageWidth = windowWidth *  0.083;
const imageHeight = windowHeight * 0.132;
const imageX =  548 / 1200 *  windowWidth;
const imageY = 327 / 750 *  windowHeight;

const Fade = ({ children, ...props }) => (
    <CSSTransition
        {...props}
        classNames="fade"
        unmountOnExit={true}
    >
        {children}
    </CSSTransition>
);



class AnimationSceen1 extends Component {
    constructor(props){
        super(props);

        this.state = { show: false };

        setTimeout(() => {
            this.setState({show: !this.state.show});
        }, 0);

        setTimeout(() => {
            this.setState({show: !this.state.show});
        }, 800);


    }

    componentDidMount() {
        setTimeout(() => {
            this.props.handleAnimation();
        }, 1500);
    }

    render() {
        return(
            <Fade in = { this.state.show} timeout = {2000}>
                <img src = {Logo} alt = 'sceen1' style = { styles.logo}/>
            </Fade>
        );
    }
}

const styles = {
    logo : {
        position: 'absolute',
        width: imageWidth,
        height: imageHeight,
        top: imageY,
        left: imageX
    }
}

export default AnimationSceen1;