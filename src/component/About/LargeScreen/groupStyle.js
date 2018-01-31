const windowSize = window.innerWidth;
const windowHeight = 2744 / 1200 * windowSize;

const cImage1Width = windowSize * 0.285;
const cImage1Y = windowHeight * 271 / 2744;
const companyName1Width = windowSize * 0.308;
const companyName1Y = windowHeight *  258 /2917;
const companyMain1Width = windowSize * 0.425;
const companyMain1Y = windowHeight *  304 / 2774;
const cImage2Width = windowSize * 0.269;
const cImage2Y = windowHeight *  500 / 2774;
const companyName2Width = windowSize * 0.282;
const companyName2Y = windowHeight * 472 / 2774;
const companyMain2Width = windowSize * 0.426;
const companyMain2Y = windowHeight * 518 / 2774;

const dividerWidth = windowSize * 0.001;
const dividerHeight = windowHeight * 0.055;
const dividerY = 252 / 2744 * windowHeight;
const divider2Y = 466 / 2744 * windowHeight;



const groupStyle = {
    cImage1: {
        position: 'absolute',
        width: 28.5 + 'vw',
        height: 'auto',
        top: 22.583 + 'vw',
        left: 10.083 + 'vw'
    },
    name1: {
        position: 'absolute',
        width: 30.8 + 'vw',
        height: 'auto',
        top: 21.5 + 'vw',
        left:45.75 + 'vw'
    },
    exStyle1: {
        position: 'absolute',
        width: 42.5 + 'vw',
        height: 'auto',
        top: 25.333 + 'vw',
        left: 45.666 + 'vw'
    },
    cImage2: {
        position: 'absolute',
        width: 26.9 + 'vw',
        height: 'auto',
        top: 41.666 + 'vw',
        left: 10.083 + 'vw'
    },
    name2: {
        position: 'absolute',
        width: 30.8 + 'vw',
        height:'auto',
        top: 39.333 + 'vw',
        left:45.75 + 'vw'
    },
    exStyle2: {
        position: 'absolute',
        width: 42.6 + 'vw',
        height:'auto',
        top: 43.166 + 'vw',
        left: 45.666 + 'vw'
    },
    divider1: {
        position: 'absolute',
        width: 1 + 'vw',
        height: 12.5 + 'vw',
        top: 21 + 'vw',
        left: 41.416 + 'vw',
        borderLeft: '1px solid #9f9f9f'
    },
    divider2: {
        position: 'absolute',
        width: 1 + 'vw',
        height: 12.5 + 'vw',
        top: 38.333 + 'vw',
        left: 41.416 + 'vw',
        borderLeft: '1px solid #9f9f9f'
    }


};

export default groupStyle;







