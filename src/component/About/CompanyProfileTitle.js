import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';




const windowSize = window.innerWidth;
function calculatePositionConceptX() {
    const x = (windowSize - 414)/(2 * windowSize);
    return x * 100;
}


const conceptTitleWidth = `${205/1200 * 100}vw`;
const companyProfileTitleLeft = `${calculatePositionConceptX()}%`;
console.log(companyProfileTitleLeft);
const conceptTitleTop = `${253/930 * 100}%`;




function CompanyProfileTitle() {
    return(
        <div style ={styles.companyProfileTitle}>
            COMPANY PROFILE
        </div>
    );
}

const styles = {
    companyProfileTitle: {
        position: 'absolute',
        width: '414px',
        height: '32px',
        top: '1072px',
        fontWeight: '500',
        right: companyProfileTitleLeft,
        left: companyProfileTitleLeft,
        fontFamily: 'HiraginoUDSansStdN',
        fontSize: '40px',
        color:'#2d2d2d',
        letterSpacing: '0.07em',
        lineHeight: '41.316px',
        textAlign: 'center',
    }
};


export default CompanyProfileTitle;