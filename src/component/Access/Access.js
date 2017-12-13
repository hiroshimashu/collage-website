import React , {Component}from 'react';
import Map from './GoogleMap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Logo from '../Top/LargeScreen/Logo';
import BackgroundParticle from '../About/BackroundParticle';
import Share from 'material-ui/svg-icons/social/share';
import Address from '../../static/address.png';
import Title from '../../static/AcessTitle.png';

const windowWidth = window.innerWidth;
const windowHeight = 750 / 1200  * windowWidth;
const imgWidth = windowWidth * 0.025;
const imgHeight = windowHeight * 0.043;
const imgX = 1148 / 1200 * windowWidth;
const imgY = windowHeight * 20 / 750;

const img2Width = 377 /1200 * windowWidth;
const img2Height = 16 / 750 * windowHeight
function calculatePositionX() {
    const x = (windowWidth - imgWidth)
    return x / 2;
}

const img2X = 56 / 1200 * windowWidth;
const img2Y = windowHeight * 396 / 750;

const img3Width = 468;
const img3Height = 93;
const img3X = 342 / 1200 * windowWidth;
const img3Y = windowHeight * 41 / 750;

const img4Width = windowWidth * 0.555;
const img4Height = windowHeight * 0.517;
const img4X = 480 / 1200 * windowWidth;
const img4Y = windowHeight * 217 / 750;



class Access extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="wrapper" style={{position: 'relative', width: windowWidth, height: windowHeight}}>
                    <BackgroundParticle height ={windowHeight}/>
                    <img src = {Title} alt = 'title' style = {styles.title} />
                    <Share style = {styles.share} />
                    <Logo />
                    <img src = {Address} alt = 'address' style = {styles.address}/>
                    <Map
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{height: imgHeight}}/>}
                        containerElement={<div style={{height: img4Height, width: img4Width, top: img4Y ,position: 'absolute', left: img4X}}/>}
                        mapElement={<div style={{height: '100%'}}/>}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    share: {
        position: 'absolute',
        width: imgWidth,
        height: imgHeight,
        left: imgX,
        right: imgX,
        top: imgY,
        color: '#b3b3b3'
    },
    address: {
        position: 'absolute',
        width: img2Width,
        height: img2Height,
        left: img2X,
        right: img2X,
        top: img2Y,
    },
    title: {
        position: 'absolute',
        width: img3Width,
        height: img3Height,
        left: img3X,
        right: img3X,
        top: img3Y,
    }
}



export default Access;