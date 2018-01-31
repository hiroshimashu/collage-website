const windowWidth =  window.innerWidth;
const windowHeight = window.innerHeight;


const mainWidth = windowWidth * 0.135
const mainHeight =  windowHeight * 0.016;
const mainX = windowWidth *  117 / 750;
const mainY = windowHeight * 201 / 1334;

const imgWidth = windowWidth * 0.019
const imgHeight =  windowHeight * 0.019;
const imgX = windowWidth *  327 / 750;
const imgY = windowHeight * 194 / 1334;

const lineWidth = windowWidth * 0.429;
const lineHeight =  windowHeight * 0.001;
const lineX = windowWidth *  26 / 750;
const lineY = windowHeight * 251 / 1334;


const menuStyle2 = {
    mainStyle: {
        position: 'absolute',
        width: 11.6 + 'vw',
        height: 1.6 + 'vh',
        top: 15.06 + 'vh',
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
        top: 14.5 + 'vh',
        left: 21.9 + 'vw'
    },
    lineStyle: {
        position: 'absolute',
        width: 20.49 + 'vw',
        height: 0.1 + 'vh',
        top: 18.81 + 'vh',
        left: 3.2 + 'vw',
        borderBottom:'1px solid #dcdcdc'
    }
};

export default menuStyle2;