import React from 'react';

const windowWidth = window.innerWidth;
const windowHeight = 2744 / 1200 * windowWidth;
const dividerWidth =  windowWidth * 0.001;
const dividerHeight = windowHeight * 0.262;
const dividerY = windowHeight * 224 / 2744;

function ProfileDivider(props) {
    return(
        <div style = {{...styles.divider}}></div>
    );
}

const styles = {
    divider:{
        position: 'absolute',
        width: 0.1 + 'vw',
        height: 59.910 + 'vw',
        top: 18.66 + 'vw',
        left: 36.75 + 'vw',
        borderLeft: '1px solid #9f9f9f'
    }
};



export default ProfileDivider;