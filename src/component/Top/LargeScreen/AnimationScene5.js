import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../../index.css';
import Header from '../../Header';
import Logo from '../../../static/collage_red.png';
import Logo2 from '../../../static/blueCollage.png';
import Logo3 from '../../../static/pinkCollage.png';
import Logo4 from '../../../static/purpleCollage.png';

import Menu from './Menu';
import MenuButton from './MenuButton';

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



class AnimationSceen5 extends Component {
    constructor(props){
        super(props);

        this.state = {
            show: false,
            ready: false,
            green: false,
            red: false,
            pink:false,
            purple: false,
            state:0
        };

        this.handleStateChange = this.handleStateChange.bind(this);

        setTimeout(() => {
            this.setState(() => {
                return {
                    show: true,
                    green: true
                };
            });
        }, 0)
        this.handleClick = this.handleClick.bind(this);
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

    handleClick() {
        console.log('clicked!')
        this.setState((prevState) => {
            return {ready: !prevState.ready};
        });
    }

    render() {
        return(
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
                    {!this.state.ready &&<Menu handleClick = {this.handleClick}/>}
                    {this.state.ready && <MenuButton
                        target1 = {this.props.target1}
                        target2 = {this.props.target2}
                        target3 = {this.props.target3}
                        target4 = {this.props.target4}
                    />}
            </div>

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
        zIndex: 101
    }
}


export default AnimationSceen5;