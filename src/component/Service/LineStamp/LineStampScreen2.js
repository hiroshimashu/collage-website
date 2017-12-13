import React, { Component } from 'react';
import ServiceTitle2 from '../ServiceTitle2';
import ServiceSelector from '../ServiceSelector';
import Menu from '../InteractiveMovie/Menu';
import Logo from '../InteractiveMovie/Logo';
import Stamp from './Stamp';
import LineButton from './LineButton';
import styleStamp1 from './styleStamp1';
import styleStamp2 from './styleStamp2';
import styleStamp3 from './styleStamp3';
import Satoshi from '../../../static/satoshi.png';
import Yuya from '../../../static/yuuya.png';
import Miki from '../../../static/miki.png';
import MailButton from './MailButton';
import MailLogo from './MailLogo';
import MailMain from './MailMain';

const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  1334 /750;


class LineStampScreen2 extends Component {
    render() {
        return (
            <div className="lineStampWrapper" style={ styles.lineStampWrapper }>
                <Logo />
                <ServiceTitle2 />
                <Stamp
                    src = { Satoshi }
                    imgStyle = {styleStamp1.img}
                    wrapper = {styleStamp1.wrapper}
                    name = 'サトシくん'
                    nameStyle = {styleStamp1.nameStyle}
                    childStyle = {styleStamp1.childStyle}
                >
                    年齢：33歳　独身<br/>
                    職種：営業<br/>
                    趣味：ゴルフ、コンパ<br/>
                    性格：お調子者でチャラい<br/>
                </Stamp>
                <Stamp
                    src = { Yuya }
                    imgStyle = {styleStamp2.img}
                    wrapper = {styleStamp2.wrapper}
                    name = 'ユウヤさん'
                    nameStyle = {styleStamp2.nameStyle}
                    childStyle = {styleStamp2.childStyle}
                >
                    年齢：39歳　既婚（娘1人）<br/>
                    職種：クリエイティブディレクター<br/>
                    趣味：サッカー観戦、夏フェス、<br/>
                         ジム<br/>
                    性格：クールでスカしている<br/>
                </Stamp>
                <Stamp
                    src = { Miki }
                    imgStyle = {styleStamp3.img}
                    wrapper = {styleStamp3.wrapper}
                    name = 'ミキちゃん'
                    nameStyle = {styleStamp3.nameStyle}
                    childStyle = {styleStamp3.childStyle}
                >
                    年齢：28歳　独身<br/>
                    職種：営業<br/>
                    趣味：ショッピング、ジョギング、<br/>
                       カフェ巡り<br/>
                    性格：小悪魔
                </Stamp>
                <LineButton />
                <MailButton />
                <MailLogo />
                <MailMain />
            </div>
        );
    }
}

const styles = {
    lineStampWrapper: {
        position: 'relative',
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#edfaf0'
    }
};

export default LineStampScreen2;