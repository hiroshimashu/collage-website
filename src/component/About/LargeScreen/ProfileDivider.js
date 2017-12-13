import React from 'react';

const windowWidth = window.innerWidth;
const windowHeight = 2744 / 1200 * windowWidth;
const dividerWidth =  windowWidth * 0.001;
const dividerHeight = windowHeight * 0.262;
const dividerX = windowWidth * 441 / 1200;
const dividerY = windowHeight * 224 / 2744;

function ProfileDivider() {
    return(
        <div style = {styles.divider}></div>
    );
}

const styles = {
    divider:{
        position: 'absolute',
        width: dividerWidth,
        height: dividerHeight,
        top: dividerY,
        left: dividerX,
        borderLeft: '1px solid #9f9f9f'
    }
};



export default ProfileDivider;