import React, { Component } from 'react';
import Feel1 from '../../../../static/feeling1.png';
import Feel2 from '../../../../static/feeling2.png';
import Title from '../../../../static/feelingTitle.png';
import Woman from '../../../../static/woman.svg';
import who1 from '../../../../static/who1.png';
import who2 from '../../../../static/who2.png';
import Man from '../../../../static/man.svg';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const feel1Y = windowHeight * 246 / 750;
const feel2Y = windowHeight * 254 / 750;
const titleY = windowHeight * 227 / 750;
const womanY = windowHeight * 314 / 750;
const manHeight = windowHeight * 0.157;
const manY = windowHeight * 314 / 750;
const who1Height = windowHeight * 0.055;
const who1Y = windowHeight * 457 / 750;
const who2Height = windowHeight * 0.055;
const who2Y = windowHeight * 457 / 750;

class Screen4 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            feel1Width:this.props.width * 0.293,
            feel1X: this.props.width * 83 / 1200,
            feel2Width:this.props.width * 0.304,
            feel2X: this.props.width * 785 / 1200,
            titleWidth: this.props.width * 0.164,
            titleX: this.props.width * 500 / 1200,
            womanWidth: this.props.width * 0.071,
            womanX: this.props.width * 450 / 1200,
            who1Width: this.props.width * 0.099,
            who1X: this.props.width * 433 / 1200,
            manX: this.props.width * 665 / 1200,
            manWidth: this.props.width * 0.071,
            who2Width: this.props.width * 0.099,
            who2X: this.props.width * 648 / 1200,
        };
    }

    componentWillReceiveProps(){
        this.setState(() => {
            return {
                feel1Width:this.props.width * 0.293,
                feel1X: this.props.width * 83 / 1200,
                feel2Width:this.props.width * 0.304,
                feel2X: this.props.width * 785 / 1200,
                titleWidth: this.props.width * 0.164,
                titleX: this.props.width * 500 / 1200,
                womanWidth: this.props.width * 0.071,
                womanX: this.props.width * 450 / 1200,
                who1Width: this.props.width * 0.099,
                who1X: this.props.width * 433 / 1200,
                who2Width: this.props.width * 0.099,
                who2X: this.props.width * 648 / 1200,
            };
        });
    }

    render() {
        return(
            <div>
                <img src = {Title} alt = 'title' style = {{...styles.title, width: this.state.titleWidth, left: this.state.titleX}} />
                <img src = {Feel1} alt = 'feel1' style = {{...styles.feel1, width: this.state.feel1Width, left: this.state.feel1X}} />
                <img src = {Feel2} alt = 'feel1' style = {{...styles.feel2, width: this.state.feel2Width, left: this.state.feel2X}} />
                <img src = {Woman} alt = 'woman' style = {{...styles.woman, width: this.state.womanWidth, left: this.state.womanX}} />
                <img src = {who1}  alt = 'who1' style = {{...styles.who1,  width: this.state.who1Width,  left: this.state.who1X }} />
                <img src = {Man}  alt = 'woman' style = {{...styles.man, width: this.state.manWidth, left: this.state.manX}} />
                <img src = {who2} alt = 'who2'  style = {{...styles.who2,  width: this.state.who2Width, left: this.state.who2X}} />
            </div>
        );
    }
}

const styles = {
    feel1: {
        position: 'absolute',
        height: 'auto',
        top: feel1Y
    },
    feel2: {
        position: 'absolute',
        height: 'auto',
        top: feel2Y
    },
    title: {
        position: 'absolute',
        height: 'auto',
        top: titleY
    },
    woman: {
        position: 'absolute',
        height: 'auto',
        top: womanY
    },
    man: {
        position: 'absolute',
        height: 'auto',
        top: manY
    },
    who1: {
        position: 'absolute',
        height: 'auto',
        top: who1Y
    },
    who2: {
        position: 'absolute',
        height:'auto',
        top: who2Y
    }
}

export default Screen4;