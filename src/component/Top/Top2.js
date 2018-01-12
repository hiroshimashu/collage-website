import React, { Component } from 'react';
import Logo from '../Service/InteractiveMovie/Logo';
import Background from './3DAnimation_modified';
import AnimationScene1 from './AnimationSceen1';
import AnimationScene3 from './AnimationSceen3';
import AnimationScene4 from './AnimationScene4';
import AnimationSceen5 from './AnimationScene5';

const windowWidth = window.innerWidth;
const windowHeight = 1334 / 750 * windowWidth;


const titleWidth = windowWidth *  0.713;
const titleHeight = windowHeight * 0.07;
const titleX =  106 / 750 *  windowWidth;
const titleY = 632 / 1334 *  windowHeight;


class Top2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show1: true,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
        };
        this.handleAnimation1 = this.handleAnimation1.bind(this);
        this.handleAnimation2 = this.handleAnimation2.bind(this);
        this.handleAnimation3 = this.handleAnimation3.bind(this);
        this.handleAnimation4 = this.handleAnimation4.bind(this);
    }

    handleAnimation1() {
        this.setState((prevState) => {
            return {show2: !prevState.show2 };
        });
    }

    handleAnimation2() {
        this.setState((prevState) => {
            return {show3: !prevState.show3};
        });
    }

    handleAnimation3() {
        this.setState((prevState) => {
            return {show4: !prevState.show4};
        });
    }

    handleAnimation4() {
        this.setState((prevState) => {
            return {show5: !prevState.show5};
        });
    }



    render() {
        return(
            <div>
                <Logo />
                <AnimationScene1 handleAnimation = {this.handleAnimation1}/>
                {this.state.show2 && <Background show = {this.state.show2} handleAnimation = {this.handleAnimation2} />}
                {this.state.show3 && <AnimationScene3 show = {this.state.show3} handleAnimation = {this.handleAnimation3} />}
                {this.state.show4 && <AnimationSceen5 />}
            </div>
        );
    }
}

export default Top2;