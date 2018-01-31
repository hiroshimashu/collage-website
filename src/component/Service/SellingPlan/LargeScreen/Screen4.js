import React, { Component } from 'react';
import Feel1 from '../../../../static/feeling1.png';
import Feel2 from '../../../../static/feeling2.png';
import Title from '../../../../static/feelingTitle.png';
import Woman from '../../../../static/woman.svg';
import who1 from '../../../../static/who1.png';
import who2 from '../../../../static/who2.png';
import Man from '../../../../static/man.svg';
import Link from '../../../../static/link.png';
import '../../../../service.css';

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
            <div className = 'sellingPlanScreen4' style = {{
                position: 'absolute',
                width: 1067,
                height: 341,
                top: 227,
                left: 'calc(50vw - 533.5px)'
            }}>
                <img src = {Title} alt = 'title' style = {{...styles.title}} className="serviceScreen4Title"/>
                <img src = {Feel1} alt = 'feel1' style = {{...styles.feel1}} className = 'feel1'/>
                <img src = {Feel2} alt = 'feel2' style = {{...styles.feel2}} className = 'feel2'/>
                <img src = {Woman} alt = 'woman' style = {{...styles.woman}} className = "woman" />
                <img src = {who1}  alt = 'who1' style = {{...styles.who1}}   className = "who1"/>
                <img src = {Man}  alt = 'woman' style = {{...styles.man}}    className = "man"/>
                <img src = {who2} alt = 'who2'  style = {{...styles.who2}}   className = "who2"/>
                <img src = {Link} alt = 'link'  style = {{...styles.link}}   className = "link"/>
            </div>
        );
    }
}

const styles = {
    feel1: {
        position: 'absolute',
        width: 351,
        height: 314,
        top: 19,
        left:0
    },
    feel2: {
        position: 'absolute',
        width:365,
        height:314,
        top:27,
        left: 702
    },
    title: {
        position: 'absolute',
        width:197,
        height: 27,
        top:0,
        left: 417,
    },
    woman: {
        position: 'absolute',
        width:85,
        height: 118,
        top:87,
        left: 367
    },
    man: {
        position: 'absolute',
        width: 85,
        height: 118,
        top: 87,
        left: 582
    },
    who1: {
        position: 'absolute',
        width:119,
        height:41,
        top: 230,
        left: 350
    },
    who2: {
        position: 'absolute',
        width: 119,
        height:41,
        top: 230,
        left: 565
    },
    link: {
        position: 'absolute',
        width: 292,
        height:16,
        top: 319,
        left: 379
    }

}

export default Screen4;