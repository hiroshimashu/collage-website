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
        width: cImage1Width,
        height: 'auto',
        top: cImage1Y,
    },
    name1: {
        position: 'absolute',
        width: companyName1Width,
        height: 'auto',
        top: companyName1Y,
    },
    exStyle1: {
        position: 'absolute',
        width: companyMain1Width,
        height: 'auto',
        top: companyMain1Y,
    },
    cImage2: {
        position: 'absolute',
        width: cImage2Width,
        height: 'auto',
        top: cImage2Y,
    },
    name2: {
        position: 'absolute',
        width: companyName2Width,
        height:'auto',
        top: companyName2Y,
    },
    exStyle2: {
        position: 'absolute',
        width: companyMain2Width,
        height:'auto',
        top: companyMain2Y,
    },
    divider1: {
        position: 'absolute',
        width: dividerWidth,
        height: dividerHeight,
        top: dividerY,
        borderLeft: '1px solid #9f9f9f'
    },
    divider2: {
        position: 'absolute',
        width: dividerWidth,
        height: dividerHeight,
        top: divider2Y,
        borderLeft: '1px solid #9f9f9f'
    }


};

export default groupStyle;







