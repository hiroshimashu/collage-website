const windowWidth = window.innerWidth;
const windowHeight = 4653 / 750 * windowWidth;
const imgHeight =  windowHeight *  0.078;
const imgY =  2532 / 4653 * windowHeight;
const titleWidth = windowWidth *  0.485;
const titleHeight =  windowHeight * 0.048;
const titleX =  19 / 750 *  windowWidth;
const titleY = 2916/ 4653 * windowHeight;
const mainWidth =  windowWidth *  0.485;
const mainHeight =  windowHeight *  0.035;

const mainX = 20 / 750 * windowWidth;
const mainY = windowHeight * 2976 / 4653;

const worksStyle4 =  {
    imgStyle: {
        position: 'absolute',
        width: windowWidth,
        height: imgHeight,
        top: imgY,
        left: 0
    },
    titleStyle: {
        position: 'absolute',
        width: titleWidth,
        height: titleHeight,
        top: titleY,
        left: titleX,
        fontFamily: 'dnp-shuei-mgothic-std',
        color: '#7e7e7e',
        fontSize:  '17px',
        lineHeight:  '24px',
        textAlign:  'left',
        transform: 'scaleY(1.017)',
        fontWeight: 600
    },
    mainStyle: {
        position: 'absolute',
        width: mainWidth,
        height: mainHeight,
        top: mainY,
        left: mainX,
        fontSize: '8px',
        lineHeight: '15px',
        textAlign:' left',
        transform: 'scaleY(1.0006)',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        letterSpacing: '0.1em'
    }
};

export default worksStyle4;