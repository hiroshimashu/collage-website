const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  3812 /750;

const wrapperWidth = windowWidth *  0.828;
const wrapperHeight = windowHeight *  0.043;
function calculateWrapperX() {
    return( windowWidth - wrapperWidth) / 2;
}
const wrapperX = calculateWrapperX();
const wrapperY = 2434 / 3812 * windowHeight;

const backgroundWidth = windowWidth * 0.828;
const backgroundHeight = windowHeight *  0.017;
function calculateBackgroundX() {
    return( windowWidth - backgroundWidth) / 2 + 1;
}
const backgroundX = calculateBackgroundX();
const backgroundY = 2435 / 3812 * windowHeight;


const planWidth = windowWidth *  0.207;
const planHeight = windowHeight *  0.007;
const planX =  windowWidth * 98 / 750;
const planY = 2457 / 3812 * windowHeight;

const priceWidth = windowWidth *  0.237;
const priceHeight = windowHeight *  0.006;
const priceX =  windowWidth * 491 / 750;
const priceY = 2458 / 3812 * windowHeight;

const exWidth = windowWidth *  0.456;
const exHeight = windowHeight *  0.006;
const exX =  windowWidth * 96 / 750;
const exY = 2539 / 3812 * windowHeight;

const exDetailWidth = windowWidth *  0.299;
const exDetailHeight = windowHeight *  0.011;
const exDetailX =  windowWidth * 408 / 750;
const exDetailY = 2345 / 3812 * windowHeight;




const styleChart3 = {
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
        fontSize: '10px',
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
        fontSize: '8.5px',
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
        fontSize: '10px',
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
        fontSize: '7.66px',
        textAlign: 'left',
        letterSpacing: '0.26em',
        transform: 'scaleY(1.0067)',
        color: '#2d2d2d'
    }



};

export default styleChart3;