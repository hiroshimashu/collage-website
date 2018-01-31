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
        width: 50 + 'vw',
        height: 'auto' ,
        top: 92.593 + 'vw',
    },
    titleStyle: {
        position: 'absolute',
        width: 46 + 'vw',
        height: 'auto',
        top: 95.893 + 'vw',
        left: 51.083 + 'vw',
        zIndex: 2
    }
};

export default worksStyle3;