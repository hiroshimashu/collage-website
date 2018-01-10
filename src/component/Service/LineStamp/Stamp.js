import React from 'react';

const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  1334 /750;

const wrapperWidth = windowWidth * 0.245;
const wrapperX = windowWidth * 142 / 750;
const wrapperY = windowHeight * 354 / 1334;



function Stamp(props) {
    return(
        <div style = {{ display: 'flex'}}>
            <div>
                <div style = { props.wrapper}/>
                <img style = { props.imgStyle } src = { props.src } alt = 'img' />
            </div>
            <div>
                <img src = {props.src2} style = {props.nameStyle} />
                <img src = {props.src3} style = {props.childStyle} />
            </div>
        </div>
    );
}

export default Stamp;