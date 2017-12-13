import React, { Component } from 'react';
import Tap from '../../../static/tap.svg';
import Vibration from '../../../static/smartphone.svg';
import Play from '../../../static/video-player.svg';
import { fadeIn, fadeOut, merge } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

class Screen2 extends Component {
    render() {
        return(
            <StyleRoot style={styles.fadeIn}>
            <div style = {{ position: 'absolute', top: '270px', left:'23%', width:'700px', height: '500px'}}>
                <div className="tap" style = {{ position: 'absolute', width:'217px', height:'500px'}}>
                    <img src = { Tap } alt = 'tap' style = {{ height:'117px', width: '117px'}} />
                    <div  style = {{ fontSize: '14px', marginTop: '27px', textAlign: 'left', lineHeight:'2.0' }}>
                            タップ、シェイク、音声入力など<br/>
                            スマホならではの操作に応じて、<br/>
                            流れる動画の内容がインタラクテ<br/>
                            ィブに変化！動画をリアルタイム<br/>
                            で操作しているような視聴体験を<br/>
                            味わえます。
                    </div>
                </div>
                <div className="vib" style = {{ position: 'absolute', width:'217px', height:'500px', left:'250px'}}>
                    <img src = {Vibration}  alt = 'vib' style = {{width:'117px', height:'117px'}}/>
                    <div style = {{ fontSize: '14px', marginTop: '27px', textAlign: 'left', lineHeight:'2.0' }}>
                            スマホブラウザでそのまま再生可<br/>
                            能なので、動画視聴用に専用アプ<br/>
                            リDLなどは不要!<br/>
                            WEB上のURL入力のみでアクセス<br/>
                            できるため、SNSでのシェアも<br/>
                            簡単！
                    </div>
                </div>
                <div className="play" style = {{ position: 'absolute', width:'217px', height:'500px', left:'500px'}}>
                    <img src = {Play} alt = 'play' style = {{width:'117px', height:'117px' }} />
                    <div style = {{ fontSize: '14px', marginTop: '27px', textAlign: 'left', lineHeight:'2.0' }}>
                            選んだ選択肢によって結末が変わ<br/>
                            るストーリー動画。擬似的に会話<br/>
                            している様な体験動画。動画と<br/>
                            ECの連動。 今までの「観るだけ<br/>
                            とは違った多彩な映像が検討可能<br/>
                            に！<br/>
                    </div>
                </div>
            </div>
            </StyleRoot>
        );
    }
}


const styles = {
    fadeIn: {
        animation: 'x 4s',
        animationName: Radium.keyframes(fadeIn, 'fade-in')
    },
    fadeOut: {
        animation: 'x 4s',
        animationName: Radium.keyframes(fadeOut, 'fade-out')
    }
}

export default Screen2;