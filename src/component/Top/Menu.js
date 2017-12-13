import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import DownArrow from '../../static/DownArrow.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <MuiThemeProvider>
                <div style = {{position: 'absolute', left:'50%', top:'90%'}}>
                    <div style = {{color:'#e9e9e9', fontSize: '28px'}}>
                        menu
                    </div>
                    <IconButton
                        iconStyle = {{width:'17px', height:'17px', color:'#e9e9e9'}}
                        onClick = {this.props.handleClose}
                    >
                        <DownArrow />
                    </IconButton>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Menu;