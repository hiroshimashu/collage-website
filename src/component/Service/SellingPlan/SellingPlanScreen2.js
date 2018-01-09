import React, { Component } from 'react';
import ServiceTitle2 from '../ServiceTitle2';
import ServiceSelector from '../ServiceSelector';
import Menu from '../InteractiveMovie/Menu';
import Logo from '../InteractiveMovie/Logo';
import Intro1 from './Intro1';
import VoiceFromCustomer from './VoiceFromCustomer';
import styleLeft from './styleLeft';
import styleLeftMain from './styleLeftMain';
import voiceLeft from '../../../static/voiceLeft.png';
import styleRight from './styleRight';
import  styleRightMain from './styleRightMain';
import voiceRight from '../../../static/voiceRight.png';
import SellingIcon2 from './SellingIcon2';
import HowToUse from './HowToUse';
import Prices from './Prices';
import VoiceFromCustomer2 from './VoiceFromCustomer2';
import MailMain2 from './MailMain';
import MailButton from './MailButton';
import MailLogo from './MailLogo';


const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  3812 /750;


class SellingPlanScreen2 extends Component {
    render() {
        return (
            <div className="sellingWrapper" style = { styles.sellingWrapper }>
                <Logo />
                <ServiceTitle2 />
                <Intro1 />
                <VoiceFromCustomer
                    src = {voiceLeft}
                    imgStyle = {styleLeft}
                    divStyle = {styleLeftMain}
                >
                    明日までに<br/>
                    クライアントに<br/>
                    企画書を提出しないと<br/>
                    いけない!<br/>
                </VoiceFromCustomer>
                <VoiceFromCustomer
                    src = {voiceRight}
                    imgStyle = {styleRight}
                    divStyle = {styleRightMain}
                >
                    自分は手一杯だし、<br/>
                    スタッフもこの内容<br/>
                    じゃ動かしづらい...。<br/>
                </VoiceFromCustomer>
                <SellingIcon2 />
                <HowToUse />
                <Prices />
                <VoiceFromCustomer2 />
                <MailButton />
                <MailMain2 />
            </div>
        );
    }
}

const styles = {
    sellingWrapper: {
        position: 'relative',
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#fcf4f8',
    },

}

export default SellingPlanScreen2;