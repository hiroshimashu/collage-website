const windowWidth = window.innerWidth;
const windowHeight = 2246 / 1200  * windowWidth;

const imgWidth = windowWidth * 0.50;
const imgHeight =  windowHeight *  0.134;
const imgY =  1522 / 2246 * windowHeight;
const titleWidth = windowWidth *  0.266;
const titleX =  613 / 1200  *  windowWidth;
const titleY = 1542 / 2246 * windowHeight;




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
    }
};

export default worksStyle3;