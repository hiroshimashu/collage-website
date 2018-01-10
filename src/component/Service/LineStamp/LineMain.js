import React , {Component} from 'react';
import Share from '../../../static/share.svg';
import Satoshi from '../../../static/line1.png';
import Yuya from '../../../static/line2.png';
import Miki from '../../../static/line3.png';
import Satoshi2 from '../../../static/satoshi2.png';
import SatoshiD from '../../../static/satoshiD2.png';
import Yuya2 from '../../../static/yuya2.png';
import YuyaD from '../../../static/yuyaD.png';
import Miki2 from '../../../static/miki2.png';
import MikiD from '../../../static/mikiD.png';
import SubTitle from '../SubTitle';
import StampExplanation from './StampExplanation';
import LineStore from '../../../static/line.png';
import Info from '../InteractiveMovie/Info';
import Logo from '../../../static/collage_logo_cut.jpg';
import Title from '../../../static/Service.gif';

class LineMain extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="lineMain" style={styles.main}>
                <div style={{position: 'absolute', top: '2%', left: '30%', width: '540px', height: '110px'}}>
                    <img src={Title} style={{width: '540px', height: '110px'}}/>
                </div>
                <div style={{position: 'absolute', top: '2%', left: '2%', width: '30px', height: '30px'}}>
                    <img src={Logo} style={{width: '30px', height: '30px'}}/>
                </div>
                <div className="share" style={{position: 'absolute', width: '20px', height: '20px', top: '15px', left: '97%'}}>
                    <img src={ Share } style={{width: '100%', height: '100%'}}/>
                </div>
                <SubTitle
                    target3={this.props.target3}
                    target5={this.props.target5}
                    target6={this.props.target6}
                    target7={this.props.target7}
                    serviceColor1= '#CEC6C6'
                    serviceColor2= '#CEC6C6'
                    serviceColor3= '#CEC6C6'
                    serviceColor4= '#bea0e4'

                />
                <div className="contentsWrapper" style={styles.content}>
                    <div className="stamp1" style={styles.stamp1}>
                        <img src={Satoshi} alt="satoshi"/>
                        <img src = {Satoshi2} alt = 'satoshi2' style = {styles.satoshi2}/>
                        <img src = {SatoshiD} alt = 'satoshiD' style = {styles.satoshiD} />
                    </div>
                    <div className="stamp2" style={styles.stamp2}>
                        <img src={Yuya} alt="yuya"/>
                        <StampExplanation
                            name='ユウヤさん'
                            year='39歳　既婚（娘1人)'
                            kind='クリエイティブディレクター'
                            interest='サッカー観戦、夏フェス、ジム'
                            personality='クールでスカしている'
                        />
                    </div>
                    <div className="stamp3" style={styles.stamp3}>
                        <img src={Miki} alt="miki"/>
                        <StampExplanation
                            name='ミキちゃん'
                            kind='営業'
                            year='28歳　独身'
                            interest='ショッピング、ジョギング、カフェ巡り'
                            personality='小悪魔'
                        />
                    </div>
                    <div className="lineStore" style={styles.lineStore}>
                        <img src={LineStore}/>
                    </div>
                </div>
                <div style={{position: 'absolute', top: '90%', width: '70%', textAlign: 'center', left: '15%'}}>
                    <Info />
                </div>
            </div>
        );
    }
}

const styles = {
    main: {
        position:'relative',
        width: '100%',
        height: '700px',
        backgroundColor:'rgba(201, 234, 180, 0.4)'
    },
    content:{
        position: 'absolute',
        marginLeft: '10%',
        Top: '53px',
        width: '90%',
        height: '500px',
        display: 'flex'
    },
    stamp1: {
        position: 'absolute',
        width: '162px',
        height: '162px',
        left: '15%',
        top: '200px'
    },
    stamp2: {
        position: 'absolute',
        width: '162px',
        height: '162px',
        left:'40%',
        top:'200px'
    },
    stamp3: {
        position: 'absolute',
        width: '162px',
        height: '162px',
        left:'65%',
        top:'200px'
    },
    lineStore: {
        position: 'absolute',
        top: '550px',
        left:'40%',
        width: '158px',
        height: '48px',
    },
    satoshi2: {
        position: 'absolute',
        width: '108px',
        height: '19px',
        left:'366px',
        top:'386px'
    },
    satoshiD: {
        position: 'absolute',
        width: '176px',
        height: '84px',
        left:'366px',
        top:'424px'
    }
}

export default LineMain;