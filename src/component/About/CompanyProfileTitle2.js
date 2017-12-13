import React from 'react';
import companyProfile from '../../static/COMPANYPROFILE.png';

const windowWidth = window.innerWidth;
const windowHeight = 2917 / 750 * windowWidth;
const titleWidth = windowWidth * 0.552;
const titleHeight = windowHeight *  0.011;

function calculatePositionX() {
    const x = (windowWidth - titleWidth)
    return x / 2;
}
const titleX = calculatePositionX();
const titleY = windowHeight * 105 / 2917;


function CompanyProfileTitle2() {
    return(
        <img src = {companyProfile} alt =  'profile' style ={styles.profileTitle} />
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
        fontSize: '18px',
        color: '#2d2d2d',
        letterSpacing: '0.1em',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        fontWeight: 600
    }
};

export default CompanyProfileTitle2;