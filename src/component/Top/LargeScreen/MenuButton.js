import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import Brightness from 'material-ui/svg-icons/image/brightness-1';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import buttonStyle from './buttonStyle';
import divStyle from './divStyle';

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
                    <Brightness style = {buttonStyle.b1} onMouseEnter = {this.handleHover1} onMouseLeave = {this.handleHover1} onClick={() => scrollToComponent(this.props.target1, { offset: 0, align: 'top', duration: 500})} />
                    <Brightness style = {buttonStyle.b2} onMouseEnter = {this.handleHover2} onMouseLeave = {this.handleHover2} onClick={() => scrollToComponent(this.props.target2, { offset: 0, align: 'top', duration: 500})} />
                    <Brightness style = {buttonStyle.b3} onMouseEnter = {this.handleHover3} onMouseLeave = {this.handleHover3} onClick={() => scrollToComponent(this.props.target3, { offset: 0, align: 'top', duration: 500})} />
                    <Brightness style = {buttonStyle.b4} onMouseEnter = {this.handleHover4} onMouseLeave = {this.handleHover4} onClick={() => scrollToComponent(this.props.target4, { offset: 0, align: 'top', duration: 500})} />
                    {this.state.hover1 && <div style = {divStyle.div1}>ABOUT</div>}
                    {this.state.hover2 && <div style = {divStyle.div2}>WORKS</div>}
                    {this.state.hover3 && <div style = {divStyle.div3}>SERVICE</div>}
                    {this.state.hover4 && <div style = {divStyle.div4}>ACCESS</div>}
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