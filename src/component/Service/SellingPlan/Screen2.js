import React, { Component } from 'react';
import Apply from '../../../static/contract.svg';
import Orientation from '../../../static/operator.svg';
import Delivered from '../../../static/newspaper.svg';
import Arrow from '../../../static/right-arrow.svg';

class Screen2 extends Component {
    render() {
        return(
            <div style = {{ position: 'absolute', top: '20%', left:'20%', width:'60%', height: '60%'}}>
                <div style = {{ fontSize: '2.0em'}}>
                    ご利用の流れ
                </div>　
                <div style = {{ position: 'absolute', width:'30px', height:'20%', left:'120%',display:'flex'}}>
                    <div>
                        企画書サンプルはこちら
                    </div>
                    <img src = {Arrow} alt="rightArrow"  style = {{ width: '37px', height:'33px', marginTop:'250%'}}/>
                </div>
                <div style = {{ display: 'flex', width: '100%', height: '80%', marginTop: '5%'}}>
                    <div className="tap" style = {{ position: 'absolute', width:'33%', height:'90%'}}>
                        <img src = { Apply } alt = 'tap' style = {{width:'80%', height:'35%' }} />
                        <div  style = {{ fontSize: '0.8em', marginTop: '15%', textAlign: 'left', marginLeft:'5%', lineHeight:'2.3' }}>
                            タップ、シェイク、音声入力など<br/>
                            スマホならではの操作に応じて、<br/>
                            流れる動画の内容がインタラクテ<br/>
                            ィブに変化！動画をリアルタイム<br/>
                            で操作しているような視聴体験を<br/>
                            味わえます。
                        </div>
                    </div>
                    <div className="vib" style = {{ position: 'absolute', width:'33%', height:'90%', left:'33%'}}>
                        <img src = {Orientation}  alt = 'vib' style = {{width:'80%', height:'35%' }}/>
                        <div style = {{ fontSize: '0.8em', marginTop: '15%', textAlign: 'left', marginLeft:'5%', lineHeight:'2.3' }}>
                            スマホブラウザでそのまま再生可<br/>
                            能なので、動画視聴用に専用アプ<br/>
                            リDLなどは不要!<br/>
                            WEB上のURL入力のみでアクセス<br/>
                            できるため、SNSでのシェアも<br/>
                            簡単！
                        </div>
                    </div>
                    <div className="play" style = {{ position: 'absolute', width:'33%', height:'90%', left:'66%'}}>
                        <img src = {Delivered} alt = 'play' style = {{width:'80%', height:'35%' }} />
                        <div style = {{ fontSize: '0.8em', marginTop: '15%', textAlign: 'left', marginLeft:'5%', lineHeight:'2.3' }}>
                            選んだ選択肢によって結末が変わ<br/>
                            るストーリー動画。擬似的に会話<br/>
                            している様な体験動画。動画と<br/>
                            ECの連動。 今までの「観るだけ<br/>
                            とは違った多彩な映像が検討可能<br/>
                            に！<br/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Screen2;