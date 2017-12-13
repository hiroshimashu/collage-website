const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  3812 /750;
const leftWidth = windowWidth *  0.383;
const leftHeight = windowHeight *  0.056;
const leftX =  windowWidth * 39 / 750;
const leftY = 575 / 3812 * windowHeight;


const styleLeft = {
    position: 'absolute',
    width: leftWidth,
    height:leftHeight,
    top:leftY,
    left: leftX
};

export default styleLeft;