const windowWidth = window.innerWidth;
const windowHeight = 2246 / 1200  * windowWidth;

const imgWidth = windowWidth * 0.501;
const imgHeight =  windowHeight *  0.134;
const imgX = 600 / 1200 * windowWidth;
const imgY =  1220 / 2246 * windowHeight;
const titleWidth = windowWidth *  0.229;
const titleX =  13 / 1200  *  windowWidth;
const titleY = 1250 / 2246 * windowHeight;


const worksStyle4 =  {
    imgStyle: {
        position: 'absolute',
        width: 22.9 + 'vw',
        height: 'auto',
        left: 26.1 + 'vw' ,
        top: 132.793 + 'vw',
        zIndex:2
    },
    titleStyle: {
        position: 'absolute',
        width: 50 + 'vw',
        height: 'auto',
        top: 129.793 + 'vw',
        left: 50 + 'vw',
        zIndex:2,
    }
};

export default worksStyle4;