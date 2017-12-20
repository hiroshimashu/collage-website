const windowSize = window.innerWidth;
const windowHeight = 2744 / 1200 * windowSize;

const cImage1Width = windowSize * 0.285;
const cImage1Height = windowHeight *  0.04;
const cImage1X = 121 / 1200 * windowSize;
const cImage1Y = windowHeight * 271 / 2744;
const companyName1Width = windowSize * 0.308;
const companyName1Height = windowHeight *  0.01;
const companyName1X = 549 / 1200  * windowSize;
const companyName1Y = windowHeight *  258 /2917;
const companyMain1Width = windowSize * 0.425;
const companyMain1Height = windowHeight *  0.032;
const companyMain1X = 548 /1200 * windowSize;
const companyMain1Y = windowHeight *  304 / 2774;

const cImage2Width = windowSize * 0.269;
const cImage2X = 124 / 1200 * windowSize
const cImage2Y = windowHeight *  500 / 2774;
const companyName2Width = windowSize * 0.282;
const companyName2Height = windowHeight *  0.01;
const companyName2X = 549 / 1200 * windowSize;
const companyName2Y = windowHeight * 472 / 2774;
const companyMain2Width = windowSize * 0.426;
const companyMain2Height = windowHeight *  0.032;
const companyMain2X = 548 / 1200 *  windowSize
const companyMain2Y = windowHeight * 518 / 2774;

const dividerWidth = windowSize * 0.001;
const dividerHeight = windowHeight * 0.055;
const dividerX = 497 / 1200 * windowSize;
const dividerY = 252 / 2744 * windowHeight;
const divider2Y = 466 / 2744 * windowHeight;



const groupStyle = {
    cImage1: {
        position: 'absolute',
        width: cImage1Width,
        height: cImage1Height,
        top: cImage1Y,
        left: cImage1X,

    },
    name1: {
        position: 'absolute',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        color: '#464646',
        fontSize: '28px',
        lineHeight: '41.316px',
        fontWeight: 600,
        textAlign: 'left',
        width: companyName1Width,
        height: companyName1Height,
        top: companyName1Y,
        left: companyName1X,
        right: companyName1X
    },
    exStyle1: {
        position: 'absolute',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        color: '#6e6e6e',
        fontSize: '20.83px',
        lineHeight: '33.333px',
        textAlign: 'left',
        width: companyMain1Width,
        height: companyMain1Height,
        top: companyMain1Y,
        left: companyMain1X,
        right: companyMain1X
    },
    cImage2: {
        position: 'absolute',
        width: cImage2Width,
        height: 'auto',
        top: cImage2Y,
        left: cImage2X,

    },
    name2: {
        position: 'absolute',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        color: '#464646',
        fontSize: '28px',
        lineHeight: '41.316px',
        fontWeight: 600,
        textAlign: 'left',
        width: companyName2Width,
        height: companyName2Height,
        top: companyName2Y,
        left: companyName2X,
        right: companyName2X
    },
    exStyle2: {
        position: 'absolute',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        color: '#6e6e6e',
        textAlign: 'left',
        fontSize: '20.83px',
        lineHeight: '33.333px',
        width: companyMain2Width,
        height: companyMain2Height,
        top: companyMain2Y,
        left: companyMain2X,
        right: companyMain2X
    },
    divider1: {
        position: 'absolute',
        width: dividerWidth,
        height: dividerHeight,
        top: dividerY,
        left: dividerX,
        borderLeft: '1px solid #9f9f9f'
    },
    divider2: {
        position: 'absolute',
        width: dividerWidth,
        height: dividerHeight,
        top: divider2Y,
        left: dividerX,
        borderLeft: '1px solid #9f9f9f'
    }


};

export default groupStyle;







