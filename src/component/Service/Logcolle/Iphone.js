import React, { Component } from 'react';
import iPhone from '../../../static/Iphone_vertical.png';
import iphoneScreen from '../../../static/Iphone_Screen.png';
import Icon from '../../../static/logcolle.png';
import sns from '../../../static/sns.png';
import Sub1 from '../../../static/sub1.png';
import Sub2 from '../../../static/sub2.png';
import Sub4 from '../../../static/sub4.png';

const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  1334 /750;

const iPhoneWidth =   277 /750 * windowWidth;
const iPhoneHeight = 559 / 1334 * windowHeight;
const iPhoneX = 73 / 750 * windowWidth;
const iPhoneY = 317 / 1334 * windowHeight;

const iPhoneScreenWidth =   246 /750 * windowWidth;
const iPhoneScreenHeight = 435 / 1334 * windowHeight;
const iPhoneScreenX = 89 / 750 * windowWidth;
const iPhoneScreenY = 377 / 1334 * windowHeight;

const iconWidth =   145 /750 * windowWidth;
const iconX = 137 / 750 * windowWidth;
const iconY = 502 / 1334 * windowHeight;



class Iphone extends Component {

    render() {
        return (
            <div className='Iphone'>
                <img src={iPhone} style={ styles.iphone} alt='iphone'/>
                <img src={iphoneScreen} style={styles.screen} alt='screen'/>
                {this.props.screen === 1 && <img src={ Icon } style={ styles.icon } alt='icon'/>}
                {this.props.screen === 2 && <img src={sns} style={styles.sns} alt='sns'/>}
                {this.props.screen === 3 && <img src={Sub1} style={styles.sns} alt='sub1'/>}
                {this.props.screen === 4 && <img src={Sub2} style={styles.sns} alt='sub2'/>}
                {this.props.screen === 5 && <img src={Sub4} style={styles.sns} alt='sub4'/>}
            </div>
        );
    }
}

const styles = {
    iphone: {
        position: 'absolute',
        width: iPhoneWidth,
        height: iPhoneHeight,
        top: iPhoneY,
        left: iPhoneX
    },
    screen: {
        position: 'absolute',
        width: iPhoneScreenWidth,
        height: iPhoneScreenHeight,
        top: iPhoneScreenY,
        left: iPhoneScreenX
    },
    icon: {
        position: 'absolute',
        width: iconWidth,
        height: iconWidth,
        top: iconY,
        left: iconX,
        zIndex: 101
    },
    sns: {
        position: 'absolute',
        width: iPhoneScreenWidth,
        height: iPhoneScreenHeight,
        top: iPhoneScreenY,
        left: iPhoneScreenX
    }
}

export default Iphone;