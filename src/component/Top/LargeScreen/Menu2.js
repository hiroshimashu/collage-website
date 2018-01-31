import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuList from './MenuList';
import '../../../index.css';
import Close from '../../../static/close.svg';
import MenuStyle1 from './MenuStyle1';
import MenuStyle2 from './MenuStyle2';
import MenuStyle3 from './MenuStyle3';
import MenuStyle4 from './MenuStyle4';
import MenuStyle5 from './MenuStyle5';

const windowWidth =  window.innerWidth;
const windowHeight = window.innerHeight;
const wrapperWidth = windowWidth * 0.350;


class Menu extends Component{
    constructor(props) {
        super(props);
    }


    render() {
        let visibility = this.props.showMenu.toString();


        return(
            <div id="menuWrapper" className = {visibility} style = { styles.wrapper }>
                <Link to= '/'  onClick = {this.props.onHandleClick}>
                    <MenuList
                        mainStyle = {MenuStyle1.mainStyle}
                        imgStyle = {MenuStyle1.imgStyle}
                        lineStyle = {MenuStyle1.lineStyle}
                        onClick = {this.props.handleClick}
                    >
                        HOME
                    </MenuList>
                </Link>
                <Link to= '/about'  onClick = {this.props.onHandleClick}>
                    <MenuList
                        mainStyle = {MenuStyle2.mainStyle}
                        imgStyle = {MenuStyle2.imgStyle}
                        lineStyle = {MenuStyle2.lineStyle}
                    >
                        ABOUT
                    </MenuList>
                </Link>

                <Link to = '/works' onClick = {this.props.onHandleClick}>
                    <MenuList
                        mainStyle = {MenuStyle3.mainStyle}
                        imgStyle = {MenuStyle3.imgStyle}
                        lineStyle = {MenuStyle3.lineStyle}
                    >
                        WORKS
                    </MenuList>
                </Link>

                <Link to = '/service' onClick = {this.props.onHandleClick}>
                    <MenuList
                        mainStyle = {MenuStyle4.mainStyle}
                        imgStyle = {MenuStyle4.imgStyle}
                        lineStyle = {MenuStyle4.lineStyle}
                    >
                        SERVICE
                    </MenuList>
                </Link>

                <Link to = '/access' onClick = {this.props.onHandleClick}>
                    <MenuList
                        mainStyle = {MenuStyle5.mainStyle}
                        imgStyle = {MenuStyle5.imgStyle}
                        lineStyle = {MenuStyle5.lineStyle}
                    >
                        ACCESS
                    </MenuList>
                </Link>
                <img src = {Close} style = {styles.close} onClick = {this.props.onHandleClick}/>
            </div>

        );
    }
}

const styles = {
    wrapper: {
        position: 'fixed',
        width: 35.0 + 'vw',
        height: windowHeight,
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
        transition: 'transform .7s ease-in-out',
        zIndex: 1000
    },
    close: {
        position: 'fixed',
        width: 2.5 + 'vw',
        height: 'auto',
        marginLeft: 33.75 + 'vw',
        zIndex: 1000
    }
}

export default Menu;