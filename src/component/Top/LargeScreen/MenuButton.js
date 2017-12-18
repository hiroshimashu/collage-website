import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import { Link } from 'react-router-dom';
import Brightness from 'material-ui/svg-icons/image/brightness-1';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import buttonStyle from './buttonStyle';
import divStyle from './divStyle';
import AccessMenu from'../../../static/accessMenu.png';
import AboutMenu from '../../../static/abouMenu.png';
import ServiceMenu from '../../../static/serviceMenu.png';
import WorksMenu from '../../../static/worksMenu.png';

class MenuButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hover1: false,
            hover2: false,
            hover3: false,
            hover4: false
        };

        this.handleHover1 = this.handleHover1.bind(this);
        this.handleHover2 = this.handleHover2.bind(this);
        this.handleHover3 = this.handleHover3.bind(this);
        this.handleHover4 = this.handleHover4.bind(this);

    }

    handleHover1() {
        this.setState((prevState) => {
            return {hover1: !prevState.hover1};
        });
    }

    handleHover2() {
        this.setState((prevState) => {
            return {hover2: !prevState.hover2};
        });
    }


    handleHover3() {
        this.setState((prevState) => {
            return {hover3: !prevState.hover3};
        });
    }


    handleHover4() {
        this.setState((prevState) => {
            return {hover4: !prevState.hover4};
        });
    }




    render() {
        return(
            <MuiThemeProvider>
                <div>
                    <Link to = 'about'><Brightness style = {buttonStyle.b1} onMouseEnter = {this.handleHover1} onMouseLeave = {this.handleHover1} /></Link>
                    <Link to = 'works'><Brightness style = {buttonStyle.b2} onMouseEnter = {this.handleHover2} onMouseLeave = {this.handleHover2} /></Link>
                    <Link to = 'service'><Brightness style = {buttonStyle.b3} onMouseEnter = {this.handleHover3} onMouseLeave = {this.handleHover3} /></Link>
                    <Link to = 'access'> <Brightness style = {buttonStyle.b4} onMouseEnter = {this.handleHover4} onMouseLeave = {this.handleHover4} /></Link>
                    {this.state.hover1 && <img src =  {AboutMenu} style = {divStyle.div1} />}
                    {this.state.hover2 && <img src =  {WorksMenu} style = {divStyle.div2} />}
                    {this.state.hover3 && <img src =  {ServiceMenu} style = {divStyle.div3} />}
                    {this.state.hover4 && <img src =  {AccessMenu}  style = {divStyle.div4} />}
                </div>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    div1: {

    }
}


export default MenuButton;