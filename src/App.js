import React, { Component } from 'react';
import './App.css';
import AboutScreen from './component/About/AboutScreen';
import WorksScreen from './component/Works/WorksScreen';
import ServiceScreen from './component/Service/ServiceScreen';
import SellingPlanScreen from './component/Service/SellingPlan/SellingPlanScreen';
import LogColleScreen from './component/Service/Logcolle/LogcolleScreen';
import LineStampScreen from './component/Service/LineStamp/LineStampScreen';
import Access from './component/Access/Access';
import Scene from './component/Top/LargeScreen/TopScreen';
import 'animate.css/animate.min.css';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            target1:null,
            target2: null,
            target3: null,
            target4: null,
            target5: null,
            target6: null,
            target7: null,
            serviceColor1: '#bea0e4',
            serviceColor2: '#CEC6C6',
            serviceColor3: '#CEC6C6',
            serviceColor4: '#CEC6C6',
        };

        this.handleServiceColor1 = this.handleServiceColor1.bind(this);
        this.handleServiceColor2 = this.handleServiceColor2.bind(this);
        this.handleServiceColor3 = this.handleServiceColor3.bind(this);
        this.handleServiceColor4 = this.handleServiceColor4.bind(this);
    }


    componentDidMount() {

        this.setState(() => {
            return(
                {
                    target1: this.aboutScreen,
                    target2: this.workScreen,
                    target3: this.serviceScreen,
                    target4: this.accessScreen,
                    target5: this.sellingScreen,
                    target6: this.logColleScreen,
                    target7: this.lineScreen
                }
            );
        });
    }

    handleServiceColor1() {
        this.setState(() => {
            return(
                {
                    serviceColor1: '#bea0e4',
                    serviceColor2: '#CEC6C6',
                    serviceColor3: '#CEC6C6',
                    serviceColor4: '#CEC6C6',
                }
            );
        });
    }

    handleServiceColor2() {
        this.setState(() => {
            return(
                {
                    serviceColor1: '#CEC6C6',
                    serviceColor2: '#bea0e4',
                    serviceColor3: '#CEC6C6',
                    serviceColor4: '#CEC6C6',
                }
            );
        });
    }

    handleServiceColor3() {
        this.setState(() => {
            return(
                {
                    serviceColor1: '#CEC6C6',
                    serviceColor2: '#CEC6C6',
                    serviceColor3: '#bea0e4',
                    serviceColor4: '#CEC6C6',
                }
            );
        });
    }

    handleServiceColor4() {
        this.setState(() => {
            return(
                {
                    serviceColor1: '#CEC6C6',
                    serviceColor2: '#CEC6C6',
                    serviceColor3: '#CEC6C6',
                    serviceColor4: '#bea0e4',
                }
            );
        });
    }

    render() {

        return (
            <div className="App">
                <Scene
                    target1 = {this.state.target1}
                    target2 = {this.state.target2}
                    target3 = {this.state.target3}
                    target4 = {this.state.target4}
                />
                <AboutScreen ref = {aboutScreen => this.aboutScreen = aboutScreen} />
                <WorksScreen ref = {workScreen => this.workScreen = workScreen}/>
                <ServiceScreen
                    ref = {serviceScreen => this.serviceScreen = serviceScreen}
                    target3 = {this.state.target3}
                    target5 = {this.state.target5}
                    target6 = {this.state.target6}
                    target7 = {this.state.target7}
                    serviceColor1 = {this.state.serviceColor1}
                    serviceColor2 = {this.state.serviceColor2}
                    serviceColor3 = {this.state.serviceColor3}
                    serviceColor4 = {this.state.serviceColor4}
                    handleServiceColor1 = {this.state.handleServiceColor1}
                    handleServiceColor2 = {this.state.handleServiceColor2}
                    handleServiceColor3 = {this.state.handleServiceColor3}
                    handleServiceColor4 = {this.state.handleServiceColor4}
                />
                <SellingPlanScreen
                    ref = {sellingScreen => this.sellingScreen = sellingScreen}
                    target3 = {this.state.target3}
                    target5 = {this.state.target5}
                    target6 = {this.state.target6}
                    target7 = {this.state.target7}
                    serviceColor1 = {this.state.serviceColor1}
                    serviceColor2 = {this.state.serviceColor2}
                    serviceColor3 = {this.state.serviceColor3}
                    serviceColor4 = {this.state.serviceColor4}
                    handleServiceColor1 = {this.state.handleServiceColor1}
                    handleServiceColor2 = {this.state.handleServiceColor2}
                    handleServiceColor3 = {this.state.handleServiceColor3}
                    handleServiceColor4 = {this.state.handleServiceColor4}
                />
                <LogColleScreen
                    ref = {logColleScreen => this.logColleScreen = logColleScreen}
                    target3 = {this.state.target3}
                    target5 = {this.state.target5}
                    target6 = {this.state.target6}
                    target7 = {this.state.target7}
                    serviceColor1 = {this.state.serviceColor1}
                    serviceColor2 = {this.state.serviceColor2}
                    serviceColor3 = {this.state.serviceColor3}
                    serviceColor4 = {this.state.serviceColor4}
                    handleServiceColor1 = {this.state.handleServiceColor1}
                    handleServiceColor2 = {this.state.handleServiceColor2}
                    handleServiceColor3 = {this.state.handleServiceColor3}
                    handleServiceColor4 = {this.state.handleServiceColor4}
                />
                <LineStampScreen
                    ref = {lineScreen => this.lineScreen = lineScreen}
                    target3 = {this.state.target3}
                    target5 = {this.state.target5}
                    target6 = {this.state.target6}
                    target7 = {this.state.target7}
                    serviceColor1 = {this.state.serviceColor1}
                    serviceColor2 = {this.state.serviceColor2}
                    serviceColor3 = {this.state.serviceColor3}
                    serviceColor4 = {this.state.serviceColor4}
                    handleServiceColor1 = {this.state.handleServiceColor1}
                    handleServiceColor2 = {this.state.handleServiceColor2}
                    handleServiceColor3 = {this.state.handleServiceColor3}
                    handleServiceColor4 = {this.state.handleServiceColor4}
                />
                <Access ref = {accessScreen => this.accessScreen = accessScreen }/>
            </div>
        );
    }
}

export default App;
