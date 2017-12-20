import React, { Component } from 'react';

class WindowResizeWrapper extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default WindowResizeWrapper;

