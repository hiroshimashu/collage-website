import React, { Component } from 'react';
import Price from '../../../../static/price.png';
import '../../../../service.css';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const priceY = windowHeight * 228  / 750;


class Screen3 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            priceWidth: this.props.width * 767 / 1200,
            priceX: this.props.width * 215 / 1200,
        };
    }

    componentWillReceiveProps(){
        this.setState(() => {
            return {
                priceWidth: this.props.width * 767 / 1200,
                priceX: this.props.width * 215 / 1200,
            };
        });
    }

    render() {
        return(
            <img src = {Price} alt = 'price' style = {{...styles.price}} className = 'price'/>
        );
    }
}

const styles = {
    price: {
        position: 'absolute',
        width: 767,
        height:354,
        top:228,
        left: 'calc(50vw - 383.5px)'
    }
}

export default Screen3;