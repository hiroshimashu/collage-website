import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../index.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './Animation';


const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  1334 /750;
const imageWidth = windowWidth * 0.133;
const imageHeight = windowHeight * 0.074;
const imageX = windowWidth * 326 / 750;
const imageY = windowHeight * 618 / 1334;

const Fade = ({ children, ...props }) => (
    <CSSTransition
        {...props}
        classNames="fade"
        unmountOnExit={true}
    >
        {children}
    </CSSTransition>
);



class AnimationScene2 extends Component {
    constructor(props){
        super(props);

        this.state = { show: false };

        setTimeout(() => {
            this.setState({show: !this.state.show});
        }, 0);

    }

    componentDidMount() {
        setTimeout(() => {
            this.props.handleAnimation();
        }, 500);
    }

    render() {
        return(
            <Fade in = { this.state.show} timeout = {2000}>
                <P5Wrapper sketch = {sketch} />
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

export default AnimationScene2;