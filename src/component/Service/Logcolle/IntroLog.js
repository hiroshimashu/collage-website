import React from 'react';
import Play from '../../../static/player.svg';
import GooglePlay from '../../../static/googleplay.png';
import AppStore from '../../../static/appstore.png';


function IntroLog() {
    return(
        <div style = {styles.intro}>
            <div style = {styles.intro1}>
                「観た映画」「読んだ本」「楽しかっ<br/>
                 た旅行「美味しかった食事」・・・。
            </div>
            <div style = {styles.intro2}>
                『ログコレ』では、ありとあらゆるラ<br/>
                イフログを、写真・コメントとともに<br/>
                ワンストップで記録!
            </div>
            <div style = {styles.play}>
                <img src = {Play} alt = 'play' style = {{width:'51px', height:'51px'}} />
            </div>
            <div style = {styles.google}>
                <img src = {GooglePlay} alt = 'google' style = {{width: '170px', height: '64px'}} />
            </div>
            <div style = {styles.app}>
                <img src = {AppStore} alt = 'appstore' style = {{width: '170px', height: '64px'}} />
            </div>
        </div>

    );
}

const styles = {
    intro: {
        position: 'absolute',
        width: '40%',
        height: '100%',
        left: '35%',
        top: '200px'
    },
    intro1: {
        position: 'absolute',
        width: '100%'
    },
    intro2:{
        position: 'absolute',
        width: '100%',
        top: '60px'
    },
    play: {
        position: 'absolute',
        width: '100%',
        height: '51px',
        top: '150px',
    },
    google: {
        position: 'absolute',
        top: '230px',
        width: '100%',
        height: '64px'
    },
    app: {
        position: 'absolute',
        top: '300px',
        width: '100%',
        height: '64px'
    }
}

export default IntroLog;