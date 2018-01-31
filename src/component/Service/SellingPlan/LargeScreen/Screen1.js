import React, { Component } from 'react';
import SellingMain from '../../../../static/SellingMain.gif';
import SellingTitle from '../../../../static/SellingTitle.png';
import LeftTalk from '../../../../static/leftTalk.png';
import RightTalk from '../../../../static/rightTalk.png';
import { CSSTransition } from 'react-transition-group';
import '../../../../index.css';
import '../../../../service.css';



const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const titleWidth = windowWidth * 0.363;
function calculatePositionX() {
    const x = (windowWidth - titleWidth)
    return x / 2;
}
const titleX = calculatePositionX()
const titleY = windowHeight * 222 / 750;

const mainWidth = windowWidth * 0.32;
function calculateMainPositionX() {
    const x = (windowWidth - mainWidth)
    return x / 2;
}
const mainX = calculateMainPositionX()
const mainY = windowHeight * 375 / 750;

const leftWidth = windowWidth * 0.246;
const leftHeight = windowHeight * 0.296;
const leftX = 96 / 1200 * windowWidth;
const leftY = windowHeight * 269 / 750;

const rightWidth = windowWidth * 0.246;
const rightHeight = windowHeight * 0.296;
const rightX = 832 / 1200 * windowWidth;
const rightY = windowHeight * 311 / 750;

const Slide = ({ children, ...props }) => (
    <CSSTransition
        {...props}
        timeout={1000}
        classNames="slide"
        unmountOnExit={true}
    >
        {children}
    </CSSTransition>
);





class Screen1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: this.props.width,
            mainWidth:this.props.width * 0.32,
            mainX: this.calculateX(this.props.width, this.props.width * 0.32),
            titleWidth:this.props.width * 0.363,
            titleX: this.calculateX(this.props.width, this.props.width * 0.363),
            leftWidth:this.props.width * 0.246,
            leftX: this.props.width * 96 / 1200,
            rightWidth: this.props.width * 0.246,
            rightX: this.props.width * 832 / 1200
        };
        this.calculateX = this.calculateX.bind(this);
    }

    componentWillReceiveProps(){
        this.setState(() => {
            return {
                width: this.props.width,
                mainWidth:this.props.width * 0.32,
                mainX: this.calculateX(this.props.width, this.props.width * 0.32),
                titleWidth:this.props.width * 0.363,
                titleX: this.calculateX(this.props.width, this.props.width * 0.363),
                leftWidth:this.props.width * 0.246,
                leftX: this.props.width * 96 / 1200,
                rightWidth: this.props.width * 0.246,
                rightX: this.props.width * 832 / 1200
            };
        });
    }

    calculateX(window, width) {
        return (window - width) / 2;
    }

    render() {
        return(
            <div className = 'sellingPlanScreen1Wrapper'
                 style ={{
                     position: 'absolute',
                     width: 1023,
                     height: 341,
                     left: 'calc(50vw - 511.5px)',
                     top: 222
                 }}
            >
                <img src ={ SellingMain } className="sellingMain" style = {styles.main}/>
                <img src ={ SellingTitle } className="sellingTitle" style = {{...styles.title}}/>
                <img src ={ LeftTalk }  className = 'sellingLeft' style = {{...styles.left}}/>
                <img src ={ RightTalk } className = 'sellingRight' style = {{...styles.right}}/>
            </div>
        );
    }
}

const styles = {
    main: {
        position: 'absolute',
        width: 384,
        height: 188,
        top: 153,
        left: 320
    },
    title: {
        position: 'absolute',
        width: 436,
        height: 89,
        top: 0,
        left: 283
    },
    left: {
        position: 'absolute',
        width: 287,
        height: 214,
        top:47,
        left: 0
    },
    right: {
        position: 'absolute',
        width: 287,
        height:214,
        top: 89,
        left: 736
    }
}

export default Screen1;