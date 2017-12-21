import React from 'react';

function GroupInformation(props) {
    return(
        <div>
            <img src = {props.src} style = {{...props.cImage, left: props.groupX1}} alt = {props.alt}/>
            <div className="divider" style = {{...props.divider, left: props.dividerX}}/>
            <img src = {props.src2} className = 'name' style = {{...props.nameStyle, left:props.groupX2}} />
            <img src = {props.src3} className= 'explanation' style = {{...props.exStyle, left: props.groupX3}} />
        </div>
    );
}

export default GroupInformation;