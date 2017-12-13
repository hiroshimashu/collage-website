import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../index.css';
import WorksCard2 from './WorksCard2';
import worksStyle1 from './worksStyle1';
import worksStyle2 from './worksStyle2';
import worksStyle3 from './worksStyle3';
import worksStyle4 from './worksStyle4';
import worksStyle5 from './worksStyle5';
import worksStyle6 from './worksStyle6';
import WorksTitle from '../../static/WorksTitle.png';
import Menu from '../../static/menu.png';
import Logo from '../../static/logo.png';
import Ads from '../../static/ads.png';
import Event from '../../static/event.png';
import Campaign from '../../static/campaign.png';
import Casting from '../../static/casting.png';
import PR from '../../static/PR.png';
import Media from '../../static/media.png';
import title1 from '../../static/detail1.png';
import title2 from '../../static/detail2.png';
import title3 from '../../static/detail3.png';
import title4 from '../../static/detail4.png';
import title5 from '../../static/detail5.png';
import title6 from '../../static/detail6.png';





const windowWidth = window.innerWidth;
const windowHeight = 4653 / 750 * windowWidth;


const titleWidth = windowWidth *  0.573;
const titleHeight = windowHeight * 0.02;
const titleX =  159 / 750 *  windowWidth;
const titleY = 129 / 4653 *  windowHeight;


const logoWidth = windowWidth * 0.064;
const logoX = 15 / 750 * windowWidth;
const logoY = 64 / 4653 *  windowHeight;

const menuWidth = windowWidth * 0.061;
const menuHeight =  windowHeight * 0.007;
const menuX = 17 / 750 * windowWidth;
const menuY = 134 / 4653 * windowHeight;

const Fade = ({ children, ...props }) => (
    <CSSTransition
        {...props}
        timeout={1000}
        classNames="fade"
    >
        {children}
    </CSSTransition>
);


class WorksScreen2 extends Component {
    constructor(props){
        super(props);

        this.state = { show: false };

        setTimeout(() => {
            this.setState({show: !this.state.show});
        }, 0);
    }


    render() {
        return(
            <Fade in = { this.state.show}>
                <div className="worksWrapper" style = {styles.worksWrapper}>
                    <img src = {Logo} style = {styles.logo} />
                    <img src = {WorksTitle} style = {styles.title}/>
                    <WorksCard2
                        src1 = {Ads}
                        src2 = {title1}
                        title  = '広告制作'
                        imgStyle =  {worksStyle1.imgStyle}
                        titleStyle =  {worksStyle1.titleStyle}
                    />
                    <WorksCard2
                        src1 = {Event}
                        src2 = {title2}
                        title  = 'イベント実施'
                        imgStyle =  {worksStyle2.imgStyle}
                        titleStyle =  {worksStyle2.titleStyle}
                    />
                    <WorksCard2
                        src1 = {Campaign}
                        src2 = {title3}
                        title  = 'キャンペーン企画'
                        imgStyle =  {worksStyle3.imgStyle}
                        titleStyle =  {worksStyle3.titleStyle}
                    />
                    <WorksCard2
                        src1 = { Casting }
                        src2 = {title4}
                        title  = 'キャスティング'
                        imgStyle =  {worksStyle4.imgStyle}
                        titleStyle =  {worksStyle4.titleStyle}
                    />
                    <WorksCard2
                        src1 = {PR}
                        src2 = {title5}
                        title  = 'PR'
                        imgStyle =  {worksStyle5.imgStyle}
                        titleStyle =  {worksStyle5.titleStyle}
                    />
                    <WorksCard2
                        src1 = {Media}
                        src2 = {title6}
                        title  = 'メディア'
                        imgStyle =  {worksStyle6.imgStyle}
                        titleStyle =  {worksStyle6.titleStyle}
                    />
                </div>
            </Fade>
        );
    }
}

const styles = {
    worksWrapper: {
        width: windowWidth,
        height: windowHeight,
    },
    title: {
        position: 'absolute',
        width: titleWidth,
        height: titleHeight,
        top: titleY,
        left: titleX,
        right: titleX
    },
    logo: {
        position: 'absolute',
        width: logoWidth,
        height: logoWidth,
        top: logoY,
        left: logoX,
    },
    menu: {
        position: 'absolute',
        width: menuWidth,
        height: menuHeight,
        top: menuY,
        left:menuX
    }
}

export default WorksScreen2;