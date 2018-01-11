import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../../index.css';
import CollageGold from '../../../static/COLLAGE_Gold_mod.png';
import Logo_Night from '../../../static/top(2).png';

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





class NightTitleOn extends Component {

    constructor(props) {
        super(props);

        this.state = {show: true};

    }

    render(){
        return(
            <Fade in = { this.state.show } timeout = {2000}>
                <img src = {CollageGold} alt = 'collage' style = {styles.collage}/>
            </Fade>
        );
    }
}

const styles = {
    collage: {
        position: 'absolute',
        width: titleWidth,
        height: 'auto',
        top: titleY,
        left: titleX,
        zIndex: 100
    }
}


export default NightTitleOn;