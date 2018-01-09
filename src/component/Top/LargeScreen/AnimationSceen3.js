import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../../index.css';
import Collage from '../../../static/COLLAGE.png';


const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


const titleWidth = 535;
const titleHeight = 94;
function calculateTitleX() {
    const width = (windowWidth - titleWidth) / 2;
    return width;
}
const titleX = calculateTitleX();
console.log(titleX);
function  calculateTitleY() {
    const height = (windowHeight - titleHeight) / 2;
    return height;
}
const titleY = calculateTitleY();



const Fade = ({ children, ...props }) => (
    <CSSTransition
        {...props}
        classNames="fade"
        unmountOnExit={true}
    >
        {children}
    </CSSTransition>
);

class AnimationScene3 extends Component {
    constructor(props){
        super(props);

        this.state = { show: false};

        setTimeout(() => {
            this.setState({show: !this.state.show});
        }, 0);

        setTimeout(() => {
            this.setState({show: !this.state.show});
        }, 1200);

    }

    componentDidMount() {
        setTimeout(() => {
            this.props.handleAnimation();
        }, 1500);
    }


    render() {
        return(
            <Fade in = { this.state.show } timeout = {2000}>
                <img src = {Collage} alt = 'collage' style = {styles.collage} />
            </Fade>
        );
    }
}

const styles = {
    collage: {
        position: 'absolute',
        width: titleWidth,
        height: titleHeight,
        top: titleY,
        bottom: titleY,
        left: titleX,
        right: titleX,
        zIndex: 100
    }
}


export default AnimationScene3;


