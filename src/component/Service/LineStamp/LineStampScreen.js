import React, { Component } from 'react';
import LineMain from './LineMain';

class LineStampScreen extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div className='lineWrapper'>
                <LineMain
                    target3 = {this.props.target3}
                    target5 = {this.props.target5}
                    target6 = {this.props.target6}
                    target7 = {this.props.target7}
                />
            </div>
        );
    }
}

export default LineStampScreen;