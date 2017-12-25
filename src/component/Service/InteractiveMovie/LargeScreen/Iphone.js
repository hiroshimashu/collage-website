import React from 'react';
import Iphone from '../../../../static/Iphone.png';
import Potato from '../../../../static/potato.png';
import Play from '../../../../static/play.png';

const windowWidth = window.innerWidth;
const windowHeight =  window.innerHeight;
const iphoneWidth = windowWidth * 0.518;
const iphoneHeight = windowHeight *  0.411;

const iphoneX = 541 /1200 * windowWidth;
const iphoneY = windowHeight * 220 / 750;

const potatoWidth = windowWidth * 0.407;
const potatoHeight = windowHeight *  0.365;
const potatoX = windowWidth * 607 /1200;
const potatoY = windowHeight * 237 / 750;

const playWidth = windowWidth * 0.066;
const playHeight = windowHeight *  0.105;
const playX = 812 /1200 *  windowWidth;
const playY = windowHeight * 341 /750;




function Iphone2(props) {

    return(
        <div className =  'iphoneWrapper'>
            <img src ={ Iphone } style =  {{
                position: 'absolute',
                width:iphoneWidth,
                height: 'auto',
                top: iphoneY,
                left: iphoneX,
                right: iphoneX,
                filter: `${props.blur}`
            }} />
            <img src = { Potato } style = {{
                position: 'absolute',
                width:potatoWidth,
                height: 'auto',
                top: potatoY,
                left: potatoX,
                right: potatoX,
                zIndex: 1,
                filter: `${props.blur}`
            }} />
            <a href = '	http://collage-movie.hippy.jp/cooking/cooking.html' target="_blank">
                <img src = { Play } style = {{
                    position: 'absolute',
                    width:playWidth,
                    height: 'auto',
                    top: playY,
                    left: playX,
                    right: playX,
                    zIndex: 2,
                    filter: `${props.blur}`
                }} onClick={() =>{ console.log('hello'); }}/>
            </a>
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