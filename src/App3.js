import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import Top from './containers/TopScreen';
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
            night: false,
            width: this.props.windowsize,
            height: window.innerHeight
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

            <Router>
                <div>
                    {!this.state.night && <Route exact path = '/'  component = {Top} />}
                    {this.state.night && <Route exact path = '/' component = {Top_Night} />}
                    <Route path =  '/about' component = {About} />
                    <Route path =  '/works' component = {Works} />
                    <Route path =  '/service' component = {Service} />
                    <Route path =  '/access' component = {Access} />
                </div>
            </Router>
        );
    }
}


function mapStateToProps(state) {
    return {
        windowsize: state.windowsize
    };
}

export default connect(mapStateToProps)(App3);


