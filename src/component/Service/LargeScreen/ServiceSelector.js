import React, { Component } from 'react';
import ServiceElement from './ServiceElement';
import {StyleRoot} from 'radium';

const windowWidth = window.innerWidth;
const windowHeight =  windowWidth * 750 / 1200;
const selectorWidth = windowWidth *  0.457;
const selectorHeight =  windowHeight *  0.024;
function calculateMainX() {
    const  x = (windowWidth - selectorWidth)/2;
    return x;
}
const selectorX = calculateMainX();
const selectorY =  156 / 750 * windowHeight;

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
            <StyleRoot>
                <div className='selectWrapper' style =  { styles.selectWrapper }>
                    <ServiceElement
                        src = '/'
                        link = {this.state.link1}
                        handleStateChange = {this.handleClick1}
                    >
                    インタラクティブ動画
                    </ServiceElement>
                    <div style =  {{marginLeft: '8px', marginRight: '8px'}}> / </div>
                    <ServiceElement
                        src= '/selling'
                        link = {this.state.link2}
                        handleStateChange = {this.handleClick2}
                    >
                       企画書販売機
                    </ServiceElement>
                    <div style =  {{marginLeft: '8px', marginRight: '8px'}}> / </div>
                    <ServiceElement
                        src = {'/logcolle'}
                        link = {this.state.link3}
                        handleStateChange = { this.handleClick3}
                    >
                        ログコレ
                    </ServiceElement>
                    <div style =  {{marginLeft: '8px', marginRight: '8px'}}> / </div>
                    <ServiceElement
                        src = {'/lineStamp'}
                        link = { this.state.link4}
                        handleStateChange = { this.handleClick4}
                    >
                        {'   LINEスタンプ'}
                    </ServiceElement>
                </div>
            </StyleRoot>
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
        fontSize: '17.73px',
        lineHeight: '17.73px',
        textAlign: 'left',
        zIndex: 100,
        letterSpacing: '0.1em',
        '@media (max-width: 1200px) and (min-width: 801px)': {
            fontSize: '14px',
        },
        '@media (max-width: 800px) and (min-width: 701px)': {
            fontSize: '12px',
        },
        '@media (max-width: 700px)': {
            fontSize: '10px',
        }
    }
}

export default ServiceSelector;
