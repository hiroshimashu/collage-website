import React, { Component } from 'react';
import Title from '../../../static/Service.gif';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SubTitle from  '../SubTitle';
import Dots_Selling from './Dots_Selling';
import Share from '../../../static/share.svg';
import UrgentPlan from './UrgentPlan';
import SellingIcon from './SellingIcon';
import Info from '../InteractiveMovie/Info';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Logo from '../../../static/collage_logo_cut.jpg';


class SellingMain extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <MuiThemeProvider>
                <div className = 'serviceMain' style={{position: 'relative', width: '100%', marginTop: '-50px',height:'700px', backgroundColor:'rgba(255,197,217, 0.4)'}}>
                    <div style = {{position: 'absolute', top: '2%', left:'30%', width: '540px', height:'110px'}}>
                        <img src = {Title} style = {{width: '540px', height:'110px'}}/>
                    </div>
                    <SubTitle
                        target3 = {this.props.target3}
                        target5 = {this.props.target5}
                        target6 = {this.props.target6}
                        target7 = {this.props.target7}
                        serviceColor1= '#CEC6C6'
                        serviceColor2= '#bea0e4'
                        serviceColor3= '#CEC6C6'
                        serviceColor4= '#CEC6C6'
                    />
                    <div style = {{position: 'absolute', top: '2%', left:'2%', width: '30px', height:'30px'}}>
                        <img src = {Logo} style = {{width: '30px', height:'30px'}}/>
                    </div>
                    <div className="share" style={{position:'absolute', width:'32px', height:'32px', top:'2%', right:'2%'}}>
                        <img src = { Share } style = {{width:'32px', height:'32px'}}/>
                    </div>
                    <Dots_Selling
                        handleGoBack = {this.props.handleGoBack}
                        handleSwitch1 = {this.props.handleSwitch1}
                        handleSwitch2 = {this.props.handleSwitch2}
                        handleSwitch3 = {this.props.handleSwitch3}
                        color1 = {this.props.color1}
                        color2 = {this.props.color2}
                        color3 = {this.props.color3}
                        color4 = {this.props.color4}
                    />
                    <div className="contents" style = {{ position: 'absolute', width:'100%', height:'400px', marginTop:'150px', filter: `${this.props.blur}`}}>
                        <UrgentPlan />
                        <SellingIcon />
                    </div>
                    {this.props.page === 2 && <Screen2 />}
                    {this.props.page === 3 && <Screen3 /> }
                    {this.props.page ===4  && <Screen4  hover1 = {this.props.hover1} offHover1 = {this.props.offHover1} hoverColor1 = {this.props.hoverColor1} hover2 = {this.props.hover2} offHover2 = {this.props.offHover2} hoverColor2 = {this.props.hoverColor2}/> }
                    <div className= 'info' style = {{ position: 'relative', width: '100%', height:'30px', marginTop: '5%', fontSize:'100%'}}>
                        <Info />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default SellingMain;



