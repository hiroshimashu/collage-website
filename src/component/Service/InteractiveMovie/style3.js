const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  1974 / 750;
const imgWidth = windowWidth * 0.141;
const imgHeight = windowHeight *  0.043;
const imgX = 101/ 750 * windowWidth;
const imgY = windowHeight * 1634 / 1974;
const exWidth = windowWidth * 0.515;
const exHeight = windowHeight *  0.052;
const exX = 249 / 750 *  windowWidth;
const exY = windowHeight * 1627 / 1974;

const Style3 = {
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

export default Style3;
