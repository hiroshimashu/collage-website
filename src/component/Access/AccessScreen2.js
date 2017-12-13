import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../index.css';
import AccessTitle from './AccessTitle2';
import BackgroundParticle from '../About/BackroundParticle';
import Menu from '../Service/InteractiveMovie/Menu';
import Logo from '../Service/InteractiveMovie/Logo';
import Map from './GoogleMap';


const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  1334 /750;
const MapHeight =  windowHeight * 0.55;
const titleX = windowWidth *  0.40;
const titleY = windowWidth * 0.43;
const placeX = windowWidth * 0.23;
const placeY = windowHeight * 0.30;

const Fade = ({ children, ...props }) => (
    <CSSTransition
        {...props}
        timeout={1000}
        classNames="fade"
    >
        {children}
    </CSSTransition>
);



class AccessScreen2 extends Component{
    constructor(props){
        super(props);

        this.state = { show: false };

        setTimeout(() => {
            this.setState({show: !this.state.show});
        }, 0);
    }

    render() {
        return (
            <Fade in = { this.state.show}>
            <div style = {styles.mapWrapper}>
                <AccessTitle />
                <Logo />
                <div style = {styles.placeTitle}>
                    所在地
                </div>
                <div style = {styles.place}>
                    〒106-0032 東京都港区六本木5-9-20
                </div>
                <BackgroundParticle height ={windowHeight}/>
                <Map
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{height: MapHeight}}/>}
                    containerElement={<div style={{height: MapHeight, width: '90%', top: '40%' ,position: 'absolute', left: '5%'}}/>}
                    mapElement={<div style={{height: '100%'}}/>}
                />
            </div>
            </Fade>
        );
    }
}

const styles = {
    mapWrapper: {
        position: 'relative',
        width: windowWidth,
        height: windowHeight
    },
    placeTitle: {
        position: 'absolute',
        top: titleY,
        left: titleX,
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        fontWeight: 600
    },
    place: {
        position: 'absolute',
        top: placeY,
        left: placeX,
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        color: '#484848',
        fontSize: '11px'
    }
};

export default AccessScreen2;