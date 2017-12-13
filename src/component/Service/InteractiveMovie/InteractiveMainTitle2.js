import React from 'react';

const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  1974 / 750;
const titleWidth = windowWidth * 0.633;
const titleHeight = windowHeight *  0.018;
function calculateTitleX() {
    const  x = (windowWidth - titleWidth)/2;
    return x;
}
const titleX = calculateTitleX();
const titleY = windowHeight * 1136 / 1974;



function InteractiveMainTitle2() {
    return(
        <div style = {{
            position: 'absolute',
            width: titleWidth,
            height: titleHeight,
            top: titleY,
            left: titleX,
            right: titleX,
            fontWeight: 600,
            fontFamily: 'a-otf-gothic-bbb-pr6n',
            fontSize: '18px',

        }}>
            インタラクティブ動画の特徴
        </div>
    );
}

export default InteractiveMainTitle2;