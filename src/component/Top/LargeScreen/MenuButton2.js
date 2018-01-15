import React from 'react';
import menu from '../../../static/menu.png';
import { CSSTransition } from 'react-transition-group';
import '../../../index.css';

const Fade = ({ children, ...props }) => (
    <CSSTransition
        {...props}
        classNames="fade"
        unmountOnExit={true}
    >
        {children}
    </CSSTransition>
);





const Menu = (props) => {
    console.log(props);

    return(
        <Fade in = { props.showMenu } timeout = {500}>
            <img src = {menu} style = {styles.menu} onClick={props.handleClick} />
        </Fade>
    );
}




const styles = {
    menu: {
        position: 'fixed',
        width: '42px',
        height: 'auto',
        marginTop: '78px',
        marginLeft: '19px',
        zIndex:1000
    }
}

export default Menu;