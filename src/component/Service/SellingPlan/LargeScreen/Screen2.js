import React, { Component } from 'react';
import Title from '../../../../static/howToUse.png';
import Contract from '../../../../static/contract.svg';
import Operator from '../../../../static/operator.svg';
import NewsPaper from '../../../../static/newspaper.svg';
import Apply from '../../../../static/applly.png';
import Orientation from '../../../../static/orientation.png';
import Complete from '../../../../static/complete.png';
import RightArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Sample from '../../../../static/sample.png';
import applyTitle from '../../../../static/applyTitle.png';
import orientationTitle from '../../../../static/orientationTitle.png';
import completeTitle from '../../../../static/completeTitle.png';
import '../../../../service.css';

const windowWidth = window.innerWidth;
const windowHeight =window.innerHeight;
const titleY = windowHeight * 227 / 750;
const contractY = windowHeight * 312 / 750;
const applyY = windowHeight * 420 / 750;
const operatorY = windowHeight * 308 / 750;
const oriY = windowHeight * 419 / 750;
const newsY = windowHeight * 311 / 750;
const completeY = windowHeight * 419 / 750;
const d1Y = windowHeight * 469 / 750;
const d2Y = windowHeight * 469 / 750;
const d3Y = windowHeight * 469 / 750;
const arrowY = windowHeight * 350 / 750;
const sampleY = windowHeight * 251 / 750;




class Screen2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titleWidth:this.props.width * 0.139,
            titleX: this.calculateX(this.props.width, this.props.width * 0.139),
            contractWidth: this.props.width * 0.068,
            contractX: 304 / 1200 *  this.props.width,
            applyWidth: this.props.width * 0.083,
            applyX: 283/ 1200 *  this.props.width,
            d1Width: this.props.width * 0.178,
            d1X: 228/ 1200 *  this.props.width,
            operatorWidth: this.props.width * 0.068,
            operatorX: 555 / 1200 *  this.props.width,
            oriWidth: this.props.width * 0.066,
            oriX: 551/ 1200 *  this.props.width,
            d2Width:this.props.width * 0.179,
            d2X: 491/ 1200 *  this.props.width,
            newsWidth:this.props.width * 0.068,
            newsX: 815 / 1200 *  this.props.width,
            completeWidth: this.props.width * 0.033,
            completeX: 840/ 1200 *  this.props.width,
            d3Width: this.props.width * 0.170,
            d3X: 763/ 1200 *  this.props.width,
            arrowWidth: this.props.width * 0.014,
            arrowX: 1134/ 1200 *  this.props.width,
            sampleWidth: this.props.width * 0.017,
            sampleX: 1100/ 1200 *  this.props.width
        };
        this.calculateX = this.calculateX.bind(this);
    }

    componentWillReceiveProps(){
        this.setState(() => {
            return {
                titleWidth:this.props.width * 0.139,
                titleX: this.calculateX(this.props.width, this.props.width * 0.139),
                contractWidth: this.props.width * 0.068,
                contractX: 304 / 1200 *  this.props.width,
                applyWidth: this.props.width * 0.083,
                applyX: 283/ 1200 *  this.props.width,
                d1Width: this.props.width * 0.178,
                d1X: 228/ 1200 *  this.props.width,
                operatorWidth: this.props.width * 0.068,
                operatorX: 555 / 1200 *  this.props.width,
                oriWidth: this.props.width * 0.066,
                oriX: 551/ 1200 *  this.props.width,
                d2Width: this.props.width * 0.179,
                d2X: 491/ 1200 *  this.props.width,
                newsWidth:this.props.width * 0.068,
                newsX: 815 / 1200 *  this.props.width,
                completeWidth: this.props.width * 0.033,
                completeX: 840/ 1200 *  this.props.width,
                d3Width: this.props.width * 0.170,
                d3X: 763/ 1200 *  this.props.width,
                arrowWidth: this.props.width * 0.014,
                arrowX: 1134/ 1200 *  this.props.width,
                sampleWidth: this.props.width * 0.017,
                sampleX: 1100/ 1200 *  this.props.width
            };
        });
    }

    calculateX(window, width) {
        return (window - width) / 2;
    }


    render() {
        return(
        <div>
            <div className="serviceScreen2Wrapper" style = {{
                position: 'absolute',
                width: 809,
                height: 361,
                top:227,
                left: 'calc(50vw - 404.5px)'
            }}>
                <img src = {Title} alt = 'title' className="serviceScreen2Title" style = {{...styles.title}}/>
                <img src = {Contract} alt ='contract' className = 'contract' style = {{...styles.contract}} />
                <img style = {{...styles.apply}} src = {applyTitle} alt = 'apply' className = 'applyTitle'/>
                <img src = {Operator} alt = 'operator' style = {{...styles.operator}} className = 'operator' />
                <img style = {{...styles.orientation}} src = {orientationTitle} alt =  'orientation' className = 'orientationTitle'/>
                <img src = {NewsPaper} alt = 'newspaper' style = {{...styles.news }} className = 'newspaper'/>
                <img src = {completeTitle} style = {{...styles.complete}} alt = 'complete' className = 'complete'/>
                <img src = {Apply} alt = 'apply' style = {{...styles.applyDiscription}} className="applyDiscription"/>
                <img src = {Orientation} alt = 'orientation' style = {{...styles.orienDiscription}} className="orientationDiscription"/>
                <img src = {Complete} alt = 'complete' style = {{...styles.completeDiscription}} className = 'completeDiscription'/>
            </div>
            <RightArrow style = {{...styles.arrow}} alt = 'arrow'  className = 'arrow'/>
            <img src = {Sample} alt = 'sample' style = {{...styles.sample}} className = 'sample'/>
        </div>

        );
    }
}

const styles = {
    title: {
        position: 'absolute',
        width: 167,
        height: 27,
        top:0,
        left:314
    },
    contract: {
        position: 'absolute',
        width: 82,
        height: 82,
        top: 85,
        left:103
    },
    apply: {
        position: 'absolute',
        width: 100,
        height:19,
        top: 193,
        left: 82
    },
    operator: {
        position: 'absolute',
        width: 84,
        height: 84,
        top: 81,
        left: 354
    },
    orientation: {
        position: 'absolute',
        width: 79,
        height:19,
        top:192,
        left: 350
    },
    news: {
        position: 'absolute',
        width:81,
        height:81,
        top:84,
        left:614
    },
    complete: {
        position: 'absolute',
        width:39,
        height:19,
        top:192,
        left: 639
    },
    applyDiscription: {
        position: 'absolute',
        width: 214,
        height: 68,
        top: 242,
        left: 27
    },
    orienDiscription: {
        position: 'absolute',
        width:215,
        height:118,
        top:242,
        left:290
    },
    completeDiscription: {
        position: 'absolute',
        width:204,
        height:40,
        top:242,
        left:562

    },
    arrow: {
        position: 'absolute',
        width: 17,
        height: 29,
        top:350,
        left:94.5 + 'vw'
    },
    sample: {
        position: 'absolute',
        width: 20,
        height: 228,
        top: 251,
        left: 91.6 + 'vw'
    }
}

export default Screen2;