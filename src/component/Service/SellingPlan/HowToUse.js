import React from 'react';
import ApplyingSteps from './ApplyingSteps';
import step1 from './styleStep1';
import step2 from './styleStep2';
import step3 from './styleStep3';
import sample from '../../../static/sample2.png';
import Contact from '../../../static/contract.svg';
import Operator from '../../../static/operator.svg';
import Newspaper from '../../../static/newspaper.svg';
import rightArrow from '../../../static/right-arrow.png';
import How from '../../../static/HowToUse2.png';

const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  3812 /750;
const titleWidth = windowWidth *  0.285;
const titleHeight = windowHeight *  0.009;

const sampleWidth = windowWidth *  0.443;
const sampleHeight = windowHeight *  0.007;

const sampleImageWidth = windowWidth *  0.02;
const sampleImageHeight = windowHeight *  0.007;



function calculateTitleX() {
    return (windowWidth - titleWidth) / 2;
}
const titleX =  calculateTitleX();
const titleY = 1115 / 3812 * windowHeight;
const sampleX = 186 / 750 * windowWidth
const sampleY = 1780 / 3812 * windowHeight;
const sampleImageX = 531 / 750 * windowWidth
const sampleImageY = 1780 / 3812 * windowHeight;


function HowToUse() {
    return(
        <div >
            <img className="title" style = {styles.title} src = {How} />
            <ApplyingSteps
                src = {Contact}
                imgStyle = {step1.img}
                nameStyle = {step1.name}
                childrenStyle = {step1.discription}
                stepname = 'お申し込み'
            >
                作成する企画書の概要を記載したメールを、<br/>
                info@collage-inc.jpに送信!
            </ApplyingSteps>
            <ApplyingSteps
                src = {Operator}
                imgStyle = {step2.img}
                nameStyle = {step2.name}
                childrenStyle = {step2.discription}
                stepname = 'オリエン'
            >
                企画書の内容に関して、弊社担当者にオリエンを<br/>
                お願いします。<br/>
                オリエン用に資料は不要ですが、企画書内で使用<br/>
                する素材はご用意ください。
            </ApplyingSteps>
            <ApplyingSteps
                src = {Newspaper}
                imgStyle = {step3.img}
                nameStyle = {step3.name}
                childrenStyle = {step3.discription}
                stepname = '納品'
            >
                原則24時間以内に企画書PPTデータを納品!<br/>
            </ApplyingSteps>
            <img src = {sample} className="title" style = {styles.sample} />
            <img src = {rightArrow} alt = 'arrow' style = { styles.sampleImage}/>
        </div>
    );
}

const styles = {
    title: {
        position: 'absolute',
        width: titleWidth,
        height:titleHeight,
        top:titleY,
        left: titleX,
        right: titleX,
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        textAlign: 'left',
        fontSize: '17px',
        fontWeight: 600,
        letterSpacing: '0.03em',
        transform: 'scale(1.0003)'
    },
    sample: {
        position: 'absolute',
        width: sampleWidth,
        height: sampleHeight,
        top: sampleY,
        left: sampleX,
        color: '#5f5f5f',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        textAlign: 'center',
        fontSize: '13px',
        fontWeight: 600,
        letterSpacing: '0.1em',
        transform: 'scaleY(1.0068)',
        lineHeight: '13px'
    },
    sampleImage: {
        position: 'absolute',
        width: sampleImageWidth,
        height: sampleImageHeight,
        top: sampleImageY,
        left: sampleImageX,
    }

}

export default HowToUse;