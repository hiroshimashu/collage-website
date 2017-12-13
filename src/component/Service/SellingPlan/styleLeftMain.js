const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  3812 /750;
const leftWidth = windowWidth *  0.277;
const leftHeight = windowHeight *  0.031;
const leftX =  windowWidth * 74 / 750;
const leftY = 629 / 3812 * windowHeight;


const styleLeftMain = {
    position: 'absolute',
    width: leftWidth,
    height:leftHeight,
    top:leftY,
    left: leftX,
    fontFamily: 'dnp-shuei-mgothic-std',
    color: '#4c4c4c',
    textAlign: 'left',
    transform: 'scaleY(1.0017)',
    fontSize: '10px',
    fontWeight: 600,
    lineHeight: '15px'
};

export default styleLeftMain;