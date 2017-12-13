import React, { Component } from 'react';
import Logo from '../../static/logo.png';
import ConceptTitle from './ConceptTitle';

const windowSize = window.innerWidth;
const wrapperHight = `${2917 / 750 * 100}%`;
const conceptHeight = `${963 /750 * 100}%` ;


function calculatePositionX() {
    const x = (windowSize - 393)/(2 * windowSize);
    return x * 100;
}


class Something extends Component {
    render() {
        return(
            <div ref = {aboutWrapper => this.aboutWrapper = aboutWrapper} className="aboutWrapper"  style={styles.aboutWrapper}>
                <img src = {Logo} />
            </div>

        );
    }
}

const styles = {
    aboutWrapper: {
        width: '100%',
        height: wrapperHight
    },
    conceptWrapper: {
        position: 'relative',
        width: '100%',
        height: conceptHeight,
        backgroundColor: '#f6f6f6'
    },
    title: {
        position: 'absolute',
        width:'393px',
        height: '94px',
        top: '63px',
        transform: 'scaleY(1.0022)'
    },
    logo: {
        position: 'absolute',
        top: '18px',
        left: '16px'
    }


}

export default Something;