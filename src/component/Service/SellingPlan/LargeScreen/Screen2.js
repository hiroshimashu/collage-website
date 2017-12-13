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
const windowHeight = 750 / 1200  * windowWidth;
const titleWidth = windowWidth * 0.139;
const titleHeight = windowHeight * 0.036;
function CalculateTitleX() {
    return (windowWidth - titleWidth) / 2;
}
const titleX = CalculateTitleX()
const titleY = windowHeight * 227 / 750;

const contractWidth = windowWidth * 0.068;
const contractX = 304 / 1200 *  windowWidth;
const contractY = windowHeight * 312 / 750;

const applyWidth = windowWidth * 0.083;
const applyHeight = windowHeight * 0.025;
const applyX = 283/ 1200 *  windowWidth;
const applyY = windowHeight * 420 / 750;

const operatorWidth = windowWidth * 0.068;
const operatorX = 555 / 1200 *  windowWidth;
const operatorY = windowHeight * 308 / 750;

const oriWidth = windowWidth * 0.066;
const oriHeight = windowHeight * 0.024;
const oriX = 551/ 1200 *  windowWidth;
const oriY = windowHeight * 419 / 750;

const newsWidth = windowWidth * 0.068;
const newsX = 815 / 1200 *  windowWidth;
const newsY = windowHeight * 311 / 750;

const completeWidth = windowWidth * 0.033;
const completeHeight = windowHeight * 0.025;
const completeX = 840/ 1200 *  windowWidth;
const completeY = windowHeight * 419 / 750;

const d1Width = windowWidth * 0.178;
const d1Height = windowHeight * 0.091;
const d1X = 228/ 1200 *  windowWidth;
const d1Y = windowHeight * 469 / 750;

const d2Width = windowWidth * 0.179;
const d2Height = windowHeight * 0.157;
const d2X = 491/ 1200 *  windowWidth;
const d2Y = windowHeight * 469 / 750;

const d3Width = windowWidth * 0.170;
const d3Height = windowHeight * 0.053;
const d3X = 763/ 1200 *  windowWidth;
const d3Y = windowHeight * 469 / 750;

const arrowWidth = windowWidth * 0.014;
const arrowHeight = windowHeight * 0.039;
const arrowX = 1134/ 1200 *  windowWidth;
const arrowY = windowHeight * 350 / 750;


const sampleWidth = windowWidth * 0.017;
const sampleHeight = windowHeight * 0.304;
const sampleX = 1100/ 1200 *  windowWidth;
const sampleY = windowHeight * 251 / 750;




class Screen2 extends Component {
    render() {
        return(
            <div>
                <img src = {Title} alt = 'title' style = {styles.title}/>
                <img src = {Contract} alt ='contract' style = {styles.contract} />
                <img style = {styles.apply} src = {applyTitle} alt = 'apply'/>
                <img src = {Operator} alt = 'operator' style = {styles.operator} />
                <img style = {styles.orientation} src = {orientationTitle} alt =  'orientation'/>
                <img src = {NewsPaper} alt = 'newspaper' style = {styles.news} />
                <img src = {completeTitle} style = {styles.complete} alt = 'complete'/>
                <img src = {Apply} alt = 'apply' style = {styles.applyDiscription}/>
                <img src = {Orientation} alt = 'orientaion' style = {styles.orienDiscription}/>
                <img src = {Complete} alt = 'complete' style = {styles.completeDiscription}/>
                <RightArrow style = {styles.arrow} alt = 'arrow' />
                <img src = {Sample} alt = 'sample' style = {styles.sample} />
            </div>
        );
    }
}

const styles = {
    title: {
        position: 'absolute',
        width: titleWidth,
        height: titleHeight,
        top: titleY,
        left: titleX,
        right: titleX
    },
    contract: {
        position: 'absolute',
        width: contractWidth,
        height: contractWidth,
        top: contractY,
        left: contractX
    },
    apply: {
        position: 'absolute',
        width: applyWidth,
        height: applyHeight,
        top: applyY,
        left: applyX,
        fontSize: '19.5px',
        lineHeight: '19.98px',
        textAlign:'left',
        letterSpacing: '0.1em',
        transform:'scaleY(1.0007)'
    },
    operator: {
        position: 'absolute',
        width: operatorWidth,
        height: operatorWidth,
        top: operatorY,
        left: operatorX
    },
    orientation: {
        position: 'absolute',
        width: oriWidth,
        height: oriHeight,
        top: oriY,
        left: oriX,
        fontSize: '19.98px',
        lineHeight: '19.98px',
        textAlign:'center',
        letterSpacing: '0.10em',
        transform:'scaleY(1.0007)'
    },
    news: {
        position: 'absolute',
        width: newsWidth,
        height: newsWidth,
        top: newsY,
        left: newsX
    },
    complete: {
        position: 'absolute',
        width: completeWidth,
        height: completeHeight,
        top: completeY,
        left: completeX,
        fontSize: '19.98px',
        lineHeight: '19.98px',
        textAlign:'left',
        letterSpacing: '0.10em',
        transform:'scaleY(1.0007)'
    },
    applyDiscription: {
        position: 'absolute',
        width: d1Width,
        height: d1Height,
        top: d1Y,
        left: d1X
    },
    orienDiscription: {
        position: 'absolute',
        width: d2Width,
        height: d2Height,
        top: d2Y,
        left: d2X
    },
    completeDiscription: {
        position: 'absolute',
        width: d3Width,
        height: d3Height,
        top: d3Y,
        left: d3X
    },
    arrow: {
        position: 'absolute',
        width: arrowWidth,
        height: arrowHeight,
        top: arrowY,
        left: arrowX
    },
    sample: {
        position: 'absolute',
        width: sampleWidth,
        height: sampleHeight,
        top: sampleY,
        left: sampleX
    }
}

export default Screen2;