import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Brightness from 'material-ui/svg-icons/image/brightness-1';


class Dots_Selling extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className = 'dotsWrapper' style = {{ position:'absolute', width:'2%', height:'5%', left:'10px', top:'30%', zIndex:100 }}>
                <IconButton
                    onClick={ this.props.handleGoBack }
                    iconStyle = {{width:'15px', height:'15px', color:`${this.props.color1}`}}
                >
                    <Brightness />
                </IconButton>
                <IconButton
                    onClick={ this.props.handleSwitch1 }
                    iconStyle = {{width:'15px', height:'15px', color:`${this.props.color2}`}}
                >
                    <Brightness />
                </IconButton>
                <IconButton
                    onClick={ this.props.handleSwitch2 }
                    iconStyle = {{width:'15px', height:'15px', color:`${this.props.color3}`}}
                >
                    <Brightness />
                </IconButton>
                <IconButton
                    onClick={ this.props.handleSwitch3 }
                    iconStyle = {{width:'15px', height:'15px', color:`${this.props.color4}`}}
                >
                    <Brightness />
                </IconButton>
            </div>
        );
    }
}

export default Dots_Selling;
