import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../../index.css';
import Forest from './Forest';
import Switch from './Switch';
import Stars from './Stars';
import On from './On';
import MenuButton from './MenuButton';
import Moon from './Moon';
import NightTitleOff from './NightTitleOff';
import NightTitleOn from './NightTitleOn';
import Building1 from './Building1';
import Building2 from './Building2';


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



    render() {
        return(
            <Fade in = { this.state.show } timeout = {2000}>
                <div>
                    {this.state.switch && <Forest />}
                    <Switch handleClick = {this.handleClick} opacity = {this.state.opacity} />
                    {this.state.switch && <On />}
                    <Stars />
                    <Moon />
                    {!this.state.switch && <NightTitleOff />}
                    {this.state.switch && <NightTitleOn /> }
                    {!this.state.switch && <Building1 /> }
                    {!this.state.switch && <Building2 /> }
                    <MenuButton
                        target1 = {this.props.target1}
                        target2 = {this.props.target2}
                        target3 = {this.props.target3}
                        target4 = {this.props.target4}
                    />
                </div>
            </Fade>
        );
    }
}


export default Top_Night;