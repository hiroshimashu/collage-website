const windowWidth = window.innerWidth;
const windowHeight = 2246 / 1200  * windowWidth;

const imgWidth = windowWidth * 0.501;
const imgHeight =  windowHeight *  0.134;
const imgX = 599 / 1200 * windowWidth;
const imgY =  1013 / 2246 * windowHeight;
const titleWidth = windowWidth *  0.229;
const titleHeight =  windowHeight * 0.084;
const titleX =  630 / 1200  *  windowWidth;
const titleY = 1338 / 2246 * windowHeight;
const backgroundWidth =  windowWidth *  0.50;
const backgroundHeight = windowHeight * 617 /2246;
const backgroundX = windowWidth * 0.50;
const backgroundY = windowHeight * 1013 / 2246 + imgHeight



const worksStyle4 =  {
    imgStyle: {
        position: 'absolute',
        width: imgWidth,
        height: imgHeight,
        left: imgX,
        top: imgY,
        zIndex:2
    },
    backgroundStyle: {
        position: 'absolute',
        width: backgroundWidth,
        height: backgroundHeight,
        left: backgroundX,
        top: backgroundY,
        backgroundColor:'#f6f6f6',
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

export default worksStyle4;