import React, { Component } from 'react';
import ServiceMain from './ServiceMain';


class ServiceScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page:1,
            blur:'',
            dotsColor1: '#bea0e4',
            dotsColor2: '#CEC6C6'
        };

        this.handleSwitch = this.handleSwitch.bind(this);
        this.handleGoBack = this.handleGoBack.bind(this);
    }

    handleSwitch(props) {
        console.log('switch is now active');
        this.setState(() => {
            return (
                {
                    page: 2,
                    blur: 'blur(10px)',
                    dotsColor1: '#CEC6C6',
                    dotsColor2: '#bea0e4'
                }
            );
        });
        console.log(this.state.page, this.state.blur);
    }

    handleGoBack() {
        console.log('go back to original');
        this.setState(() => {
            return (
                {
                    page: 1,
                    blur: '',
                    dotsColor1: '#bea0e4',
                    dotsColor2: '#CEC6C6'
                }
            );
        });
    }

    render() {
        return(
            <div className='serviceWrapper' style = {{position:'relative', marginTop: '100px'}}>
                <ServiceMain
                    page = {this.state.page}
                    handleSwitch = { this.handleSwitch }
                    handleGoBack = {this.handleGoBack}
                    blur = {this.state.blur}
                    color1 = {this.state.dotsColor1}
                    color2 = {this.state.dotsColor2}
                    target3 = {this.props.target3}
                    target5 = {this.props.target5}
                    target6 = {this.props.target6}
                    target7 = {this.props.target7}
                    serviceColor1 = {this.props.serviceColor1}
                    serviceColor2 = {this.props.serviceColor2}
                    serviceColor3 = {this.props.serviceColor3}
                    serviceColor4 = {this.props.serviceColor4}
                    handleServiceColor1 = {this.props.handleServiceColor1}
                    handleServiceColor2 = {this.props.handleServiceColor2}
                    handleServiceColor3 = {this.props.handleServiceColor3}
                    handleServiceColor4 = {this.props.handleServiceColor4}
                />
            </div>
        );
    }
}

export default ServiceScreen;