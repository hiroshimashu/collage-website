import React, { Component }from 'react';

var styles = {
    box: {
        display: 'flex'
    },

    in: {
        Color:'green'
    },

    out: {
        Color: 'black'
    }
};

class CompanyInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: this.props.switch,
        };
    }

    render() {
        return(
          <div style = {{display: 'flex',display: '-webkit-flex', position:'relative', width: '100%', height:'70px', marginTop:'2%', fontFamily:'Hiragino Maru Gothic', color: '#6e6e6e'}}
               onMouseEnter={this.props.changeColor}
               onMouseLeave= {this.props.resetColor}
          >
              <div style = {{ position:'absolute', fontSize: '23px', left: `${this.props.left}`}}>{this.props.subtitle}</div>
              <img style = {{ ...styles[this.state.hover], width: '53px', height: '53px', position:'absolute'}}
                   src={this.props.src}
                   alt={this.props.subtitle}
              />
              <div style={{ position:'absolute', left:'30%', fontSize: '27px'}}>
                  {this.props.information}
              </div>
          </div>
        );
    }
}

export default CompanyInformation;