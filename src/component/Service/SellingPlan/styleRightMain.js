const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  3812 /750;
const rightWidth = windowWidth *  0.30;
const rightHeight = windowHeight *  0.023;
const rightX =  windowWidth * 490 / 750;
const rightY = 636 / 3812 * windowHeight;


const styleRight = {
    position: 'absolute',
    width: rightWidth,
    height:rightHeight,
    top:rightY,
    left: rightX,
    fontFamily: 'dnp-shuei-mgothic-std',
    color: '#4c4c4c',
    textAlign: 'left',
    transform: 'scaleY(1.0017)',
    fontSize: '10px',
    fontWeight: 600,
    lineHeight: '15px'
};

export default styleRight;