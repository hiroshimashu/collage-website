const windowWidth = window.innerWidth;
const windowHeight = 2246 / 1200  * windowWidth;

const imgWidth = windowWidth * 0.50;
const imgHeight =  windowHeight *  0.134;
const imgX = 598 / 1200 * windowWidth;
const imgY =  1630 / 2246 * windowHeight;
const titleWidth = windowWidth *  0.088;
const titleHeight =  windowHeight * 0.097;
const titleX =  629 / 1200  *  windowWidth;
const titleY = 1954 / 2246 * windowHeight;
const backgroundWidth =  windowWidth *  0.50;
const backgroundHeight = windowHeight * 616 /2246;
const backgroundX = windowWidth * 0.50;
const backgroundY = windowHeight * 1630 / 2246;



const worksStyle4 =  {
    imgStyle: {
        position: 'absolute',
        width: imgWidth,
        height: imgHeight,
        left: imgX,
        top: imgY,
        zIndex: 2,
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