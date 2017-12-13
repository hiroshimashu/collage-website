import React from 'react';
import LeftTalk from '../../../static/talk1.png';
import ScrollAnimation from 'react-animate-on-scroll';

function LeftIcon() {
    return(
        <ScrollAnimation
            duration = {1}
            animateIn='fadeIn' >
            <div className="leftIcon" style = {{position: 'absolute', width: '333px', height: '263px', top: '-150px'}}>
                <img src = {LeftTalk} alt = 'left' style = {{width:'333px', height:'263px', zIndex:1}} />
                <div style = {{marginTop: '-190px',marginLeft: '50px',textAlign: 'left', zIndex:2,  fontSize: '20px', lineHeight:'1.8em'}}>
                    明日までに<br/>
                    クライアントに<br/>
                    企画書を提出しないと<br/>
                    いけない!<br/>
                </div>
            </div>
        </ScrollAnimation>
    );
}

export default LeftIcon;