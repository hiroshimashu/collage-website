import React from 'react';
import logo from '../../../static/logo.png';
import { Link } from 'react-router-dom';
import Logo_Night from '../../../static/top(2).png';

const windowWidth = window.innerWidth;
const windowHeight =  window.innerHeight * 750 / 1200;
const logoWidth = windowWidth * 0.035;
const logoX = windowWidth * 19/ 750;
const logoY = windowHeight * 20 / 1200;


function Logo() {
    return(
        <Link to = '/'>
            <img src = {logo} style = {styles.logo} />
        </Link>
    );
}




const styles = {
    logo: {
        position: 'fixed',
        width: 'auto',
        height: 5.6 + 'vh',
        marginTop: '13.28px',
        marginLeft: 18.6 + 'px',
        zIndex:6
    },
}

export default Logo;