const windowWidth = window.innerWidth;
const windowHeight = 2246 / 1200  * windowWidth;

const imgWidth = windowWidth * 0.50;
const imgHeight =  windowHeight *  0.18;
const imgX = 600 / 1200 * windowWidth;
const imgY = 512  / 2246 * windowHeight;
const titleWidth = windowWidth *  0.333;
const titleX =  12 / 1200  *  windowWidth;
const titleY = 537 / 2246 * windowHeight;



const worksStyle2 =  {
    imgStyle: {
        position: 'absolute',
        width: titleWidth,
        height: 'auto',
        top: titleY,
        left: titleX,
        zIndex:2
    },
    titleStyle: {
        position: 'absolute',
        width:imgWidth,
        height: imgHeight,
        top: imgY,
        left: imgX,
        zIndex: 2,
        ':hover': {
            transform: 'scale(1.05)',
        }
    }
};

export default worksStyle2;