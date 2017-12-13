import React from 'react';
import Iphone from '../../../static/Iphone.png';
import Potato from '../../../static/potato.png';
import Play from '../../../static/play.png';

const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  1974 / 750;
const iphoneWidth = windowWidth * 0.829;
const iphoneHeight = windowHeight *  0.156;
function calculateMainX() {
    const  x = (windowWidth - iphoneWidth)/2;
    return x;
}
const iphoneX = calculateMainX();
const iphoneY = windowHeight * 735 / 1974;

const potatoWidth = windowWidth * 0.651;
const potatoHeight = windowHeight *  0.139;
function calculatePotatoX() {
    const  x = (windowWidth - potatoWidth)/2;
    return x;
}

const potatoX = calculatePotatoX();
const potatoY = windowHeight * 752 / 1974;

const playWidth = windowWidth * 0.105;
const playHeight = windowHeight *  0.04;
function calculatePlayX() {
    const  x = (windowWidth - playWidth)/2;
    return x;
}

const playX = calculatePlayX();
const playY = windowHeight * 865 / 1974;




function Iphone2() {
    return(
        <div className =  'iphoneWrapper'>
            <img src ={ Iphone } style =  {styles.iphoneImg} />
            <img src = { Potato } style = {styles.potato} />
            <a href = '	http://collage-movie.hippy.jp/cooking/index.html' target="_blank"><img src = { Play } style = { styles.play } onClick={() =>{ console.log('hello'); }}/></a>
        </div>
    );
}

const styles = {
    iphoneImg: {
        position: 'absolute',
        width:iphoneWidth,
        height: iphoneHeight,
        top: iphoneY,
        left: iphoneX,
        right: iphoneX,
    },
    potato: {
        position: 'absolute',
        width:potatoWidth,
        height: potatoHeight,
        top: potatoY,
        left: potatoX,
        right: potatoX,
        zIndex: 1
    },
    play: {
        position: 'absolute',
        width:playWidth,
        height: playHeight,
        top: playY,
        left: playX,
        right: playX,
        zIndex: 2
    }
}

export default Iphone2;