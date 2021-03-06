import React from 'react';
import Arrow from '../static/arrow_menu.svg';


function MenuList(props) {
    return(
        <div>
            <div style = {props.mainStyle}>
                { props.children}
            </div>
            <img style = {props.imgStyle} src = {Arrow}/>
            <div style = {props.lineStyle}>
            </div>
        </div>
    );
}

export default MenuList;