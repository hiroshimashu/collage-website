import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../../index.css';
import ServiceTitle2 from '../ServiceTitle2';
import ServiceSelector from '../ServiceSelector';
import Introduce from './Introduce';
import Introduce2 from './Introduce2';
import Iphone2 from './Iphone2';
import Menu from './Menu';
import Logo from './Logo';
import InteractiveMainTitle2 from './InteractiveMainTitle2';
import InteractiveMain from './InteractiveMain';
import MailButton from './MailButton';
import MailLogo from './MailLogo';
import MailMain from './MailMain';
import Tap from '../../../static/finger-touching.png';
import Style1 from './style1';
import Smartphone from '../../../static/smartphone.png';
import Style2 from './style2';
import Play from '../../../static/video-player.png';
import Style3 from './style3';
const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  1974 /750;

const Fade = ({ children, ...props }) => (
    <CSSTransition
        {...props}
        timeout={1000}
        classNames="fade"
    >
        {children}
    </CSSTransition>
);



class InteractiveMovieScreen2 extends Component {
    constructor(props){
        super(props);

        this.state = { show: false };

        setTimeout(() => {
            this.setState({show: !this.state.show});
        }, 0);
    }

    render() {
        return (
            <Fade in = { this.state.show}>
            <div style =  {styles.interactiveWrapper}>
                <Logo />
                <ServiceTitle2 />
                <Introduce />
                <Introduce2 />
                <Iphone2 />
                <InteractiveMainTitle2 />
                <InteractiveMain
                    src = {Tap}
                    imgStyle= {Style1.imgStyle}
                    exStyle = {Style1.exStyle}
                >
                    タップ、シェイク、音声入力などスマホならで<br/>
                    はの操作に応じて、流れる動画の内容がインタ<br/>
                    ラクティブに変化！動画をリアルタイムで操作<br/>
                    しているような視聴体験を味わえます。<br/>

                </InteractiveMain>
                <InteractiveMain
                    src = {Smartphone}
                    imgStyle= {Style2.imgStyle}
                    exStyle = {Style2.exStyle}
                >
                スマホブラウザでそのまま再生可能なので、<br/>
                動画視聴用に専用アプリのDLなどは不要！<br/>
                WEB上のURL入力のみでアクセスできるため、<br/>
                SNSでのシェアも簡単！<br/>
                </InteractiveMain>
                <InteractiveMain
                    src = {Play}
                    imgStyle= {Style3.imgStyle}
                    exStyle = {Style3.exStyle}
                >
                    選んだ選択肢によって結末が変わるストーリー<br/>
                    動画。擬似的に会話している様な体験動画。<br/>
                    動画とECの連動。 今までの「観るだけとは違<br/>
                    った多彩な映像が検討可能に！<br/>
                </InteractiveMain>
                <MailButton />
                <MailLogo />
                <MailMain />
            </div>
            </Fade>
        );
    }
}

const styles = {
    interactiveWrapper:  {
        position: 'relative',
        width: '100%',
        height: windowHeight,
        backgroundColor: '#f7f7ed'
    }
}

export default InteractiveMovieScreen2;