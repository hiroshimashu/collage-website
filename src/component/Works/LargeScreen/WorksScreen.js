import React, { Component } from 'react';
import { connect } from 'react-redux';
import WorksCard from './WorksCard';
import { CSSTransition } from 'react-transition-group';
import '../../../index.css';
import WorksTitle from '../../../static/WorksTitle.png';
import BackgroundParticle from './BackroundParticle';



const windowWidth = window.innerWidth;
const windowHeight = 2246 / 1200  * windowWidth * 0.94;


const titleWidth = 430;
const titleHeight = 93;
function calculateTitleX() {
    const width = (windowWidth - titleWidth) / 2;
    return width;
}
const titleX = calculateTitleX();
const titleY = 58 / 2246 *  windowHeight;


const logoWidth = windowWidth * 0.035;
const logoX = 15 / 1200 * windowWidth;
const logoY = 20 / 2246  *  windowHeight;

const menuWidth = windowWidth * 0.061;
const menuHeight =  windowHeight * 0.007;
const menuX = 17 / 750 * windowWidth;
const menuY = 134 / 4653 * windowHeight;

const Fade = ({ children, ...props }) => (
    <CSSTransition
        {...props}
        timeout={1000}
        classNames="fade"
    >
        {children}
    </CSSTransition>
);


class WorksScreen extends Component {
    constructor(props){
        super(props);

        this.state = {
            width: this.props.window.width,
            titleX: this.calculateX(this.props.window.width, titleWidth),

        };

        this.calculateX = this.calculateX.bind(this);

    }

    componentWillReceiveProps() {
        this.setState(() => {
            return {
                width: this.props.window.width,
                titleX: this.calculateX(this.props.window.width, titleWidth),
            };
        });
    }


    calculateX(window, width) {
        return (window - width) / 2;
    }


    render() {
        return(

            <div className="worksWrapper" style = {{...styles.worksWrapper}}>
                <img src = {WorksTitle} style = {{...styles.title}} />
                <BackgroundParticle />
                <WorksCard width ={this.state.width} />
            </div>
        );
    }
}

const styles = {
    worksWrapper: {
        position: 'relative',
        width: 100 + 'vw',
        height: 242.293 + 'vw',
        overflow: 'hidden'
    },
    title: {
        position: 'absolute',
        width: 32.75 + 'vw',
        left: 33.625 +'vw',
        height:'auto',
        top: 5.25 + 'vw',
    },
    logo: {
        position: 'absolute',
        width: logoWidth,
        height: logoWidth,
        top: logoY,
        left: logoX,
    },
    menu: {
        position: 'absolute',
        width: menuWidth,
        height: menuHeight,
        top: menuY,
        left:menuX
    }
}

function mapStateToProps(state) {
    return {
        window: state.windowsize
    };
}

export default connect(mapStateToProps)(WorksScreen);