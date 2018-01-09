import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnimationScene1 from './AnimationSceen1';
import AnimationScene3 from './AnimationSceen3';
import AnimationSceen5 from './AnimationScene5';
import Background from './3DAnimation_modified';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;



class Scene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onThree: false,
            show1: true,
            show2: false,
            show3: false,
            show4: false,
            width: this.props.Width,
            height: this.props.Height
        };
        this.handleAnimation1 = this.handleAnimation1.bind(this);
        this.handleAnimation2 = this.handleAnimation2.bind(this);
        this.handleAnimation3 = this.handleAnimation3.bind(this);
        this.handleAnimation4 = this.handleAnimation4.bind(this);
        this.handleThree = this.handleThree.bind(this);
    }

    handleThree() {
        this.setState((prevState) => {
            return {onThree: !prevState.onThree };
        });
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

    componentDidMount() {
        setInterval(() => {console.log(this.state.width);}, 1000);
    }




    render() {
        return(
            <div style = {{position: 'relative', width: windowWidth, height:windowHeight}}>
                <AnimationScene1 handleAnimation = {this.handleThree} />
                {this.state.onThree && <Background show =  {this.state.onThree} handleAnimation = {this.handleAnimation1} /> }
                {this.state.show2 && <AnimationScene3 handleAnimation = {this.handleAnimation3} />}
                {this.state.show4 && <AnimationSceen5/>}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        window: state.window
    };
}

export default connect(mapStateToProps)(Scene);