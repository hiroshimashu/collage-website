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
import Satoshi2 from '../../../static/satoshi2.png';
import SatoshiD from '../../../static/satoshiD2.png';
import Yuya2 from '../../../static/yuya2.png';
import YuyaD from '../../../static/yuyaD2.png';
import Miki2 from '../../../static/miki2.png';
import MikiD from '../../../static/mikiD2.png';
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
                    src2 = { Satoshi2 }
                    src3 = { SatoshiD }
                    imgStyle = {styleStamp1.img}
                    wrapper = {styleStamp1.wrapper}
                    name = 'サトシくん'
                    nameStyle = {styleStamp1.nameStyle}
                    childStyle = {styleStamp1.childStyle}
                />

                <Stamp
                    src = { Yuya }
                    src2 = { Yuya2}
                    src3 = { YuyaD }
                    imgStyle = {styleStamp2.img}
                    wrapper = {styleStamp2.wrapper}
                    name = 'ユウヤさん'
                    nameStyle = {styleStamp2.nameStyle}
                    childStyle = {styleStamp2.childStyle}
                />
                <Stamp
                    src = { Miki }
                    src2 = { Miki2 }
                    src3 = { MikiD }
                    imgStyle = {styleStamp3.img}
                    wrapper = {styleStamp3.wrapper}
                    name = 'ミキちゃん'
                    nameStyle = {styleStamp3.nameStyle}
                    childStyle = {styleStamp3.childStyle}
                />
                <LineButton />
                <MailButton />
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