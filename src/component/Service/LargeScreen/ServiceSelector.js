import React, { Component } from 'react';
import ServiceElement from './ServiceElement';
import {StyleRoot} from 'radium';


const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const selectorWidth = 548;
const selectorHeight =  18;
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
                <div className='selectWrapper' style =  {{ ...styles.selectWrapper, left:this.props.selectorX, right: this.props.selectorX }}>
                    <ServiceElement
                        src = {this.props.src1}
                        link = {this.state.link1}
                        handleStateChange = {this.handleClick1}
                    >
                    インタラクティブ動画
                    </ServiceElement>
                    <div style =  {{marginLeft: '8px', marginRight: '8px'}}> / </div>
                    <ServiceElement
                        src= {this.props.src2}
                        link = {this.state.link2}
                        handleStateChange = {this.handleClick2}
                    >
                       企画書販売機
                    </ServiceElement>
                    <div style =  {{marginLeft: '8px', marginRight: '8px'}}> / </div>
                    <ServiceElement
                        src = {this.props.src3}
                        link = {this.state.link3}
                        handleStateChange = { this.handleClick3}
                    >
                        ログコレ
                    </ServiceElement>
                    <div style =  {{marginLeft: '8px', marginRight: '8px'}}> / </div>
                    <ServiceElement
                        src = {this.props.src4}
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
        fontFamily: 'dnp-shuei-mgothic-std',
        fontSize: '16.px',
        lineHeight: '16px',
        textAlign: 'left',
        zIndex: 100,
        letterSpacing: '0.1em',
    }
}

export default ServiceSelector;
