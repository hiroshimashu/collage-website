import React, { Component } from 'react';
import LogColleMain from './LogColleMain';


class LogcolleScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page:1,
            dotsColor1: '#bea0e4',
            dotsColor2: '#CEC6C6',
            dotsColor3: '#CEC6C6',
            dotsColor4: '#CEC6C6',
            dotsColor5: '#CEC6C6'
        };

        this.handleSwitch1 = this.handleSwitch1.bind(this);
        this.handleSwitch2 = this.handleSwitch2.bind(this);
        this.handleSwitch3 = this.handleSwitch3.bind(this);
        this.handleSwitch4 = this.handleSwitch4.bind(this);
        this.handleGoBack = this.handleGoBack.bind(this);
    }

    componentDidMount() {
        this.id = setInterval(() => {
            if (this.state.page === 1) {
                this.handleSwitch2();
            } else if (this.state.page === 2) {
                this.handleSwitch3();
            } else if (this.state.page === 3) {
                this.handleSwitch4();
            } else if(this.state.page === 4){
                this.handleSwitch5();
            } else {
                this.handleSwitch1();
            }
        }, 5000);
    }

    handleSwitch1(props) {
        console.log('switch is now active');
        this.setState(() => {
            return (
                {
                    page: 2,
                    dotsColor1: '#CEC6C6',
                    dotsColor2: '#bea0e4',
                    dotsColor3: '#CEC6C6',
                    dotsColor4: '#CEC6C6',
                    dotsColor5: '#CEC6C6'
                }
            );
        });
    }

    handleSwitch2(props) {
        console.log('switch is now active');
        this.setState(() => {
            return (
                {
                    page: 3,
                    dotsColor1: '#CEC6C6',
                    dotsColor2: '#CEC6C6',
                    dotsColor3: '#bea0e4',
                    dotsColor4: '#CEC6C6',
                    dotsColor5: '#CEC6C6'
                }
            );
        });
    }

    handleSwitch3(props) {
        console.log('switch is now active');
        this.setState(() => {
            return (
                {
                    page: 4,
                    dotsColor1: '#CEC6C6',
                    dotsColor2: '#CEC6C6',
                    dotsColor3: '#CEC6C6',
                    dotsColor4: '#bea0e4',
                    dotsColor5: '#CEC6C6'
                }
            );
        });

    }

    handleSwitch4(props) {
        console.log('switch is now active');
        this.setState(() => {
            return (
                {
                    page: 5,
                    dotsColor1: '#CEC6C6',
                    dotsColor2: '#CEC6C6',
                    dotsColor3: '#CEC6C6',
                    dotsColor4: '#CEC6C6',
                    dotsColor5: '#bea0e4'
                }
            );
        });
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
                    dotsColor4: '#CEC6C6',
                    dotsColor5: '#CEC6C6'
                }
            );
        });
    }

    render() {
        return(
            <div className="logColleWrapper" style = {{marginTop: '-50px'}}>
                <LogColleMain
                    page = {this.state.page}
                    handleSwitch1 = { this.handleSwitch1 }
                    handleSwitch2 = { this.handleSwitch2 }
                    handleSwitch3 = { this.handleSwitch3 }
                    handleSwitch4 = { this.handleSwitch4 }
                    handleGoBack = {this.handleGoBack}
                    color1 = {this.state.dotsColor1}
                    color2 = {this.state.dotsColor2}
                    color3 = {this.state.dotsColor3}
                    color4 = {this.state.dotsColor4}
                    color5 = {this.state.dotsColor5}
                    target3 = {this.props.target3}
                    target5 = {this.props.target5}
                    target6 = {this.props.target6}
                    target7 = {this.props.target7}
                />
            </div>
        );
    }
}

export default LogcolleScreen;