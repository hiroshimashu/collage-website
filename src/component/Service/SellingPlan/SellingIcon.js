import React from 'react';
import LeftIcon from './LeftIcon';
import RightIcon from './RightIcon';
import MainIcon from '../../../static/SellingMain.gif';

function SellingIcon() {
    return(
        <div style = {{position: 'absolute', top:'200px', width:'100%', height: '320px',display:'flex', left: '13%'}}>
            <LeftIcon />
            <div className="mainIcon" style = {{position: 'absolute', width: '384px', height: '194px', left:'333px'}}>
                <img src = {MainIcon} alt = 'main' style = {{width:'384px', height:'194px'}} />
            </div>
            <RightIcon />
        </div>
    );
}

export default SellingIcon;