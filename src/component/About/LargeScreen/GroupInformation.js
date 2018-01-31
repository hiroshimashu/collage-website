import React from 'react';

function GroupInformation(props) {
    return(
        <div>
            <img src = {props.src} style = {{...props.cImage}} alt = {props.alt}/>
            <div className="divider" style = {{...props.divider}}/>
            <img src = {props.src2} className = 'name' style = {{...props.nameStyle}} />
            <img src = {props.src3} className= 'explanation' style = {{...props.exStyle}} />
        </div>
    );
}

export default GroupInformation;