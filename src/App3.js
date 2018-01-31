import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import './index.css';
import CSSTransition from 'react';
import { connect } from 'react-redux';
import Logo from './component/Top/LargeScreen/Logo';
import Header from './component/Header';
import Menu from './component/Top/LargeScreen/Menu2';
import MenuButton from './component/Top/LargeScreen/MenuButton2';
import Top from './containers/TopScreen';
import Top_Night from './component/Top/LargeScreen/Top_Night';
import About from './component/About/LargeScreen/AboutScreen';
import Works from './component/Works/LargeScreen/WorksScreen';
import Service from './component/Service/LargeScreen/ServiceScreen';
import Access from './component/Access/Access';
import showMenu from './actions/showMenu';


const Fade = ({ children, ...props }) => (
    <CSSTransition
        {...props}
        classNames="fade"
        unmountOnExit={true}
    >
        {children}
    </CSSTransition>
);

let TimerID;
let TimerID2;
let date;

class App3 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            target1: null,
            target2: null,
            target3: null,
            target4: null,
            logo: false,
            header: false,
            night: false,
            window: this.props.windowsize,
            height: window.innerHeight,
            menu: this.props.menu,
            showMenu: false
        };

        this.handleShowMenu = this.handleShowMenu.bind(this);


    }

    componentWillMount() {
        date = new Date().getHours();
        console.log(date);

        this.handleMenu();
        if (date >= 18 || date <= 6) {
            this.setState(() => {
                return {night: true};
            });
        }


    }


    componentDidMount() {

        this.setState(() => {
            return (
                {
                    target1: this.aboutScreen,
                    target2: this.workScreen,
                    target3: this.serviceScreen,
                    target4: this.accessScreen
                }
            );
        });


        if (this.state.night) {
            clearTimeout(TimerID);
            TimerID2 = setTimeout(() => {
                console.log('night timer is on')
                this.setState(() => {
                    return {menu: this.props.menu};
                });
            }, 2500);

            const location = window.location.href

            if(location.match(/about|works|service|access/)) {
                clearTimeout(TimerID2);
            }
        }
    }

    handleShowMenu() {
        console.log('switch');
        this.setState( (prevState) => {
            return {showMenu: !prevState.showMenu};
        });
    }

    handleMenu = () => {
        console.log('show menu')


        const location = window.location.href

        if(location.match(/about|works|service|access/)) {
            this.setState(() => {
                return { menu: true };
            });
        }else {

            TimerID = setTimeout(() => {
                this.setState(() => {
                    return { menu: this.props.menu};
                });
            }, 5500);
        }
    }

    render() {
        return (

            <Router>
                <div>
                    <Logo />
                    <MenuButton showMenu = {this.state.menu} handleClick = {this.handleShowMenu} />
                    <Menu onHandleClick={this.handleShowMenu} showMenu = {this.state.showMenu} />
                    {!this.state.night &&<Route exact path = '/' component = {Top} />}
                    {this.state.night && <Route exact path = '/' component = {Top_Night} />}
                    <Route path="/about" component={About} />
                    <Route path="/works" component={Works} />
                    <Route path="/service" component={Service} />
                    <Route path="/access" component={Access} />
                </div>
            </Router>
        );
    }
}


function mapStateToProps(state) {
    return {
        window: state.windowsize,
        menu: state.showMenu.visible
    };
}

function mapDispatchToProps(dispatch) {
    return {
        showMenu() {
            dispatch(showMenu());
        }
    };
}


export default connect(mapStateToProps)(App3);


