import React, { Component } from 'react';
import App2 from './App2';
import App3 from './App3';
import {StyleRoot} from 'radium';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            landscape: true
        };
    }

    componentWillMount() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        console.log(width, height);
        if(width <= height) {
            this.setState((prevState) => {
                return {landscape: !prevState};
            });
        }
    }

    render() {
        console.log(this.state.landscape);

        return(
            <div>
                {this.state.landscape && <App3 />}
                {!this.state.landscape && <App2 /> }
            </div>

        );
    }
}

export default Main;