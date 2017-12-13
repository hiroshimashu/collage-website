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



function InteractiveMain2(props) {
    return(
        <div style = {{
            display: 'flex'
        }}>
            <img src =  {props.src} style = {props.imgStyle}/>
            <div style = {props.exStyle}>{props.children}</div>
        </div>
    );
}

export default InteractiveMain2;