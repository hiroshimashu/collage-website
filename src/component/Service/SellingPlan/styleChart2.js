const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  3812 /750;

const wrapperWidth = windowWidth *  0.828;
const wrapperHeight = windowHeight *  0.043;
function calculateWrapperX() {
    return( windowWidth - wrapperWidth) / 2;
}
const wrapperX = calculateWrapperX();
const wrapperY = 2240 / 3812 * windowHeight;

const backgroundWidth = windowWidth * 0.828;
const backgroundHeight = windowHeight *  0.017;
function calculateBackgroundX() {
    return( windowWidth - backgroundWidth) / 2 + 1;
}
const backgroundX = calculateBackgroundX();
const backgroundY = 2241 / 3812 * windowHeight;


const planWidth = windowWidth *  0.277;
const planHeight = windowHeight *  0.006;
const planX =  windowWidth * 96 / 750;
const planY = 2263 / 3812 * windowHeight;

const priceWidth = windowWidth *  0.232;
const priceHeight = windowHeight *  0.007;
const priceX =  windowWidth * 484 / 750;
const priceY = 2264 / 3812 * windowHeight;

const exWidth = windowWidth *  0.227;
const exHeight = windowHeight *  0.006;
const exX =  windowWidth * 96 / 750;
const exY = 2345 / 3812 * windowHeight;

const exDetailWidth = windowWidth *  0.299;
const exDetailHeight = windowHeight *  0.011;
const exDetailX =  windowWidth * 408 / 750;
const exDetailY = 2345 / 3812 * windowHeight;




const styleChart2 = {
    wrapper: {
        position: 'absolute',
        width: wrapperWidth,
        height: wrapperHeight,
        top: wrapperY,
        left: wrapperX,
        border: 'solid 1.5px #b1a8cb',
        borderRadius: '0.3em'

    },
    background:  {
        position: 'absolute',
        width: backgroundWidth,
        height: backgroundHeight,
        top: backgroundY,
        left: backgroundX,
        right: backgroundX,
        borderTop: 'solid 1.5px #b1a8cb',
        borderTopLeftRadius: '0.3em',
        borderTopRightRadius: '0.3em',
        backgroundColor: '#a99fc5'
    },
    plan:  {
        position: 'absolute',
        width: planWidth,
        height: planHeight,
        top: planY,
        left: planX,
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        fontSize: '9px',
        lineHieght: '10px',
        textAlign: 'center',
        letterSpacing: '0.2em',
        transform: 'scaleY(1.0067)',
        color: '#fffeff'
    },
    price: {
        position: 'absolute',
        width: priceWidth,
        height: priceHeight,
        top: priceY,
        left: priceX,
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        fontSize: '9px',
        lineheght: '10px',
        textAlign: 'center',
        letterSpacing: '0.2em',
        transform: 'scaleY(1.0067)',
        color: '#fffeff'
    },
    ex: {
        position: 'absolute',
        width: exWidth,
        height: exHeight,
        top: exY,
        left: exX,
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        fontSize: '9px',
        textAlign: 'center',
        letterSpacing: '0.2em',
        transform: 'scaleY(1.0067)',
        color: '#2d2d2d'
    },
    exDetail: {
        position: 'absolute',
        width: exDetailWidth,
        height: exDetailHeight,
        top: exDetailY,
        left: exDetailX,
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        lineHeght: '8px',
        fontSize: '7.66px',
        textAlign: 'left',
        letterSpacing: '0.26em',
        transform: 'scaleY(1.0067)',
        color: '#2d2d2d'
    }



};

export default styleChart2;