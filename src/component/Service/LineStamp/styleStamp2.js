const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  1334 /750;


const wrapperWidth = windowWidth * 0.245;
const wrapperX = windowWidth * 142 / 750;
const wrapperY = windowHeight * 608 / 1334;

const imgWidth = windowWidth * 0.156;
const imgHeight = windowHeight * 0.086
const imgX = windowWidth * 174 / 750;
const imgY = windowHeight * 645 / 1334;

const nameWidth = windowWidth * 0.144;
const nameHeight = windowHeight * 0.014
const nameX = windowWidth * 370 / 750;
const nameY = windowHeight * 618 / 1334;

const childWidth = windowWidth * 0.312;
const childHeight = windowHeight * 0.08
const childX = windowWidth * 370 / 750;
const childY = windowHeight * 658 / 1334;



const style2 = {
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

export default style2;