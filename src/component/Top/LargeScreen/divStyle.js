const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


const div1Width = windowWidth *  0.054;
const div1Height = windowHeight * 0.02;
const div1X =  498 / 1200 *  windowWidth;
const div1Y = 674 / 750 *  windowHeight;

const div2Width = windowWidth *  0.055;
const div2Height = windowHeight * 0.02;
const div2X =  543 / 1200 *  windowWidth;
const div2Y = 674 / 750 *  windowHeight;

const div3Width = windowWidth *  0.063;
const div3Height = windowHeight * 0.02;
const div3X =  584 / 1200 *  windowWidth;
const div3Y = 674 / 750 *  windowHeight;

const div4Width = windowWidth *  0.059;
const div4Height = windowHeight * 0.02;
const div4X =  632 / 1200 *  windowWidth;
const div4Y = 674 / 750 *  windowHeight;

const styleDiv = {
    div1: {
        position: 'absolute',
        width: div1Width,
        height: div1Height,
        top: div1Y,
        left: div1X,
        fontFamily: 'dnp-shuei-mgothic-std',
        color: '#b3b3b3',
        fontSize: '18px',
        textAlign: 'left',
        lineHeight: '18px',
        zIndex: 6
    },
    div2: {
        position: 'absolute',
        width: div2Width,
        height: div2Height,
        top: div2Y,
        left: div2X,
        fontFamily: 'dnp-shuei-mgothic-std',
        color: '#b3b3b3',
        fontSize: '18px',
        textAlign: 'left',
        lineHeight: '18px',
        zIndex: 6
    },
    div3: {
        position: 'absolute',
        width: div3Width,
        height: div3Height,
        top: div3Y,
        left: div3X,
        fontFamily: 'dnp-shuei-mgothic-std',
        color: '#b3b3b3',
        fontSize: '18px',
        textAlign: 'left',
        lineHeight: '18px',
        zIndex: 6
    },
    div4: {
        position: 'absolute',
        width: div4Width,
        height: div4Height,
        top: div4Y,
        left: div4X,
        fontFamily: 'dnp-shuei-mgothic-std',
        color: '#b3b3b3',
        fontSize: '18px',
        textAlign: 'left',
        lineHeight: '18px',
        zIndex: 6
    }
}


export default styleDiv;