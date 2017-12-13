import React from 'react';
import Link from '../../../static/link.png';
import messageLeft from '../../../static/messageLeft.png';
import messageLeft2 from '../../../static/messageLeft2.png';
import messageRight from '../../../static/messageRight.png';
import messageRight2 from '../../../static/messageRight2.png';
import Woman from '../../../static/woman.svg';
import Man from '../../../static/man.svg';

const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  3812 /750;

const titleWidth = windowWidth *  0.337;
const titleHeight = windowHeight *  0.009;
function calculateWrapperX() {
    return( windowWidth - titleWidth) / 2;
}
const titleX = calculateWrapperX();
const titleY = 2746 / 3812 * windowHeight;

const imgWidth = windowWidth *  0.024;
const imgHeight = windowHeight *  0.006;
const imgX = 149 / 750 * windowWidth;
const imgY = 2797 / 3812 * windowHeight;

const urlWidth = windowWidth *  0.524;
const urlHeight = windowHeight *  0.006;
const urlX = 174 / 750 * windowWidth;
const urlY = 2797 / 3812 * windowHeight;

const leftWidth = windowWidth *  0.471;
const leftHeight = windowHeight *  0.093;
const leftX = 63 / 750 * windowWidth;
const leftY = 2854 / 3812 * windowHeight;

const left2Width = windowWidth *  0.121;
const left2Height = windowHeight *  0.013;
const left2X = 379 / 750 * windowWidth;
const left2Y = 3035 / 3812 * windowHeight;

const rightWidth = windowWidth *  0.471;
const rightHeight = windowHeight *  0.093;
const rightX = 345 / 750 * windowWidth;
const rightY = 3185 / 3812 * windowHeight;

const right2Width = windowWidth *  0.121;
const right2Height = windowHeight *  0.013;
const right2X = 288 / 750 * windowWidth;
const right2Y = 3363 / 3812 * windowHeight;

const leftMainWidth = windowWidth * 0.331;
const leftMainHeight = windowHeight *  0.055;
const leftMainX = 127 / 750 * windowWidth;
const leftMainY = 2927 / 3812 * windowHeight;

const rightMainWidth = windowWidth * 0.331;
const rightMainHeight = windowHeight *  0.063;
const rightMainX = 410 / 750 * windowWidth;
const rightMainY = 3241 / 3812 * windowHeight;

const womanWidth = windowWidth * 0.139;
const womanHeight = windowHeight *  0.038;
const womanX = 491 / 750 * windowWidth;
const womanY = 2914 / 3812 * windowHeight;

const manWidth = windowWidth * 0.139;
const manHeight = windowHeight *  0.038;
const manX = 156 / 750 * windowWidth;
const manY = 3272 / 3812 * windowHeight;

const who1Width = windowWidth * 0.193;
const who1Height = windowHeight *  0.013;
const who1X = 471 / 750 * windowWidth;
const who1Y = 3050 / 3812 * windowHeight;

const who2Width = windowWidth * 0.193;
const who2Height = windowHeight *  0.013;
const who2X = 136 / 750 * windowWidth;
const who2Y = 3410 / 3812 * windowHeight;










function VoiceFromCustomer2() {
    return(
        <div className="voiceWrapper2">
            <div style = {styles.voiceTitle}>
                ユーザーの感想
            </div>
            <img src = { Link } style = { styles.link }/>
            <a href = 'http://www/collage-inc.jp/proposal.html' style = { styles.url}>
                http://www/collage-inc.jp/proposal.html
            </a>
            <img src = {messageLeft} style = {styles.left} />
            <img src = {messageLeft2} style = {styles.left2} />
            <img src = {messageRight} style = {styles.right} />
            <img src = {messageRight2} style = {styles.right2} />
            <div style = { styles.leftMain }>
                とにかく早い！正確！<br/>
                仕上げてほしい企画書の内容<br/>
                イメージをこちら側がきちんと持<br/>
                ち、それをきちんと摺合せればブ<br/>
                レのない企画書があがる！<br/>
                こちらのやりたいことに対する<br/>
                プラスアルファのアイディアも<br/>
                いただける！<br/>
            </div>
            <div style = { styles.rightMain }>
                非常に助かります。<br/>
                依頼するのに時間がかかり、<br/>
                挙句、的外れなやっつけ企画書が<br/>
                世の中に横行しています。<br/>
                クライアントにセールスしたい<br/>
                ことはシンプルなので、それを<br/>
                まとめて理解しやすくビジュア<br/>
                ライズしてくれるので、とても<br/>
                重宝しています。
            </div>
            <img src = { Woman } alt = 'woman' style = { styles.woman }/>
            <img src = { Man } alt = 'man' style = { styles.man }/>
            <div style = {styles.who1}>
                大手広告会社<br/>
                営業担当(30代）
            </div>
            <div style = {styles.who2}>
                大手広告会社<br/>
                営業担当(40代)
            </div>
        </div>
    );
}

const styles = {
    voiceTitle: {
        position: 'absolute',
        width: titleWidth,
        height: titleHeight,
        top: titleY,
        left: titleX,
        right: titleX,
        fontSize: '17px',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        fontWeight: 600
    },
    link: {
        position: 'absolute',
        width: imgWidth,
        height: imgHeight,
        top: imgY,
        left: imgX
    },
    url: {
        position: 'absolute',
        width: urlWidth,
        height: urlHeight,
        top: urlY,
        left: urlX,
        textDecoration: 'underline',
        transform: 'scaleX(1.024)',
        textAlign: 'center',
        fontSize: '9px',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        color: '#000000',
        letterSpacing: '0.05em',
        lineHeight: '11px'
    },
    left : {
        position: 'absolute',
        width: leftWidth,
        height: leftHeight,
        top: leftY,
        left: leftX,
    },
    left2 : {
        position: 'absolute',
        width: left2Width,
        height: left2Height,
        top: left2Y,
        left: left2X,
    },
    right: {
        position: 'absolute',
        width: rightWidth,
        height: rightHeight,
        top: rightY,
        left: rightX,
    },
    right2: {
        position: 'absolute',
        width: right2Width,
        height: right2Height,
        top: right2Y,
        left: right2X,
    },
    leftMain: {
        position: 'absolute',
        width: leftMainWidth,
        height: leftMainHeight,
        top: leftMainY,
        left: leftMainX,
        fontSize: '7px',
        lineHeight: '14px',
        fontFamily: 'dnp-shuei-mgothic-std',
        color: '#ffffff',
        letterSpacing: '0.1em'
    },
    rightMain: {
        position: 'absolute',
        width: rightMainWidth,
        height: rightMainHeight,
        top: rightMainY,
        left: rightMainX,
        fontSize: '7px',
        lineHeight: '14px',
        fontFamily: 'dnp-shuei-mgothic-std',
        color: '#ffffff',
        letterSpacing: '0.1em'
    },
    woman: {
        position: 'absolute',
        width: womanWidth,
        height: womanHeight,
        top: womanY,
        left: womanX,
    },
    man: {
        position: 'absolute',
        width: manWidth,
        height: manHeight,
        top: manY,
        left: manX,
    },
    who1: {
        position: 'absolute',
        width: who1Width,
        height: who1Height,
        top: who1Y,
        left: who1X,
        textAlign: 'center',
        fontFamily: 'dnp-shuei-mgothic-std',
        fontSize: '8px',

    },
    who2: {
        position: 'absolute',
        width: who2Width,
        height: who2Height,
        top: who2Y,
        left: who2X,
        textAlign: 'center',
        fontFamily: 'dnp-shuei-mgothic-std',
        fontSize: '8px'
    }



}

export default VoiceFromCustomer2;