import React from 'react';


function ApplyingSteps(props) {
    return(
        <div>
            <img src = {props.src} alt = 'img' style = {props.imgStyle}/>
            <div style = { props.nameStyle}>
                {props.stepname}
            </div>
            <div style = { props.childrenStyle}>
                {props.children}
            </div>
        </div>
    );
}

export default ApplyingSteps;