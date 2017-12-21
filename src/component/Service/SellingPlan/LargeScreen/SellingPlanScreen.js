import React, { Component } from 'react';
import Dots from './Dots';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';





class SellingPlanScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color1: '#a99fc5',
            color2: '#bfbfbf',
            color3: '#bfbfbf',
            color4: '#bfbfbf',
            page: 1,
            blur: ''
        };

        this.id = null;

        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
    }

    componentDidMount() {
        this.id = setInterval(() => {
            if (this.state.page === 1) {
                this.handleClick2();
            } else if (this.state.page === 2) {
                this.handleClick3();
            } else if (this.state.page === 3) {
                this.handleClick4();
            } else {
                this.handleClick1();
            }
        }, 4000);
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
                page: 1,
                blur: ''
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
                page: 2,
                blur: 'blur(10px)'
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
                page: 3,
                blur: 'blur(10px)'
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
                page: 4,
                blur: 'blur(10px)'
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
                {this.state.page === 1 && <Screen1 />}
                {this.state.page === 2 && <Screen2 />}
                {this.state.page === 3 && <Screen3 />}
                {this.state.page === 4 && <Screen4 />}
            </div>
        );
    }
}

export default SellingPlanScreen;