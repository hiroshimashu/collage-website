import React, { Component } from 'react';
import {  BrowserRouter as Router, Route} from 'react-router-dom';
import Top2 from './component/Top/Top2';
import TopNight2 from './component/Top/Top_Night2';
import Menu from './component/Menu';
import AboutScreen from './component/About/AboutScreen';
import WorksScreen from './component/Works/WorksScreen2';
import InteractiveMovieScreen2 from './component/Service/InteractiveMovie/InteractiveMovieScreen2';
import SellingPlanScreen2 from './component/Service/SellingPlan/SellingPlanScreen2';
import LogColleScreen2 from './component/Service/Logcolle/LogColleScreen2';
import LineStampScreen2 from './component/Service/LineStamp/LineStampScreen2';
import AccessScreen2 from './component/Access/AccessScreen2';
import MenuButton from './component/Service/InteractiveMovie/Menu';
import ServiceSelector from './component/Service/ServiceSelector';

class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            night: false

        };

        this.handleShowMenu = this.handleShowMenu.bind(this);
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

    handleShowMenu() {
        console.log('switch')
        this.setState( (prevState) => {
            return {showMenu: !prevState.showMenu};
        });
    }


    render() {
        console.log(this.state.night);
        return (
            <Router>
                <div className="App">

                    {this.state.showMenu &&
                    <Menu onHandleClick={this.handleShowMenu}/>
                    }
                    <MenuButton handleClick={this.handleShowMenu} />
                    {!this.state.night && <Route exact path="/" component={Top2} />}
                    {this.state.night && <Route exact path="/" component={TopNight2} />}
                    <Route exact path="/about" component={AboutScreen} />
                    <Route path="/works" component={WorksScreen} />
                    <Route path="/service" component = {ServiceSelector} />
                    <Route path="/service/Interactive" component={InteractiveMovieScreen2} />
                    <Route path="/service/selling" component={SellingPlanScreen2} />
                    <Route path="/service/logcolle" component={LogColleScreen2} />
                    <Route path="/service/line" component={LineStampScreen2} />
                    <Route path="/access" component={AccessScreen2} />
                </div>
            </Router>
        );
    }
}

export default App2;


