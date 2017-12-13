import React, { Component } from 'react';
import Sub1 from '../../../static/sub1.png';

class Screen3 extends Component {
    render() {
        return(
            <div className="screenWrapper" style = {{ position:'absolute',  width: '170px', height:'300px', left: '25.5%', top: '245px'}}>
                <img src = {Sub1} alt = 'top' style = {{ width: '170px', height:'300px'}}/>
            </div>
        );
    }
}

export default Screen3;