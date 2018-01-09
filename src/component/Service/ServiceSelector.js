import React, { Component } from 'react';
import ServiceElement from './ServiceElement';

const windowWidth = window.innerWidth;
const windowHeight =  windowWidth *  1974 / 750;
const selectorWidth = windowWidth *  0.933;
const selectorHeight =  windowHeight *  0.012;
function calculateMainX() {
    const  x = (windowWidth - selectorWidth)/2;
    return x;
}
const selectorX = calculateMainX();
const selectorY =  258 / 1974 * windowHeight;

class ServiceSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link1: '#8f82bd',
            link2: '#000000',
            link3: '#000000',
            link4: '#000000'
        };

        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
    }

    componentDidUpdate() {
        console.log(this.state);
    }


    handleClick1() {
        console.log('fired');
        this.setState({
            link1: '#8f82bd',
            link2: '#000000',
            link3: '#000000',
            link4: '#000000'
        });
    }

    handleClick2() {
        console.log('fired');
        this.setState(prevState => {
            return {
                link1: '#000000',
                link2: '#8f82bd',
                link3: '#000000',
                link4: '#000000'
            };
        });
    }

    handleClick3() {
        this.setState({
            link1: '#000000',
            link2: '#000000',
            link3: '#8f82bd',
            link4: '#000000'
        });
    }

    handleClick4() {
        this.setState({
            link1: '#000000',
            link2: '#000000',
            link3: '#000000',
            link4: '#8f82bd'
        });
    }




    render() {
        return(
            <div className='selectWrapper' style =  { styles.selectWrapper }>
                <ServiceElement
                    src = '/service/interactive'
                    link = {this.state.link1}
                    handleStateChange = {this.handleClick1}
                >
                    インタラクティブ動画
                </ServiceElement>
                <div style =  {{marginLeft: '8px', marginRight: '8px'}}> / </div>
                <ServiceElement
                    src = '/service/selling'
                    link = {this.state.link2}
                    handleStateChange = {this.handleClick2}
                >
                    企画書販売機
                </ServiceElement>
                <div style =  {{marginLeft: '8px', marginRight: '8px'}}> / </div>
                <ServiceElement
                    src = {'/service/logcolle'}
                    link = {this.state.link3}
                    handleStateChange = { this.handleClick3}
                >
                    ログコレ
                </ServiceElement>
                <div style =  {{marginLeft: '8px', marginRight: '8px'}}> / </div>
                <ServiceElement
                    src = {'/service/line'}
                    link = { this.state.link4}
                    handleStateChange = { this.handleClick4}
                >
                    {'   LINEスタンプ'}
                </ServiceElement>
            </div>
        );
    }
}

const styles =  {
    selectWrapper: {
        display: 'flex',
        position: 'absolute',
        width:selectorWidth,
        height: selectorHeight,
        top: selectorY,
        left: selectorX,
        right: selectorX,
        fontFamily: 'dnp-shuei-mgothic-std',
        fontSize: '10px',
        lineHeight: '11px',
        textAlign: 'left',
        zIndex: 100
    },

}

export default ServiceSelector;
