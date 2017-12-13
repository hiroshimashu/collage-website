import React, { Component } from 'react';
import Sub4 from '../../../static/sub4.png';

class Screen5 extends Component {
    render() {
        return(
            <div className="screenWrapper" style = {{ position:'absolute',  width: '170px', height:'300px', left: '25.5%', top: '245px'}}>
                <img src = {Sub4} alt = 'top' style = {{ width: '170px', height:'300px'}}/>
            </div>
        );
    }
}

export default Screen5;