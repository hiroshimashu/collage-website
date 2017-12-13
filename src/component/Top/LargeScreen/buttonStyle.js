const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


const b1Width = windowWidth *  0.013;
const b1Height = windowHeight * 0.02;
const b1X =  524 / 1200 *  windowWidth;
const b1Y = 698 / 750 *  windowHeight;

const b2X =  570 / 1200 *  windowWidth;
const b3X =  616 / 1200 *  windowWidth;
const b4X =  662 / 1200 *  windowWidth;


const buttonStyles ={
    b1: {
        width: b1Width,
        height: b1Height,
        left:b1X,
        top:b1Y,
        zIndex: 100,
        position: 'absolute',
        color:'#dcdcdc'
    },
    b2: {
        width: b1Width,
        height: b1Height,
        left:b2X,
        top:b1Y,
        zIndex: 100,
        position: 'absolute',
        color: '#dcdcdc'
    },
    b3: {
        width: b1Width,
        height: b1Height,
        left:b3X,
        top:b1Y,
        zIndex: 100,
        position: 'absolute',
        color: '#dcdcdc'
    },
    b4: {
        width: b1Width,
        height: b1Height,
        left:b4X,
        top:b1Y,
        zIndex: 100,
        position: 'absolute',
        color: '#dcdcdc'
    }
}

export default buttonStyles;