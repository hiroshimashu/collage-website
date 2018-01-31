const windowWidth =  window.innerWidth;
const windowHeight = window.innerHeight;


const mainWidth = windowWidth * 0.116
const mainHeight =  windowHeight * 0.016;
const mainX = windowWidth *  100 / 750;
const mainY = windowHeight * 112 / 1334;

const imgWidth = windowWidth * 0.019
const imgHeight =  windowHeight * 0.019;
const imgX = windowWidth *  325 / 750;
const imgY = windowHeight * 106 / 1334;

const lineWidth = windowWidth * 0.429;
const lineHeight =  windowHeight * 0.001;
const lineX = windowWidth *  24 / 750;
const lineY = windowHeight * 163 / 1334;


const menuStyle1 = {
    mainStyle: {
        position: 'absolute',
        width: 11.6 + 'vw',
        height: 1.6 + 'vh',
        top: 8.395 + 'vh',
        left: 2.19 + 'vw',
        fontFamily: 'dnp-shuei-mgothic-std',
        fontSize: '13px',
        color: '#505050',
        textAlign: 'center',
        transform: 'scaleY(1.0039)',
        letterSpacing: '0.05em'
    },
    imgStyle: {
        position: 'absolute',
        width: 1.02 + 'vw',
        height: 'auto',
        top: 7.9 + 'vh',
        left: 21.9 + 'vw'
    },
    lineStyle: {
        position: 'absolute',
        width: 20.49 + 'vw',
        height: 0.1 + 'vh',
        top: 12.21 + 'vh',
        left: 3.2 + 'vw',
        borderBottom:'1px solid #dcdcdc'
    }
};

export default menuStyle1;