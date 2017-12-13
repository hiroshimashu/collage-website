import React from 'react';

function Message() {
    return(
        <div className = 'message' style = {{ position:'absolute', width:'450px', height:'308px', top:'98px', left:'10%'}}>
            <div style = {{ position:'relative',fontWeight:'bold', letterSpacing:'2px', fontSize: '42.67px', textAlign:'left'}}>
               スマホ上で
            </div>
            <div style = {{ position:'relative', fontWeight:'bold', letterSpacing:'2px', textAlign:'left', fontSize: '58.19px', color: 'rgba(125, 65, 201, 0.7)'}}>
                ”触って変わる”
            </div>
            <div style = {{ position:'relative', marginLeft: '100px', fontWeight:'bold',  letterSpacing:'2px', textAlign:'left', fontSize: '42.67px'}}>
                新感覚ムービー
            </div>
        </div>
    );
}

export default Message;