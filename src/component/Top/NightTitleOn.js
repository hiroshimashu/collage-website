import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../index.css';
import CollageGold from '../../static/CollageGold.png';

const windowWidth = window.innerWidth;
const windowHeight = 1334 / 750 * windowWidth;


const titleWidth = windowWidth *  0.713;
const titleHeight = windowHeight * 0.07;
const titleX =  106 / 750 *  windowWidth;
const titleY = 632 / 1334 *  windowHeight;

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
        height: titleHeight,
        top: titleY,
        left: titleX,
        zIndex: 100
    }
}


export default NightTitleOn;