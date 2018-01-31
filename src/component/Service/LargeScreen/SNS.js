import React from 'react';
import facebook from '../../../static/facebook.svg';
import mail from '../../../static/e-mail-envelope.svg';




function SNS() {
    return(
        <div>
            <a href = 'https://www.facebook.com/collage.inc/' target = '_blank'><img src = {facebook} alt = 'facebook' style = {styles.facebook}/></a>
            <a href = 'https://www.facebook.com/collage.inc/' target = '_blank'><img src = {mail} alt = 'facebook' style = {styles.email}/></a>
        </div>
    );
}

const styles = {
    facebook: {
        position:'absolute',
        width: 1.5 + 'vw',
        height: 'auto'  ,
        left: 95.6 + 'vw',
        top:5.466 + 'vh',
        zIndex:100
    },
    email: {
        position: 'absolute',
        width: 1.5 + 'vw',
        height: 'auto'  ,
        left: 95.6 + 'vw',
        top:10.466 + 'vh',
        zIndex: 100
    }
}

export default SNS;