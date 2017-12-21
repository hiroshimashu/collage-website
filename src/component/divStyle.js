const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


const div1Width = windowWidth *  0.054;
const div1Height = windowHeight * 0.02;
const div1X =  200 / 1200 *  windowWidth;
const div1Y = 20 / 750 *  windowHeight;

const div2Width = windowWidth *  0.055;
const div2Height = windowHeight * 0.02;
const div2X =  500 / 1200 *  windowWidth;
const div2Y = 20 / 750 *  windowHeight;

const div3Width = windowWidth *  0.063;
const div3Height = windowHeight * 0.02;
const div3X =  800 / 1200 *  windowWidth;
const div3Y = 20 / 750 *  windowHeight;

const div4Width = windowWidth *  0.059;
const div4Height = windowHeight * 0.02;
const div4X =  1100 / 1200 *  windowWidth;
const div4Y = 20 / 750 *  windowHeight;

const styleDiv = {
    div1: {
        position: 'absolute',
        width: div1Width,
        height: 'auto',
        top: div1Y,
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
        height: 'auto',
        top: div2Y,
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
        height: 'auto',
        top: div3Y,
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
        height: 'auto',
        top: div4Y,
        fontFamily: 'dnp-shuei-mgothic-std',
        color: '#b3b3b3',
        fontSize: '18px',
        textAlign: 'left',
        lineHeight: '18px',
        zIndex: 6
    }
}


export default styleDiv;