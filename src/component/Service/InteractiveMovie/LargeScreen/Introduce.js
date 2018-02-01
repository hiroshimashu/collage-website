import React, { Component } from 'react';
import title1 from '../../../../static/title1.png';
import MediaQuery from 'react-responsive';
const windowWidth = 1.6 * windowHeight;
const windowHeight =  window.innerHeight;
const introWidth = windowHeight * 0.335 * 1.6;
const introHeight = windowHeight *  0.16 ;
const introX = windowWidth * 99 / 1200;
const introY = windowHeight * 283 / 750;


class Introduce extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: this.props.width * 0.335,
            introX: this.props.width * 99 /1200
        };

    }


    componentWillReceiveProps(){
        this.setState(() => {
            return {
                width: this.props.width * 0.335,
                introX: this.props.width * 99 /1200
            };
        });
    }


    render() {
        return (
            <img src={title1} alt='introduce1' className="introduce1" style={{position: 'absolute'}}/>
        );
    }
}

export default Introduce;