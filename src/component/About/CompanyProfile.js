import React, { Component } from 'react';
import CompanyInformaiton from './CompanyInformation';
import Building from '../../static/building.svg';
import Placeholder from '../../static/placeholder.svg';
import Calender from '../../static/calendar.svg';
import User from '../../static/user.svg';
import Coin from '../../static/coins.svg';
import Calculator from '../../static/calculator.svg';
import Bank from '../../static/bank.svg';
import Contracts from '../../static/contract.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import BackgroundParticle from './BackroundParticle';

// After get resource, You need to use map function to create information

class CompanyProfile extends Component{
    constructor(props) {
        super(props);

        this.state = {
            hover:'out'
        };

        this.changeColor = this.changeColor.bind(this);
        this.resetColor = this.resetColor.bind(this);
    }

    changeColor() {
        console.log('hover')
        this.setState({
            hover: 'in'
        });
    }

    resetColor() {
        console.log('out')
        this.setState({
            hover: 'out'
        });
    }

    render() {
        return (
            <div style={{position:'relative', width: '60%', height: '720px', top:'720px', marginLeft: '20%'}}>
                <div style ={{fontFamily: 'Raleway, sans-serif', fontSize: '40px', letterSpacing: '0.1em', position: 'absolute', width: '100%', top:'10%'}}>
                    COMPANY PROFILE
                </div>
                <div style = {{ position:'absolute',left:'30%', top: '25%',width:'30px', height: '700px', borderRight:'1px solid black'}} />
                <BackgroundParticle height = {800}/>
                <div className='informationWrapper' style = {{position:'absolute', width: '100%', height:'600px', top:'25%', left: '25%'}}>
                    <ScrollAnimation animateIn='bounceInRight'>
                    <CompanyInformaiton
                        subtitle="社名"
                        information="株式会社コラージュ"
                        src={Building}
                        switch = {this.state.hover}
                        mouseEnter={this.changeColor}
                        mouseLeave={this.resetColor}
                        left =  '-10%'
                    />
                    <CompanyInformaiton
                        subtitle="場所"
                        information="〒106-0032 東京都港区六本木　5-9-20"
                        src={Placeholder}
                        switch = {this.state.hover}
                        mouseEnter={this.changeColor}
                        mouseLeave={this.resetColor}
                        left =  '-10%'
                    />
                    <CompanyInformaiton
                        subtitle="社名"
                        information="株式会社コラージュ"
                        src={Calender}
                        switch = {this.state.hover}
                        mouseEnter={this.changeColor}
                        mouseLeave={this.resetColor}
                        left =  '-10%'
                    />
                    <CompanyInformaiton
                        subtitle="代表者"
                        information="和田嘉吉郎"
                        src={User}
                        switch = {this.state.hover}
                        mouseEnter={this.changeColor}
                        mouseLeave={this.resetColor}
                        left =  '-10%'
                    />
                    <CompanyInformaiton
                        subtitle="資本金"
                        information="800万"
                        src={Coin}
                        switch = {this.state.hover}
                        mouseEnter={this.changeColor}
                        mouseLeave={this.resetColor}
                        left =  '-10%'
                    />
                    <CompanyInformaiton
                        subtitle="決済月"
                        information="1月"
                        src={Calculator}
                        switch = {this.state.hover}
                        mouseEnter={this.changeColor}
                        mouseLeave={this.resetColor}
                        left =  '-10%'
                    />
                    <CompanyInformaiton
                        subtitle="取引き先銀行"
                        information="みずほ銀行"
                        src={Bank}
                        switch = {this.state.hover}
                        mouseEnter={this.changeColor}
                        mouseLeave={this.resetColor}
                        left =  '-17%'
                    />
                    <CompanyInformaiton
                        subtitle="業務内容"
                        information="広告・宣伝に関する業務 + α"
                        src={Contracts}
                        switch = {this.state.hover}
                        mouseEnter={this.changeColor}
                        mouseLeave={this.resetColor}
                        left =  '-13%'
                    />
                  </ScrollAnimation>
                </div>

            </div>
        );
    }
}

export default CompanyProfile;