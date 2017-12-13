import React, { Component } from 'react';
import womanvoice from '../../../static/talk1.png';
import woman from '../../../static/woman.svg';
import manvoice from '../../../static/talk2.png';
import man from '../../../static/man.svg';
import Icon from '../../../static/icon.svg';

class Screen4 extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return(
            <div>
                <div style = { styles.wrapper }>
                    <div className="womanVoice">
                        <img src = {womanvoice} style = {styles.womanvoice}/>
                    </div>
                    <div className="woman" style = {{...styles.woman, color: `${this.props.hoverColor1}`}} onMouseEnter={this.props.hover1} onMouseLeave={this.props.offHover1}  >
                        <img src = {woman} style = {{fill:`${this.props.hoverColor1}`,  pointerEvents: 'all'}}/>
                        <div>大手広告会社</div>
                        <div>営業担当(30代)</div>
                    </div>
                    <div className="man" style = {{...styles.man, color: `${this.props.hoverColor2}`}} onMouseEnter={this.props.hover2} onMouseLeave={this.props.offHover2} >
                        <img src = {man} />
                        <div>大手広告会社</div>
                        <div>営業担当(40代)</div>
                    </div>
                    <div className="manVoice">
                        <img src = {manvoice} style = {styles.manvoice}/>
                    </div>
                </div>
                <div style = {{position:'absolute',display:'flex', left:'40%', top:'85%', height:'5%', width: '100%'}}>
                    <img src = {Icon} style = {{width:'20px', height:'20px'}}/>
                    <a>
                       http://www.collage-inc.js/proposal.html
                    </a>
                </div>
            </div>
        );
    }
}

const styles = {
    wrapper:{
        position:'absolute',
        display: 'flex',
        top: '10%',
        width:'90%',
        height: '60%',
        left: '10%',
        zIndex:1
    },
    womanvoice: {
        position:'absolute',
        height:'90%',
        width:'25%',

    },
    woman: {
        position:'absolute',
        marginTop:'20%',
        width: '20%',
        height: '117px',
        left:'25%',
        zIndex:100
    },
    manvoice: {
        position:'absolute',
        height:'90%',
        width: '25%',
        left:'75%'
    },
    man: {
        position:'absolute',
        marginTop:'20%',
        width: '20%',
        height:'117px',
        left:'50%',
        zIndex:100
    }


}

export default Screen4;