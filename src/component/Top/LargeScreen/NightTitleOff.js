import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../../index.css';
import CollageWhite from '../../../static/CollageWhite.png';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


const titleWidth = windowWidth *  0.446;
const titleHeight = windowHeight * 0.125;
const titleX =  331 / 1200 *  windowWidth;
const titleY = 327 / 750 *  windowHeight;

const Fade = ({ children, ...props }) => (
    <CSSTransition
        {...props}
        classNames="fade"
        unmountOnExit={true}
    >
        {children}
    </CSSTransition>
);





class NightTitleOff extends Component {

    constructor(props) {
        super(props);

        this.state = {show: true};

    }

    render(){
        return(
            <Fade in = { this.state.show } timeout = {2000}>
                <img src = {CollageWhite} alt = 'collage' style = {styles.collage}/>
            </Fade>
        );
    }
}

const styles = {
    collage: {
        position: 'absolute',
        width: 44.6 + 'vw',
        height: 'auto',
        top: 43.6 + 'vh',
        left: 27.583 + 'vw',
        zIndex: 100
    }
}


export default NightTitleOff;


