import React, { Component } from 'react';
import SellingMain from './SellingMain';

class SellingPlanScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page:1,
            blur:'',
            dotsColor1: '#bea0e4',
            dotsColor2: '#CEC6C6',
            dotsColor3: '#CEC6C6',
            dotsColor4: '#CEC6C6',
            hoverColor1: '',
            hoverColor2: ''
        };

        this.handleSwitch1 = this.handleSwitch1.bind(this);
        this.handleSwitch2 = this.handleSwitch2.bind(this);
        this.handleSwitch3 = this.handleSwitch3.bind(this);
        this.handleGoBack = this.handleGoBack.bind(this);
        this.handleHover1 = this.handleHover1.bind(this);
        this.handleOffHover1 = this.handleOffHover1.bind(this);
        this.handleHover2 = this.handleHover2.bind(this);
        this.handleOffHover2 = this.handleOffHover2.bind(this);
    }

    handleSwitch1(props) {
        console.log('switch is now active');
        this.setState(() => {
            return (
                {
                    page: 2,
                    blur: 'blur(10px)',
                    dotsColor1: '#CEC6C6',
                    dotsColor2: '#bea0e4',
                    dotsColor3: '#CEC6C6',
                    dotsColor4: '#CEC6C6'
                }
            );
        });
        console.log(this.state.page, this.state.blur);
    }

    handleSwitch2(props) {
        console.log('switch is now active');
        this.setState(() => {
            return (
                {
                    page: 3,
                    blur: 'blur(10px)',
                    dotsColor1: '#CEC6C6',
                    dotsColor2: '#CEC6C6',
                    dotsColor3: '#bea0e4',
                    dotsColor4: '#CEC6C6'
                }
            );
        });
        console.log(this.state.page, this.state.blur);
    }

    handleSwitch3(props) {
        console.log('switch is now active');
        this.setState(() => {
            return (
                {
                    page: 4,
                    blur: 'blur(10px)',
                    dotsColor1: '#CEC6C6',
                    dotsColor2: '#CEC6C6',
                    dotsColor3: '#CEC6C6',
                    dotsColor4: '#bea0e4'
                }
            );
        });
        console.log(this.state.page, this.state.blur);
    }

    handleGoBack() {
        console.log('go back to original');
        this.setState(() => {
            return (
                {
                    page: 1,
                    blur: '',
                    dotsColor1: '#bea0e4',
                    dotsColor2: '#CEC6C6',
                    dotsColor3: '#CEC6C6',
                    dotsColor4: '#CEC6C6'
                }
            );
        });
    }


    handleHover1() {
        this.setState(() => {
            return (
                {
                    hoverColor1: '#bea0e4'
                }
            );
        });
    }

    handleOffHover1() {
        console.log('off');
        this.setState(() => {
            return (
                {
                    hoverColor1: ''
                }
            );
        });
    }

    handleHover2() {
        this.setState(() => {
            return (
                {
                    hoverColor2: '#bea0e4'
                }
            );
        });
    }

    handleOffHover2() {
        console.log('off');
        this.setState(() => {
            return (
                {
                    hoverColor2: ''
                }
            );
        });
    }



    render() {
        return(
            <div className='serviceWrapper'>
                <SellingMain
                    page = {this.state.page}
                    handleSwitch1 = { this.handleSwitch1 }
                    handleSwitch2 = { this.handleSwitch2 }
                    handleSwitch3 = { this.handleSwitch3 }
                    handleGoBack = {this.handleGoBack}
                    blur = {this.state.blur}
                    color1 = {this.state.dotsColor1}
                    color2 = {this.state.dotsColor2}
                    color3 = {this.state.dotsColor3}
                    color4 = {this.state.dotsColor4}
                    hover1 = {this.handleHover1}
                    offHover1 = {this.handleOffHover1}
                    hoverColor1 = {this.state.hoverColor1}
                    hover2 = {this.handleHover2}
                    offHover2 = {this.handleOffHover2}
                    hoverColor2 = {this.state.hoverColor2}
                    target3 = {this.props.target3}
                    target5 = {this.props.target5}
                    target6 = {this.props.target6}
                    target7 = {this.props.target7}
                />
            </div>
        );
    }
}

export default SellingPlanScreen;