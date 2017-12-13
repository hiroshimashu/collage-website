import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../../index.css';
import Particles from 'react-particles-js';

const windowWidth = window.innerWidth;
const windowHeight = 1334 / 750 * windowWidth;




const Fade = ({ children, ...props }) => (
    <CSSTransition
        {...props}
        classNames="fade"
        unmountOnExit={true}
    >
        {children}
    </CSSTransition>
);

class AnimationScene4 extends Component {
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

        setTimeout(() => {
            this.props.handleThree();
        }, 5000);

    }

    render() {
        return(
            <Fade in = { this.state.show } timeout = {2000}>
                <Particles
                    params={{
                        particles: {
                            number: {
                                value: 100
                            },
                            size: {
                                value: 10,
                                random: true
                            },
                            color:{
                                value:'#e9e9e9'
                            },
                            line_linked: {
                                enable: false
                            },
                            move: {
                                direction: 'bottom',
                                speed: 1
                            },
                            interactivity: {
                                events: {
                                    onHover: {
                                        enable: true,
                                        mode: 'push'
                                    }
                                }
                            }
                        }
                    }}
                    width = {'100%'}
                    height = {'100%'}
                    style =  {{
                        position:'absolute',
                        zIndex: '3'
                    }}
                    className =   'particleWrapper'
                />
            </Fade>
        );
    }
}


export default AnimationScene4;


