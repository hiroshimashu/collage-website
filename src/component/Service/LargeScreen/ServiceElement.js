import React, { Component } from 'react';
import { Link } from 'react-router-dom';





class ServiceElement extends Component{
    render() {
        return (
            <Link to = {this.props.src} onClick={this.props.handleStateChange} style = {{textDecoration: 'none', color:this.props.link}}>
                <div>
                    {this.props.children}
                </div>
            </Link>
        );
    }
}

export default ServiceElement;