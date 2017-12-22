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
        ':hover': {
            transform: 'scale(1.05)',
        },

    }
};

export default worksStyle1;