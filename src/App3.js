import React, { Component } from 'react';
import Top from './component/Top/LargeScreen/TopScreen';
import Top_Night from './component/Top/LargeScreen/Top_Night';
import About from './component/About/LargeScreen/AboutScreen';
import Works from './component/Works/LargeScreen/WorksScreen';
import Service from './component/Service/LargeScreen/ServiceScreen';
import Access from './component/Access/Access';

class App3 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            target1: null,
            target2: null,
            target3: null,
            target4: null,
            night: false
        };
    }

    componentWillMount() {
        const date = new Date().getHours();
        console.log(date);
        if(date >= 18 || date <= 6) {
            this.setState(() => {
                return {night: true};
            });
        }
    }

    componentDidMount() {

        this.setState(() => {
            return(
                {
                    target1: this.aboutScreen,
                    target2: this.workScreen,
                    target3: this.serviceScreen,
                    target4: this.accessScreen
                }
            );
        });

    }


    render() {
        return (
            <div>
                {!this.state.night && <Top target1 = {this.state.target1} target2 = {this.state.target2} target3 = {this.state.target3} target4 = {this.state.target4}/>}
                {this.state.night && <Top_Night target1 = {this.state.target1} target2 = {this.state.target2} target3 = {this.state.target3} target4 = {this.state.target4} />}
                <About ref = {aboutScreen => this.aboutScreen = aboutScreen} />
                <Works ref = {workScreen => this.workScreen = workScreen} />
                <Service ref = {serviceScreen => this.serviceScreen = serviceScreen} />
                <Access  ref = {accessScreen => this.accessScreen = accessScreen } />
            </div>
        );
    }
}

export default App3;
