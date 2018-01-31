const windowWidth = window.innerWidth;
const windowHeight = 2246 / 1200  * windowWidth;

const imgWidth = windowWidth * 0.50;
const imgHeight =  windowHeight *  0.134;
const imgY =  212 / 2246 * windowHeight;
const titleWidth = windowWidth *  0.476;
const titleX =  (612 / 1200  *  windowWidth);
const titleY = 230 / 2246 * windowHeight;




const worksStyle1 =  {
    imgStyle: {
        position: 'absolute',
        width: 50 +'vw',
        height: 'auto',
        top: 17.666 + 'vw',
    },
    titleStyle: {
        position: 'absolute',
        width: 46 + 'vw',
        height: 'auto',
        top: 20.666 + 'vw',
        left: 51 + 'vw',
    }
};

export default worksStyle1;