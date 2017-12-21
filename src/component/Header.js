import React, { Component } from 'react';
import divStyle from './divStyle';
import AccessMenu from'../static/accessMenu.png';
import AboutMenu from '../static/abouMenu.png';
import ServiceMenu from '../static/serviceMenu.png';
import WorksMenu from '../static/worksMenu.png';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <div>
                <Link to = '/about'><img src =  {AboutMenu} style = {divStyle.div1} /></Link>
                <Link to = '/works'><img src =  {WorksMenu} style = {divStyle.div2} /></Link>
                <Link to = '/service'><img src =  {ServiceMenu} style = {divStyle.div3} /></Link>
                <Link to = '/access'><img src =  {AccessMenu}  style = {divStyle.div4} /></Link>
            </div>
        );
    }
}

export default Header;