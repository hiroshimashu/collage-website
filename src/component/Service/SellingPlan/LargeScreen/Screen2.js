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
                <img src = {Title} alt = 'title' style = {{...styles.title, width: this.state.titleWidth, left: this.state.titleX, right: this.state.titleX}}/>
                <img src = {Contract} alt ='contract' style = {{...styles.contract, width: this.state.contractWidth, height: this.state.contractWidth, left: this.state.contractX}} />
                <img style = {{...styles.apply, left: this.state.applyX, width: this.state.applyWidth}} src = {applyTitle} alt = 'apply'/>
                <img src = {Operator} alt = 'operator' style = {{...styles.operator, width: this.state.operatorWidth, left: this.state.operatorX, height: this.state.operatorWidth }} />
                <img style = {{...styles.orientation, left: this.state.oriX, width: this.state.oriWidth}} src = {orientationTitle} alt =  'orientation' />
                <img src = {NewsPaper} alt = 'newspaper' style = {{...styles.news, width: this.state.newsWidth, height: this.state.newsWidth, left: this.state.newsX }} />
                <img src = {completeTitle} style = {{...styles.complete, width: this.state.completeWidth, left: this.state.completeX}} alt = 'complete'/>
                <img src = {Apply} alt = 'apply' style = {{...styles.applyDiscription , width: this.state.d1Width, left: this.state.d1X}}/>
                <img src = {Orientation} alt = 'orientation' style = {{...styles.orienDiscription, width: this.state.d2Width, left: this.state.d2X }}/>
                <img src = {Complete} alt = 'complete' style = {{...styles.completeDiscription, width: this.state.d3Width, left: this.state.d3X }} />
                <RightArrow style = {{...styles.arrow, left: this.state.arrowX, width: this.state.arrowWidth}} alt = 'arrow' />
                <img src = {Sample} alt = 'sample' style = {{...styles.sample, width: this.state.sampleWidth, left:this.state.sampleX}} />
            </div>
        );
    }
}

const styles = {
    title: {
        position: 'absolute',
        height: 'auto',
        top: titleY
    },
    contract: {
        position: 'absolute',
        top: contractY
    },
    apply: {
        position: 'absolute',
        height: 'auto',
        top: applyY
    },
    operator: {
        position: 'absolute',
        top: operatorY
    },
    orientation: {
        position: 'absolute',
        height: 'auto',
        top: oriY
    },
    news: {
        position: 'absolute',
        top: newsY
    },
    complete: {
        position: 'absolute',
        height: 'auto',
        top: completeY
    },
    applyDiscription: {
        position: 'absolute',
        height: 'auto',
        top: d1Y
    },
    orienDiscription: {
        position: 'absolute',
        height: 'auto',
        top: d2Y
    },
    completeDiscription: {
        position: 'absolute',
        height: 'auto',
        top: d3Y
    },
    arrow: {
        position: 'absolute',
        height: 'auto',
        top: arrowY
    },
    sample: {
        position: 'absolute',
        height: 'auto',
        top: sampleY
    }
}

export default Screen2;