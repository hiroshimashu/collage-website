import React from 'react';

function GroupInformation2(props) {
    return(
        <div>
            <img src = {props.src1} style = {props.cImage}/>
            <img src = {props.src2} className = 'name' style = {props.nameStyle} />
            <img src = {props.src3} className= 'explanation' style = {props.exStyle} />
        </div>
    );
}

export default GroupInformation2;