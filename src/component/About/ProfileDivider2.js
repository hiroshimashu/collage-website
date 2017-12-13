import React from 'react';

const windowWidth = window.innerWidth;
const windowHeight = 2917 / 750 * windowWidth;
const dividerWidth =  windowWidth * 0.001;
const dividerHeight = windowHeight * 0.246;
const dividerX = windowWidth * 228 / 750;
const dividerY = windowHeight * 187 / 2917;

function ProfileDivider2() {
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
        borderWidth: '0.5px',
        borderColor: '#9f9f9f',
        borderStyle: 'solid',
        backgroundColor: '#959595'
    }
};



export default ProfileDivider2;