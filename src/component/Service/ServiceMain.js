import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Logo from '../../static/collage_logo_cut.jpg';

import SubTitle from  './SubTitle';
import Dots from './Dots';

import Share from '../../static/share.svg';
import Iphone from './InteractiveMovie/Iphone';
import Message from './InteractiveMovie/Message';
import Info from './InteractiveMovie/Info';
import Screen2 from './InteractiveMovie/Screen2';
import Title from '../../static/Service.gif';


class ServiceMain extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <MuiThemeProvider>
                <div className = 'serviceMain' style={{position: 'relative', width: '100%', height:'700px', marginTop:'3%', backgroundColor:'rgba(255,247,204, 0.3)'}}>
                    <div style = {{position: 'absolute', top: '2%', left:'2%', width: '30px', height:'30px'}}>
                        <img src = {Logo} style = {{width: '30px', height:'30px'}}/>
                    </div>
                    <div style = {{position: 'absolute', top: '2%', left:'30%', width: '540px', height:'110px'}}>
                        <img src = {Title} style = {{width: '540px', height:'110px'}}/>
                    </div>
                    <SubTitle
                        target3 = {this.props.target3}
                        target5 = {this.props.target5}
                        target6 = {this.props.target6}
                        target7 = {this.props.target7}
                        serviceColor1 = {this.props.serviceColor1}
                        serviceColor2 = {this.props.serviceColor2}
                        serviceColor3 = {this.props.serviceColor3}
                        serviceColor4 = {this.props.serviceColor4}
                        handleServiceColor1 = {this.props.handleServiceColor1}
                        handleServiceColor2 = {this.props.handleServiceColor2}
                        handleServiceColor3 = {this.props.handleServiceColor3}
                        handleServiceColor4 = {this.props.handleServiceColor4}
                    />
                    <div style ={{position:'absolute',fontSize:'28px', width: '400px', height:'50px', left: '35%', top:'200px'}}>
                        インタラクティブ動画の特徴
                    </div>
                    <div className="share" style={{position:'absolute', width:'32px', height:'32px', top:'2%', right:'2%'}}>
                        <img src = { Share } style = {{width:'32px', height:'32px'}}/>
                    </div>
                    <Dots handleGoBack = {this.props.handleGoBack} handleSwitch = {this.props.handleSwitch} color1 = {this.props.color1} color2 = {this.props.color2}/>
                    <div className="contents" style = {{ position: 'absolute', width:'100%', height:'400px', marginTop:'150px', filter: `${this.props.blur}`}}>
                        <Iphone />
                        <Message />
                    </div>
                    {this.props.page === 2 && <Screen2 />}
                    <Info />
                </div>
            </MuiThemeProvider>
        );
    }
}



export default ServiceMain;