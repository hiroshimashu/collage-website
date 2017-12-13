import React, { Component } from 'react';
import Logo from './Logo';
import Background from '../../../static/Background.png';
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



class Top_Night extends Component {
    constructor(props) {
        super(props);

        this.state = {
            switch:false,
            opacity: 1,
        };

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
            <div style = {{position: 'relative', width: windowWidth, height: windowHeight}}>
                <Logo />
                <img src = {Background} alt = 'background' style =  {{position: 'absolute', width:windowWidth, height:windowHeight}}/>
                {!this.state.switch && <Forest />}
                <Switch handleClick = {this.handleClick} opacity = {this.state.opacity} />
                {this.state.switch && <On />}
                {!this.state.switch && <Stars /> }
                <Moon />
                {!this.state.switch && <NightTitleOff />}
                {this.state.switch && <NightTitleOn /> }
                {this.state.switch && <Building1 /> }
                {this.state.switch && <Building2 /> }
                <MenuButton
                    target1 = {this.props.target1}
                    target2 = {this.props.target2}
                    target3 = {this.props.target3}
                    target4 = {this.props.target4}
                />
            </div>
        );
    }
}


export default Top_Night;