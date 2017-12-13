import React from 'react';
import RightTalk from '../../../static/talk2.png';
import ScrollAnimation from 'react-animate-on-scroll';

function RightIcon() {
    return(
        <ScrollAnimation
            duration = {2}
            animateIn='fadeIn' >
            <div className="leftIcon" style = {{position: 'absolute', width: '333px', height: '263px', left:'714px',top: '-100px'}}>
                <img src = {RightTalk} alt = 'left' style = {{width:'333px', height:'263px'}} />
                <div style = {{marginTop: '-190px',marginLeft: '70px',textAlign: 'left', zIndex:2,  fontSize: '20px', lineHeight:'1.8em'}}>
                    自分は手いっぱいだし、<br/>
                    スタッフもこの内容<br/>
                    じゃ動かしづらい...。<br/>
                </div>

            </div>
        </ScrollAnimation>
    );
}

export default RightIcon;