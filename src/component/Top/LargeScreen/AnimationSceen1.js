import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../../index.css';
import Logo from '../../../static/logo.png';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


const imageWidth = 100;
const imageHeight = 99;
const imageX =  548 / 1200 *  windowWidth;
function CalculatePositionY() {
    return (windowHeight - imageHeight) / 2;
}
const imageY = CalculatePositionY();

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
        }, 1500);


    }

    componentDidMount() {
        setTimeout(() => {
            this.props.handleAnimation();
        }, 2300);
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
        width: '100px',
        height: '99px',
        top:'calc(50vh - 49.5px)',
        left:'calc(50vw - 50px)'
    }
}

export default AnimationSceen1;