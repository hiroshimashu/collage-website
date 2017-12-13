import React, { Component } from 'react';
import Iphone5 from '../../../static/Iphone.png';

class Iphone extends Component {
    render() {
        return(
            <div className="iphone" style = {{ position: 'absolute', left:'45%', top: '66px', height:'308px', width:'622px' }}>
                <img src = { Iphone5 } style = {{ height: '308px', width:'622px'}}/>
            </div>
        );
    }
}

export default Iphone;