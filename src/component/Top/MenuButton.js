import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Brightness from 'material-ui/svg-icons/image/brightness-1';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import scrollToComponent from 'react-scroll-to-component';

class MenuButton extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <MuiThemeProvider>
                <div style = {{position: 'absolute', left:'45%', top:'90%', display: 'flex'}}>
                    <IconButton
                        iconStyle = {{width:'15px', height:'15px',color:'#e9e9e9'}}
                        tooltip="about"
                        tooltipPosition="top-center"
                        onClick={() => {
                            console.log('route is fired');
                            return(scrollToComponent(this.props.target1, { offset: 0, align: 'top', duration: 500}));
                        }}
                    >
                        <Brightness />
                    </IconButton>
                    <IconButton
                        iconStyle = {{width:'15px', height:'15px',color:'#e9e9e9'}}
                        tooltip="works"
                        tooltipPosition="top-center"
                        onClick={() => {
                            console.log('route is fired');
                            return(scrollToComponent(this.props.target2, { offset: 0, align: 'top', duration: 500}));
                        }}
                    >
                        <Brightness />
                    </IconButton>
                    <IconButton
                        iconStyle = {{width:'15px', height:'15px',color:'#e9e9e9'}}
                        tooltip="service"
                        tooltipPosition="top-center"
                        onClick={() => {
                            console.log('route is fired');
                            console.log(this.props.target);
                            return(scrollToComponent(this.props.target3, { offset: 0, align: 'top', duration: 500}));
                        }}
                    >
                        <Brightness />
                    </IconButton>
                    <IconButton
                        iconStyle = {{width:'15px', height:'15px',color:'#e9e9e9'}}
                        tooltip="access"
                        tooltipPosition="top-center"
                        onClick={() => {
                            console.log('route is fired');
                            console.log(this.props.target);
                            return(scrollToComponent(this.props.target4, { offset: 0, align: 'top', duration: 500}));
                        }}
                    >
                        <Brightness />
                    </IconButton>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default MenuButton;