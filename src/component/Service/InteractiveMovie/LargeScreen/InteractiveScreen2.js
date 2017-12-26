import React, { Component } from 'react';
import Feature from '../../../../static/FEATURE.png';
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight
const interactive2Width = windowWidth * 0.674;
const interactive2Height = windowHeight *  0.491;
function CalculateX() {
    return (windowWidth - interactive2Width) / 2;
}
const interactive2X = CalculateX();
const interactive2Y = windowHeight * 220 / 750;



class InteractiveScreen2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: this.props.width * 0.674,
            interactive2X: this.calculateX(this.props.width,this.props.width * 0.674)
        };

        this.calculateX = this.calculateX.bind(this);

    }


    componentWillReceiveProps(){
        this.setState(() => {
            return {
                width: this.props.width * 0.674,
                interactive2X: this.calculateX(this.props.width,this.props.width * 0.674)
            };
        });
    }

    calculateX(window, width) {
        return (window - width) / 2;
    }

    render() {
        return (
            <img src={Feature} alt='feature' style={{...styles.img, width: this.state.width, left: this.state.interactive2X, right: this.state.interactive2X,}}/>
        );
    }
}

const styles = {
    img: {
        position: 'absolute',
        height: 'auto',
        top: interactive2Y,
        zIndex: 100
    }
}

export default InteractiveScreen2;