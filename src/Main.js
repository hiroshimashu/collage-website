import React, { Component } from 'react';
import App2 from './App2';
import App3 from './App3';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            large: true
        };
    }

    componentWillMount() {
        const width = window.innerWidth;
        if(width <= 700) {
            this.setState((prevState) => {
                return {large: !prevState};
            });
        }
    }

    render() {
        return(
            <div>
                {this.state.large && <App3 />}
                {!this.state.large && <App2 /> }
            </div>
        );
    }
}

export default Main;