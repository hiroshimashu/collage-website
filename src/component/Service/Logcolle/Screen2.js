import React, { Component } from 'react';
import Top from '../../../static/sns.png';

class Screen2 extends Component {
    render() {
        return(
            <div className="screenWrapper" style = {{ position:'absolute',  width: '170px', height:'300px', left: '25.5%', top: '245px'}}>
                <img src = {Top} alt = 'top' style = {{ width: '170px', height:'300px'}}/>
            </div>
        );
    }
}

export default Screen2;