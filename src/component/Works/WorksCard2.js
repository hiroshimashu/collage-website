import React from 'react';
import {StyleRoot} from'radium';

function WorksCard2(props) {
    return(
        <StyleRoot>
            <div>
                <img className= 'img' src =  {props.src1} alt = {props.src1} key ={props.src1} style = {props.imgStyle}/>
                <img className="title" src =  {props.src2} alt = {props.src2} key = {props.src2} style =  {props.titleStyle} />
                {props.background && <div style = {props.background} />}
            </div>
        </StyleRoot>
    );
}

export default WorksCard2;