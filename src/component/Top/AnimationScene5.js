import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../index.css';
import Logo from '../../static/collage_red.png';
import Logo2 from '../../static/blueCollage.png';
import Logo3 from '../../static/pinkCollage.png';
import Logo4 from '../../static/purpleCollage.png';
import SNS from './SNS';

const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  1334 /750;
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



class AnimationSceen5 extends Component {
    constructor(props){
        super(props);

        this.state = {
            show: false,
            green:true,
            red: false,
            pink:false,
            purple: false,
            state:0
        };

        this.handleStateChange = this.handleStateChange.bind(this);

        setTimeout(() => {
            this.setState({show: !this.state.show});
        }, 0);
    }


    componentDidMount() {
        setInterval(this.handleStateChange, 2000);
    }

    handleStateChange() {
        if(this.state.state === 0) {
            this.setState(() => {
                return {
                    state: 1,
                    green:false,
                    red: true,
                    pink:false,
                    purple: false,
                };
            });
        }else if(this.state.state === 1) {
            this.setState(() => {
                return {
                    state: 2,
                    green:false,
                    red: false,
                    pink: true,
                    purple: false,

                };
            });
        }else if(this.state.state === 2) {
            this.setState(() => {
                return {
                    state: 3,
                    green:false,
                    red: false,
                    pink: false,
                    purple: true,
                };
            });
        }else {
            this.setState(() => {
                return {
                    state: 0,
                    green:true,
                    red: false,
                    pink:false,
                    purple: false,
                };
            });
        }
    }


    render() {
        return(
            <Fade in = { this.state.show} timeout = {1000}>
                <div>
                    <Fade in = {this.state.green} timeout = {2000}>
                        <img src = {Logo} alt = 'sceen1' style = { styles.collage}/>
                    </Fade>
                    <Fade in = {this.state.red} timeout = {2000}>
                        <img src = {Logo2} alt = "screen1" style = {styles.collage} />
                    </Fade>
                    <Fade in = {this.state.pink} timeout = {2000}>
                        <img src = {Logo3} alt = "screen1" style = {styles.collage} />
                    </Fade>
                    <Fade in = {this.state.purple} timeout = {2000}>
                        <img src = {Logo4} alt = "screen1" style = {styles.collage} />
                    </Fade>
                    <SNS />
                </div>
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


export default AnimationSceen5;