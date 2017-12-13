import React from 'react';


function VoiceFromCustomer(props) {
    return(
        <div>
            <img src = {props.src} style = {props.imgStyle}/>
            <div style = {props.divStyle}>
                {props.children}
            </div>
        </div>
    );
}

export default VoiceFromCustomer;