const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  1974 / 750;
const imgWidth = windowWidth * 0.081;
const imgHeight = windowHeight *  0.059;
const imgX = 125 / 750 * windowWidth;
const imgY = windowHeight * 1236 / 1974;
const exWidth = windowWidth * 0.513;
const exHeight = windowHeight *  0.052;
const exX = 249 / 750 *  windowWidth;
const exY = windowHeight * 1237 / 1974;

const Style1 = {
    imgStyle: {
        position:  'absolute',
        width: imgWidth,
        height: imgHeight,
        top: imgY,
        left: imgX
    },
    exStyle: {
        position:  'absolute',
        width: exWidth,
        height: exHeight,
        top: exY,
        left: exX,
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        fontSize: '8px',
        textAlign:'left',
        transform: 'scaleY(1.0002)',
        color: '#2d2d2d',
        letterSpacing: '0.1em'
    }
};

export default Style1;

