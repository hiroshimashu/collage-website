const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  3812 /750;

const imgWidth = windowWidth *  0.108;
const imgHeight = windowHeight *  0.021;
const imgX =  windowWidth * 102 / 750;
const imgY = 1614 / 3812 * windowHeight;

const nameWidth = windowWidth *  0.061;
const nameHeight = windowHeight *  0.006;
const nameX =  windowWidth * 239 / 750;
const nameY = 1626 / 3812 * windowHeight;

const disWidth = windowWidth *  0.487;
const disHeight = windowHeight *  0.004;
const disX =  windowWidth * 239 / 750;
const disY = 1666 / 3812 * windowHeight;


const styleStep1 = {
    img: {
        position: 'absolute',
        width: imgWidth,
        height: imgHeight,
        top: imgY,
        left: imgX,
    },
    name:  {
        position: 'absolute',
        width: nameWidth,
        height: nameHeight,
        top: nameY,
        left: nameX,
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        fontSize: '10px',
        textAlign: 'left',
        transform: 'scaleY(1.0007)',
        fontWeight: 600
    },
    discription:  {
        position: 'absolute',
        width: disWidth,
        height: disHeight,
        top: disY,
        left: disX,
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        fontSize: '7px',
        textAlign: 'left',
        letterSpacing: '0.1em',
        transform: 'scaleY(1.0007)'
    }
};

export default styleStep1;