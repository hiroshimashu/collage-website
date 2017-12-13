const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  3812 /750;
const rightWidth = windowWidth *  0.383;
const rightHeight = windowHeight *  0.056;
const rightX =  windowWidth * 430 / 750;
const rightY = 567 / 3812 * windowHeight;


const styleRight = {
    position: 'absolute',
    width: rightWidth,
    height:rightHeight,
    top:rightY,
    left: rightX
};

export default styleRight;