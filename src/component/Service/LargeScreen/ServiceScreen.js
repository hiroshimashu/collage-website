import React, { Component } from 'react';
import Logo from './Logo';
import {  BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ServiceTitle from './SeviceTitle';
import Share from 'material-ui/svg-icons/social/share';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ServiceSelector from './ServiceSelector';
import InteractiveScreen from '../InteractiveMovie/LargeScreen/InteractiveScreen';
import SellingPlanScreen from '../SellingPlan/LargeScreen/SellingPlanScreen';
import LogcolleSceen from '../Logcolle/LargeScreen/LogColleScreen';
import LineStamp from '../LineStamp/LargeScreen/LineStampScreen';
import Mail from '../../../static/mail.png';

const windowWidth = window.innerWidth;
const windowHeight = 750 / 1200  * windowWidth;
const imgWidth = windowWidth * 0.025;
const imgHeight = windowHeight * 0.043;
const imgX = 1148 / 1200 * windowWidth;
const imgY = windowHeight * 20 / 750;

const img2Width = windowWidth * 0.27;
const img2Height = windowHeight * 0.037;
const img2X = 437 / 1200 * windowWidth;
const img2Y = windowHeight * 689 / 750;




class ServiceScreen extends Component {
    render() {
        return(
            <Router>
                <MuiThemeProvider>
                    <div style = {{position: 'relative', width: windowWidth, height:windowHeight, backgroundColor: '#f7f7ed'}}>
                        <ServiceTitle />
                        <Share style = {styles.share} />
                        <ServiceSelector />
                        <Route exact path="/"  component = {InteractiveScreen}/>
                        <Route exact path="/selling"  component = {SellingPlanScreen}/>
                        <Route exact path="/logcolle"  component = {LogcolleSceen}/>
                        <Route exact path="/lineStamp"  component = {LineStamp}/>
                        <img src = {Mail} alt = 'mail' style = {styles.mail}/>
                    </div>
                </MuiThemeProvider>
            </Router>
        );
    }
}

const styles = {
    share: {
        position: 'absolute',
        width: imgWidth,
        height:imgHeight,
        left:imgX,
        right:imgX,
        top:imgY,
        color:'#b3b3b3'
    },
    mail: {
        position: 'absolute',
        width: img2Width,
        height:img2Height,
        left:img2X,
        right:img2X,
        top:img2Y,
    }
}


export default ServiceScreen;