import React, { Component } from 'react';
import { Link } from 'react-router-dom';





const ServiceElement = (props) => {
    return (
        <Link to = {props.src} onClick={props.handleStateChange} style = {{textDecoration: 'none', color:props.link}}>
            <div>
                {props.children}
            </div>
        </Link>
    );
}


export default ServiceElement;