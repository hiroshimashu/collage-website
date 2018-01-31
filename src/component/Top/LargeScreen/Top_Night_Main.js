import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../../index.css';
import Forest from './Forest';
import Switch from './Switch';
import Stars from './Stars';
import On from './On';
import Moon from './Moon';
import NightTitleOff from './NightTitleOff';
import NightTitleOn from './NightTitleOn';
import Building1 from './Building1';
import Building2 from './Building2';
import showMenu from '../../../actions/showMenu';
import { connect } from 'react-redux';


const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const Fade = ({ children, ...props }) => (
    <CSSTransition
        {...props}
        classNames="fade"
        unmountOnExit={true}
    >
        {children}
    </CSSTransition>
);

class Top_Night extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            switch:false,
            opacity: 1,
        };

        setTimeout(() => {
            this.setState({show: !this.state.show});
        }, 0);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('fired')
        this.setState((prevState) => {
            return {switch: !prevState.switch};
        });
        if(this.state.switch) {
            this.setState((prevState) => {
                return {opacity: 1};
            });
        }else {
            this.setState((prevState) => {
                return {opacity: 0.5};
            });
        }
    }

    componentDidMount() {
        this.props.showMenu();
    }



    render() {
        return(
            <Fade in = { this.state.show } timeout = {2000}>
                <div>
                    <Forest />
                    <Switch handleClick = {this.handleClick} opacity = {this.state.opacity} />
                    {this.state.switch && <On />}
                    <Stars />
                    <Moon />
                    {!this.state.switch && <NightTitleOff />}
                    {this.state.switch && <NightTitleOn /> }
                </div>
            </Fade>
        );
    }
}

function mapStateToProps(state) {
    return {
        show: state.showMenu.visible
    };
}

function mapDispatchToProps(dispatch) {
    return {
        showMenu() {
            dispatch(showMenu());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Top_Night);
