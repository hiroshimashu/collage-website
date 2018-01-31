import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dots from './Dots';
import { CSSTransition } from 'react-transition-group';
import '../../../../index.css';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';

const Slide = ({ children, ...props }) => (
    <CSSTransition
        {...props}
        timeout={1000}
        classNames="slide"
        unmountOnExit={true}
    >
        {children}
    </CSSTransition>
);





class SellingPlanScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color1: '#a99fc5',
            color2: '#bfbfbf',
            color3: '#bfbfbf',
            color4: '#bfbfbf',
            page1: true,
            page2: false,
            page3: false,
            page4: false,
            width: this.props.window.width
        };

        this.id = null;

        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
    }

    componentDidMount() {
        this.id = setInterval(() => {
            if (this.state.page1 === true) {
                this.handleClick2();
            } else if (this.state.page2 === true) {
                this.handleClick3();
            } else if (this.state.page3 === true) {
                this.handleClick4();
            } else {
                this.handleClick1();
            }
        }, 500000);
    }

    componentWillReceiveProps() {
        this.setState(() => {
            return {
                width: this.props.window.width
            };
        });
    }
    componentWillUnmount() {
        clearInterval(this.id);
    }

    handleClick1() {
        this.setState(() => {
            return {
                color1: '#a99fc5',
                color2: '#bfbfbf',
                color3: '#bfbfbf',
                color4: '#bfbfbf',
                page1: true,
                page2: false,
                page3: false,
                page4: false,
            };
        });
    }

    handleClick2() {
        console.log('clicked')

        this.setState(() => {
            return {
                color1: '#bfbfbf',
                color2: '#a99fc5',
                color3: '#bfbfbf',
                color4: '#bfbfbf',
                page1: false,
                page2: true,
                page3: false,
                page4: false
            };
        });
    }

    handleClick3() {
        this.setState(() => {
            return {
                color1: '#bfbfbf',
                color2: '#bfbfbf',
                color3: '#a99fc5',
                color4: '#bfbfbf',
                page1: false,
                page2: false,
                page3: true,
                page4: false
            };
        });
    }

    handleClick4() {
        this.setState(() => {
            return {
                color1: '#bfbfbf',
                color2: '#bfbfbf',
                color3: '#bfbfbf',
                color4: '#a99fc5',
                page1: false,
                page2: false,
                page3: false,
                page4: true
            };
        });
    }


    render() {
        return(
            <div>
                <Dots
                    color1 = {this.state.color1}
                    color2 = {this.state.color2}
                    color3 = {this.state.color3}
                    color4 = {this.state.color4}
                    handleClick1 = {this.handleClick1}
                    handleClick2 = {this.handleClick2}
                    handleClick3 = {this.handleClick3}
                    handleClick4 = {this.handleClick4}
                />
                <Slide in = {this.state.page1}>
                    <Screen1/>
                </Slide>
                <Slide in = {this.state.page2}>
                    <Screen2 />
                </Slide>
                <Slide in = {this.state.page3}>
                    <Screen3 />
                </Slide>
                <Slide in = {this.state.page4}>
                    <Screen4 />
                </Slide>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        window: state.windowsize
    };
}

export default connect(mapStateToProps)(SellingPlanScreen);