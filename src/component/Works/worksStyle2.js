const windowWidth = window.innerWidth;
const windowHeight = 4653 / 750 * windowWidth;
const imgHeight =  windowHeight *  0.078;
const imgY =  978 / 4653 * windowHeight;
const titleWidth = windowWidth *  0.705;
const titleHeight =  windowHeight * 0.094;
const titleX =  17 / 750 *  windowWidth;
const titleY = 1363 / 4653 * windowHeight;
const mainWidth =  windowWidth *  0.705;
const mainHeight =  windowHeight *  0.082;
const mainX = 17 / 750 *  windowWidth;
const mainY = windowHeight * 1419 / 4653;

const worksStyle2 =  {
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
        lineHeight: '14px',
        textAlign:' left',
        transform: 'scaleY(1.0006)',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        letterSpacing: '0.1em'
    }
};

export default worksStyle2;