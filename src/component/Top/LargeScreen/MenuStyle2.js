const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  1334 /750;


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
        width: mainWidth,
        height: mainHeight,
        top: mainY,
        left: mainX,
        fontFamily: 'dnp-shuei-mgothic-std',
        fontSize: '13px',
        color: '#505050',
        textAlign: 'center',
        transform: 'scaleY(1.0039)',
        letterSpacing: '0.05em'
    },
    imgStyle: {
        position: 'absolute',
        width: imgWidth,
        height: imgHeight,
        top: imgY,
        left: imgX
    },
    lineStyle: {
        position: 'absolute',
        width: lineWidth,
        height: lineHeight,
        top: lineY,
        left: lineX,
        borderBottom:'1px solid #dcdcdc'
    }
};

export default menuStyle2;