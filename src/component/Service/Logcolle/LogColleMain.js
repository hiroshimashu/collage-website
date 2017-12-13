import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Title from '../../../static/Service.gif';
import SubTitle from  '../SubTitle';
import Logo from '../../../static/collage_logo_cut.jpg';
import Share from '../../../static/share.svg';
import WhiteIphone  from '../../../static/white-iphone.png';
import Dots_LogColle from './Dots_LogColle';
import Info from '../InteractiveMovie/Info';
import IntroLog from './IntroLog';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';


class LogColleMain extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <MuiThemeProvider>
                <div className = 'serviceMain' style={{position: 'relative', width: '100%', height:'700px', backgroundColor:'rgba(166, 215, 242, 0.4)'}}>
                    <div style = {{position: 'absolute', top: '2%', left:'30%', width: '540px', height:'110px'}}>
                        <img src = {Title} style = {{width: '540px', height:'110px'}}/>
                    </div>
                    <SubTitle
                        target3 = {this.props.target3}
                        target5 = {this.props.target5}
                        target6 = {this.props.target6}
                        target7 = {this.props.target7}
                        serviceColor1= '#CEC6C6'
                        serviceColor2= '#CEC6C6'
                        serviceColor3= '#bea0e4'
                        serviceColor4= '#CEC6C6'
                    />
                    <div style = {{position: 'absolute', top: '2%', left:'2%', width: '30px', height:'30px'}}>
                        <img src = {Logo} style = {{width: '30px', height:'30px'}}/>
                    </div>
                    <div className="share" style={{position:'absolute', width:'32px', height:'32px', top:'2%', right:'2%'}}>
                        <img src = { Share } style = {{width:'32px', height:'32px'}}/>
                    </div>
                    <div className="contentWrapper" style = {styles.contentWrapper}>
                        <Dots_LogColle
                            handleGoBack = {this.props.handleGoBack}
                            handleSwitch1 = {this.props.handleSwitch1}
                            handleSwitch2 = {this.props.handleSwitch2}
                            handleSwitch3 = {this.props.handleSwitch3}
                            handleSwitch4 = {this.props.handleSwitch4}
                            color1 = {this.props.color1}
                            color2 = {this.props.color2}
                            color3 = {this.props.color3}
                            color4 = {this.props.color4}
                            color5 = {this.props.color5}
                        />
                        <div style = {styles.imgWrapper}>
                            <img src = {WhiteIphone} alt = 'white' style = {styles.image} />
                        </div>
                        {this.props.page === 2 && <Screen2 />}
                        {this.props.page === 3 && <Screen3 />}
                        {this.props.page === 4 && <Screen4 />}
                        {this.props.page === 5 && <Screen5 />}
                        <IntroLog />
                    </div>
                    <Info />
                </div>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    contentWrapper: {
        position: 'relative',
        marginLeft: '10%',
        marginTop: '56px',
        width: '90%',
        height: '500px',
        display: 'flex'
    },
    imgWrapper: {
        position: 'absolute',
        width:'40%',
        height:'80%',
        left:'12%',
        top: '200px'
    },
    image: {
        width: '191px',
        height:'387px'
    },
    intro: {
        position: 'absolute',
        width: '40%',
        height: '100%',
        left: '52%'
    },
    play: {
        width: '51px',
        height: '51px'
    },
    google: {
        width: '170px',
        height: '64px'
    },
    app: {
        marginTop: '9px',
        width: '170px',
        height: '64px'
    }

};

export default LogColleMain;