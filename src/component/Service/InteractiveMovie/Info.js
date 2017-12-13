import React, { Component } from 'react';
import Mail from '../../../static/info.svg';

class Info extends Component {
    render() {
        return(
            <div style = {{ position:'absolute', left: '38%', top: '620px', width: '316px', height:'36px',display: 'flex', textAlign:'center'}}>
                <img src = { Mail } alt = 'mail' style = {{widt:'36px',width:'36px'}} />
                <div className = 'infoWrapper' style ={{ fontSize:'28px'}}>
                  お問い合わせはこちら
                </div>
            </div>
        );
    }
}

export default Info;