const windowWidth = window.innerWidth;
const windowHeight = 2246 / 1200  * windowWidth;

const imgWidth = windowWidth * 0.50;
const imgHeight =  windowHeight *  0.134;
const imgY =  1630 / 2246 * windowHeight;
const titleWidth = windowWidth *  0.266;
const titleHeight =  windowHeight * 0.082;
const titleX =  11 / 1200  *  windowWidth;
const titleY = 1957 / 2246 * windowHeight;

const backgroundWidth =  windowWidth *  0.50;
const backgroundHeight = windowHeight * 801 /2246;
const backgroundX = windowWidth * 0.50;
const backgroundY = windowHeight * 212 / 2246 + imgY



const worksStyle3 =  {
    imgStyle: {
        position: 'absolute',
        width: imgWidth,
        height: imgHeight,
        top: imgY,
    },
    backgroundStyle: {
        position: 'absolute',
        width: backgroundWidth,
        height: backgroundHeight,
        left: backgroundX,
        top: backgroundY,
        color:' #ededed',
        zIndex: 1,
    },
    titleStyle: {
        position: 'absolute',
        width: titleWidth,
        height: titleHeight,
        top: titleY,
        left: titleX,
        fontFamily: 'dnp-shuei-mgothic-std',
        color: '#7e7e7e',
        fontSize:  '26.55px',
        lineHeight:  '48.162px',
        textAlign:  'left',
        transform: 'scaleY(1.017)',
        fontWeight: 600,
        zIndex:2,
        ':hover': {
            transform: 'scale(1.05)',
        },
    }
};

export default worksStyle3;