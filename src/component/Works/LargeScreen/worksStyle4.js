const windowWidth = window.innerWidth;
const windowHeight = 2246 / 1200  * windowWidth;

const imgWidth = windowWidth * 0.501;
const imgHeight =  windowHeight *  0.134;
const imgX = 600 / 1200 * windowWidth;
const imgY =  1220 / 2246 * windowHeight;
const titleWidth = windowWidth *  0.229;
const titleX =  13 / 1200  *  windowWidth;
const titleY = 1250 / 2246 * windowHeight;
const backgroundWidth =  windowWidth *  0.50;
const backgroundHeight = windowHeight * 617 /2246;
const backgroundX = windowWidth * 0.50;
const backgroundY = windowHeight * 1013 / 2246 + imgHeight



const worksStyle4 =  {
    imgStyle: {
        position: 'absolute',
        width: titleWidth,
        height: 'auto',
        left: titleX ,
        top: titleY,
        zIndex:2
    },
    titleStyle: {
        position: 'absolute',
        width: imgWidth,
        height: imgHeight,
        top: imgY,
        left: imgX,
        zIndex:2,
        ':hover': {
            transform: 'scale(1.05)',
        },

    }
};

export default worksStyle4;