import React, { Component } from 'react';
import { connect } from 'react-redux';
import divStyle from './divStyle';
import AccessMenu from'../static/accessMenu.png';
import AboutMenu from '../static/abouMenu.png';
import ServiceMenu from '../static/serviceMenu.png';
import WorksMenu from '../static/worksMenu.png';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: this.props.window.width,
            positionX1: this.props.window.width * 0.1666,
            positionX2: this.props.window.width * 0.4166,
            positionX3: this.props.window.width * 0.6666,
            positionX4: this.props.window.width * 0.9166
        };

    }

    componentWillReceiveProps() {
        console.log(this.props.window.width);
        this.setState(() => {
            return {
                width: this.props.window.width,
                positionX1: this.props.window.width * 0.1666,
                positionX2: this.props.window.width * 0.4166,
                positionX3: this.props.window.width * 0.6666,
                positionX4: this.props.window.width * 0.9166
            };
        });
    }

    render() {
        return(
            <div>
                <Link to = '/about'><img src =  {AboutMenu} style = {{...divStyle.div1, left: this.state.positionX1}} /></Link>
                <Link to = '/works'><img src =  {WorksMenu} style = {{...divStyle.div2, left: this.state.positionX2}} /></Link>
                <Link to = '/service'><img src =  {ServiceMenu} style = {{...divStyle.div3, left: this.state.positionX3}} /></Link>
                <Link to = '/access'><img src =  {AccessMenu}  style = {{...divStyle.div4, left: this.state.positionX4}} /></Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        window: state.windowsize
    };
}



export default connect(mapStateToProps)(Header);