import React from 'react';

const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  1334 /750;

const dotWidth = windowWidth * 0.02;
const dotHeight = windowHeight * 0.01;
const dotX = windowWidth * 51 / 750;
const dotY1 = windowHeight * 721 / 1334;
const dotY2 = windowHeight * 755 / 1334;
const dotY3 = windowHeight * 788 / 1334;
const dotY4 = windowHeight * 822 / 1334;
const dotY5 = windowHeight * 855 / 1334;




function Dots2(props) {
    return(
        <div>
            <div style = {{position:'absolute', width: dotWidth, height: dotHeight, top: dotY1, left: dotX, backgroundColor: ' #bfbfbf', borderRadius:  '50%'}} onClick={props.handleSwitch1} />
            <div style = {{position:'absolute', width: dotWidth, height: dotHeight, top: dotY2, left: dotX, backgroundColor: ' #bfbfbf', borderRadius:  '50%'}} onClick={props.handleSwitch2} />
            <div style = {{position:'absolute', width: dotWidth, height: dotHeight, top: dotY3, left: dotX, backgroundColor: ' #bfbfbf', borderRadius:  '50%'}} onClick={props.handleSwitch3} />
            <div style = {{position:'absolute', width: dotWidth, height: dotHeight, top: dotY4, left: dotX, backgroundColor: ' #bfbfbf', borderRadius:  '50%'}} onClick={props.handleSwitch4} />
            <div style = {{position:'absolute', width: dotWidth, height: dotHeight, top: dotY5, left: dotX, backgroundColor: ' #bfbfbf', borderRadius:  '50%'}} onClick={props.handleSwitch5} />
        </div>
    );
}

export default Dots2;