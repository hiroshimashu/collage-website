import React, { Component } from 'react';
import AnimationScene1_Night from './AnimationScene1_Night';
import Top_Night_Main from './Top_Night_Main';
import Background from '../../../static/Background.png';


const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


class Top_Night extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show1: true,
            show2: false
        };

        this.handleAnimation = this.handleAnimation.bind(this);
    }

    handleAnimation() {
        this.setState((prevState) => {
            return {show2: !prevState.show2 };
        });
    }


    render() {
        return(
            <div  style = {{position: 'relative', width: windowWidth, height: windowHeight}}>
                <img src = {Background} style = {{position:'absolute',width:windowWidth, height:windowHeight}} />
                <AnimationScene1_Night handleAnimation = {this.handleAnimation} />
                {this.state.show2 && <Top_Night_Main />}
            </div>
        );
    }
}

export default Top_Night;