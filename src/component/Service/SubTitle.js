import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

class SubTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='wrapper' style={{position:'absolute', top: '123px',width: '600px', height:'100px', direction:'flex' , fontSize:'18px', marginLeft:'29%', zIndex:1}}>
                <div className="Interactive" style = {{...styles.interactive, color: `${this.props.serviceColor1}`}}  onClick={() => {
                    console.log('route is fired');
                    this.props.handleServiceColor1
                    return(scrollToComponent(this.props.target3, { offset: 0, align: 'top', duration: 500}));
                }}>
                    インタラクティブ動画  /
                </div>
                <div className="sellingPlan" style={{...styles.selling, color: `${this.props.serviceColor2}`}}  onClick={() => {
                    console.log('route is fired');
                    this.props.handleServiceColor2
                    return(scrollToComponent(this.props.target5, { offset: 0, align: 'top', duration: 500}));
                }}>
                    企画書販売機  /
                </div>
                <div className="logColle" style={{...styles.log,  color: `${this.props.serviceColor3}`}}  onClick={() => {
                    console.log('route is fired');
                    this.props.handleServiceColor3
                    return(scrollToComponent(this.props.target6, { offset: 0, align: 'top', duration: 500}));
                }}>
                    ログコレ  /
                </div>
                <div className="LineStamp" style={{...styles.line,  color: `${this.props.serviceColor4}`}}  onClick={() => {
                    console.log('route is fired');
                    this.props.handleServiceColor4
                    return(scrollToComponent(this.props.target7, { offset: 0, align: 'top', duration: 500}));
                }}>
                    LINEスタンプ
                </div>
            </div>
        );
    }
}

const styles = {
    interactive: {
        position: 'absolute',
        width:'35%',
        height:'100%',
        textAlign:'left',
        zIndex:2
    },
    selling: {
        position: 'absolute',
        width:'22%',
        height:'100%',
        left:'35%',
        textAlign:'left',
        zIndex:2
    },
    log: {
        position: 'absolute',
        width: '20%',
        height: '100%',
        left: '57%',
        textAlign: 'left',
        zIndex: 2
    },
    line: {
        position: 'absolute',
        width:'27%',
        height:'100%',
        left:'75%',
        textAlign:'left',
        zIndex:2
    }

}

export default SubTitle;

