import React , {Component}from 'react';
import { connect } from 'react-redux';
import Map from './GoogleMap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BackgroundParticle from './BackroundParticle';
import Share from 'material-ui/svg-icons/social/share';
import Address from '../../static/address.png';
import Title from '../../static/AcessTitle.png';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
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

function calculatePositionX2() {
    return (windowWidth - img2Width) / 2;
}

const img2X = calculatePositionX2()
const img2Y = windowHeight * 200 / 750;

const img3Width = 468;
const img3Height = 93;
function calculatePositionX3() {
    return (windowWidth - img3Width) / 2;
}
const img3X = calculatePositionX3();
const img3Y = windowHeight * 41 / 750;

const img4Width = windowWidth * 0.555;
const img4Height = windowHeight * 0.6;
function calculateX4() {
    return (windowWidth - img4Width) / 2;
}
const img4X = calculateX4();
const img4Y = windowHeight * 240 / 750;



class Access extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: windowWidth,
            shareX: imgX,
            titleX: img3X,
            mapX: this.calculateX(windowWidth, windowWidth * 0.555),
            addressX: this.calculateX(windowWidth, windowWidth * 377 / 1200)
        };

        this.calculateX = this.calculateX.bind(this);
        this.img4Width = null;

    }

    componentWillMount() {
        this.img4Width = windowWidth * 0.555;
        console.log(this.img4Width);
    }

    componentWillReceiveProps() {
        console.log(this.props.window.width);
        this.setState(() => {
            return {
                width: this.props.window.width,
                shareX: this.props.window.width * 1148 / 1200,
                titleX:this.calculateX(this.props.window.width, 468),
                mapX:this.calculateX(this.props.window.width, this.img4Width),
                addressX:this.calculateX(this.props.window.width, img2Width)
            };
        });
    }

    calculateX(window, width) {
        return (window - width) / 2;
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="wrapper" style={{position: 'relative', width:100 + 'vw', height: 100 + 'vh', overflow: 'hidden'}}>
                    <BackgroundParticle width = {this.state.width} />
                    <img src = {Title} alt = 'title' style = {{...styles.title}} />
                    <img src = {Address} alt = 'address' style = {{...styles.address}}/>
                    <Map
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{height: 60 + 'vh'}}/>}
                        containerElement={<div style={{position: 'absolute', width: 55.5 + 'vw', height: '60' + 'vh', left: 22.25 + 'vw', top: 32 + 'vh'}}/>}
                        mapElement={<div style={{height: 100 + '%'}}/>}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}


function mapStateToProps(state) {
    return {
        window: state.windowsize
    };
}

const styles = {
    share: {
        position: 'absolute',
        width: 2.5 + 'vw',
        height: 4.3 + 'vh',
        left: 95.666 + 'vw',

        top: 2.666 + 'vh',
        color: '#b3b3b3'
    },
    address: {
        position: 'absolute',
        width: 37.166 + 'vw',
        height: 'auto',
        top: 22.133 + 'vh',
        left: 31.416 + 'vw'
    },
    title: {
        position: 'absolute',
        width: 32.75 + 'vw',
        left: 33.625 +'vw',
        height:'auto',
        top: 5.25 + 'vh',
    }
}



export default connect(mapStateToProps)(Access);