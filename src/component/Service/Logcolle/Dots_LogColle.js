import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Brightness from 'material-ui/svg-icons/image/brightness-1';


class Dots_LogColle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className = 'dotsWrapper' style = {{ position:'absolute', width:'2%', height:'5%', left:'20%', top:'55%', zIndex:100 }}>
                <IconButton
                    onClick={ this.props.handleGoBack }
                    iconStyle = {{width:'7px', height:'7px', color:`${this.props.color1}`}}
                    style = {{width:'24px', height: '24px'}}
                >
                    <Brightness />
                </IconButton>
                <IconButton
                    onClick={ this.props.handleSwitch1 }
                    iconStyle = {{width:'7px', height:'7px', color:`${this.props.color2}`}}
                    style = {{width:'24px', height: '24px'}}
                >
                    <Brightness />
                </IconButton>
                <IconButton
                    onClick={ this.props.handleSwitch2 }
                    iconStyle = {{width:'7px', height:'7px', color:`${this.props.color3}`}}
                    style = {{width:'24px', height: '24px'}}
                >
                    <Brightness />
                </IconButton>
                <IconButton
                    onClick={ this.props.handleSwitch3 }
                    iconStyle = {{width:'7px', height:'7px', color:`${this.props.color4}`}}
                    style = {{width:'24px', height: '24px'}}
                >
                    <Brightness />
                </IconButton>
                <IconButton
                    onClick={ this.props.handleSwitch4 }
                    iconStyle = {{width:'7px', height:'7px', color:`${this.props.color5}`}}
                    style = {{width:'24px', height: '24px'}}
                >
                    <Brightness />
                </IconButton>
            </div>
        );
    }
}

export default Dots_LogColle;
