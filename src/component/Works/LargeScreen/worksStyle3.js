const windowWidth = window.innerWidth;
const windowHeight = 2246 / 1200  * windowWidth;

const imgWidth = windowWidth * 0.50;
const imgHeight =  windowHeight *  0.134;
const imgY =  918 / 2246 * windowHeight;
const titleWidth = windowWidth *  0.465;
const titleX =  613 / 1200  *  windowWidth;
const titleY = 940 / 2246 * windowHeight;
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
    titleStyle: {
        position: 'absolute',
        width: titleWidth,
        height: 'auto',
        top: titleY,
        left: titleX,
        zIndex: 2
    }
};

export default worksStyle3;