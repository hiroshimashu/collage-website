const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  1334 /750;


const wrapperWidth = windowWidth * 0.245;
const wrapperX = windowWidth * 147 / 750;
const wrapperY = windowHeight * 851 / 1334;

const imgWidth = windowWidth * 0.167;
const imgHeight = windowHeight * 0.091
const imgX = windowWidth * 177 / 750;
const imgY = windowHeight * 882 / 1334;

const nameWidth = windowWidth * 0.143;
const nameHeight = windowHeight * 0.015
const nameX = windowWidth * 366 / 750;
const nameY = windowHeight * 864 / 1334;

const childWidth = windowWidth * 0.301;
const childHeight = windowHeight * 0.081
const childX = windowWidth * 367 / 750;
const childY = windowHeight * 900 / 1334;



const style3 = {
    wrapper: {
        position: 'absolute',
        width: wrapperWidth,
        height:wrapperWidth,
        top: wrapperY,
        left: wrapperX,
        backgroundColor: '#ffffff',
        borderRadius: '50%'
    },
    img: {
        position: 'absolute',
        width: imgWidth,
        height: imgHeight,
        top: imgY,
        left: imgX,
    },
    nameStyle: {
        position: 'absolute',
        width: nameWidth,
        height: nameHeight,
        top: nameY,
        left: nameX,
        fontSize: '9px',
        letterSpacing: '0.1em',
        textAlign: 'left',
        transform: 'scaleY(1.0019)',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        lineHeight: '17px',
        fontWeight: 600,
        color: '#484848'
    },
    childStyle: {
        position: 'absolute',
        width: childWidth,
        height: childHeight,
        top: childY,
        left: childX,
        fontSize: '6.5px',
        letterSpacing: '0.1em',
        textAlign: 'left',
        transform: 'scaleY(1.0019)',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        lineHeight: '10.8px',
        fontWeight: 600,
        color: '#484848'
    }

};

export default style3;