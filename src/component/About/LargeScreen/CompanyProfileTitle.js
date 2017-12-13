import React from 'react';
import CompanyTitle from '../../../static/COMPANYPROFILE.png';

const windowWidth = window.innerWidth;
const windowHeight = 2744 / 1200 * windowWidth;
const titleWidth = windowWidth * 0.345;
const titleHeight = windowHeight *  0.012;
const fontSize = windowHeight / 2744 * 40;


function calculatePositionX() {
    const x = (windowWidth - titleWidth)
    return x / 2;
}
const titleX = calculatePositionX();
const titleY = windowHeight * 142 / 2744;


function CompanyProfileTitle() {
    return(
        <img style ={styles.profileTitle} src = {CompanyTitle} alt =  'companytitle'/>
    );
}

const styles = {
    profileTitle: {
        position: 'absolute',
        width: titleWidth,
        height: titleHeight,
        left: titleX,
        right: titleX,
        top: titleY,
        color: '#2d2d2d',
        letterSpacing: '0.15em',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        textAlign: 'center',
        fontWeight: 600,
        lineHeight: '41.316px',
        fontSize: '36px',
    }
};

export default CompanyProfileTitle;