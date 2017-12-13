import React, { Component } from 'react';
import Title from '../../static/Works.gif';
import WorksMain from './WorksMain';
import Logo from '../../static/collage_logo_cut.jpg';

class WorksScreen extends Component {
    render() {
        return(
            <div className = 'worksWrapper' style={{ marginTop: '15%', position: 'relative', width:'60%', height: '1750px', marginLeft:'20%'}}>
                <div style = {{position: 'absolute', top: '1%',  width: '30px', height:'30px'}}>
                    <img src = {Logo} style = {{width: '30px', height:'30px'}}/>
                </div>
                <div style = {{marginBottom: '5%'}}>
                    <img src = { Title } alt='title' style = {{width:'440px', height:'102px'}}/>
                </div>
                <WorksMain />
            </div>
        );
    }
}

export default WorksScreen;