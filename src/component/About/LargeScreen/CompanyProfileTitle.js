import React from 'react';
import CompanyTitle from '../../../static/COMPANYPROFILE.png';

const windowWidth = window.innerWidth;
const windowHeight = 2744 / 1200 * windowWidth;
const titleWidth = 414
const titleHeight = 32


function calculatePositionX() {
    const x = (windowWidth - titleWidth)
    return x / 2;
}
const titleX = calculatePositionX();
const titleY = windowHeight * 142 / 2744;


function CompanyProfileTitle(props) {
    return(
        <img style = {{...styles.profileTitle, left: props.companyProfileTitleX, right: props.companyProfileTitleX}} src = {CompanyTitle} alt =  'companytitle'/>
    );
}

const styles = {
    profileTitle: {
        position: 'absolute',
        width: titleWidth,
        height: titleHeight,
        top: titleY
    }
};

export default CompanyProfileTitle;