import React, { Component } from 'react';
import {  BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import ServiceTitle from './SeviceTitle';
import Share from 'material-ui/svg-icons/social/share';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ServiceSelector from './ServiceSelector';
import InteractiveScreen from '../InteractiveMovie/LargeScreen/InteractiveScreen';
import Selling from '../SellingPlan/LargeScreen/SellingPlanScreen';
import LogColle from '../Logcolle/LargeScreen/LogColleScreen';
import LineStamp from '../LineStamp/LargeScreen/LineStampScreen';

import Mail from '../../../static/mail.png';
import BackgroundParticle from './BackroundParticle';


const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const imgWidth = windowWidth * 0.025;
const imgHeight = windowHeight * 0.043;
const imgY = windowHeight * 40 / 750;

const img2Width = windowWidth * 0.27;
const img2X = 437 / 1200 * windowWidth;
const img2Y = windowHeight * 705 / 750;

const titleWidth = 503;
const selectorWidth = 548;



class ServiceScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: this.props.window.width,
            titleX: this.calculateX(this.props.window.width, titleWidth),
            shareX: this.props.window.width * 1148 /1200,
            selectorX: this.calculateX(this.props.window.width, selectorWidth),
            mailX: this.calculateX(this.props.window.width, img2Width)
        };

        this.calculateX = this.calculateX.bind(this);
    }

    componentWillReceiveProps() {
        console.log(this.props.window.width);
        this.setState(() => {
            return {
                width: this.props.window.width,
                titleX: this.calculateX(this.props.window.width, titleWidth),
                shareX: this.props.window.width * 1148 /1200,
                selectorX: this.calculateX(this.props.window.width, selectorWidth),
                mailX: this.calculateX(this.props.window.width, img2Width)
            };
        });
    }


    calculateX(window, width) {
        return (window - width) / 2;
    }

    render() {
        return(
            <Router>
                <MuiThemeProvider>
                    <div style = {{position: 'relative', width: this.state.width, height: windowHeight}}>
                        <BackgroundParticle width = {this.state.width}/>
                        <ServiceTitle titleX = {this.state.titleX}/>
                        <Share style = {{...styles.share, left: this.state.shareX}} />
                        <ServiceSelector selectorX = {this.state.selectorX} src1 = {this.props.match.url} src2 ={`${this.props.match.url}/selling`} src3 = {`${this.props.match.url}/logcolle`} src4 = {`${this.props.match.url}/line`} />
                        <Route exact path = { this.props.match.url } component = {InteractiveScreen} />
                        <Route path = {`${this.props.match.url}/selling` } component = {Selling} />
                        <Route path = {`${this.props.match.url}/logcolle`} component = {LogColle} />
                        <Route path = {`${this.props.match.url}/line`} component = {LineStamp} />
                        <img src = {Mail} alt = 'mail' style = {{...styles.mail, left: this.state.mailX, right: this.state.mailX}} />
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
        top:imgY,
        color:'#b3b3b3'
    },
    mail: {
        position: 'absolute',
        width: img2Width,
        height:'auto',
        top:img2Y,

    }
}

function mapStateToProps(state) {
    return {
        window: state.windowsize
    };
}


export default connect(mapStateToProps)(ServiceScreen);