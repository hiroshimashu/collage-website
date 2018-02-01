import React, { Component } from 'react';
import {  BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import ServiceTitle from './SeviceTitle';
import SNS from './SNS';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ServiceSelector from './ServiceSelector';
import InteractiveScreen from '../InteractiveMovie/LargeScreen/InteractiveScreen';
import Selling from '../SellingPlan/LargeScreen/SellingPlanScreen';
import LogColle from '../Logcolle/LargeScreen/LogColleScreen';
import LineStamp from '../LineStamp/LargeScreen/LineStampScreen';
import Mail from '../../../static/mail.png';
import BackgroundParticle from './BackroundParticle';
import '../../../service.css';


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
                    <div className = 'serviceScreenWrapper' style = {{position: 'relative', width: 100 + 'vw', height: 100 + 'vh'}}>
                        <BackgroundParticle />
                        <SNS />
                        <ServiceTitle titleX = {this.state.titleX} />
                        <ServiceSelector selectorX = {this.state.selectorX} src1 = {this.props.match.url} src2 ={`${this.props.match.url}/selling`} src3 = {`${this.props.match.url}/logcolle`} src4 = {`${this.props.match.url}/line`} />
                        <Route exact path = { this.props.match.url } component = {InteractiveScreen} />
                        <Route path = {`${this.props.match.url}/selling` } component = {Selling} />
                        <Route path = {`${this.props.match.url}/logcolle`} component = {LogColle} />
                        <Route path = {`${this.props.match.url}/line`} component = {LineStamp} />
                        <img src = {Mail} alt = 'mail' className = 'mail' style = {styles.mail} />
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
        width: 324,
        height:28,
        top: 91.86 + 'vh',
        left:'calc(50vw - 162px)',
    }
}

function mapStateToProps(state) {
    return {
        window: state.windowsize
    };
}


export default connect(mapStateToProps)(ServiceScreen);