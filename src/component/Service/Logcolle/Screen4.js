import React, { Component } from 'react';
import Sub2 from '../../../static/sub2.png';

class Screen4 extends Component {
    render() {
        return(
            <div className="screenWrapper" style = {{ position:'absolute',  width: '170px', height:'300px', left: '25.5%', top: '245px'}}>
                <img src = {Sub2} alt = 'top' style = {{ width: '170px', height:'300px'}}/>
            </div>
        );
    }
}

export default Screen4;