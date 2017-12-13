import React, { Component } from 'react';
import makeAds from '../../static/makeAds.jpg';
import WorksCard from './WorksCard';
import ScrollAnimation from 'react-animate-on-scroll';
class WorksMain extends Component {
    render() {
        return(
            <div className="mainWrapper" style = {{position: 'relative', height:'1650px', width: '100%'}}>
                <ScrollAnimation animateIn = 'slideInLeft' animateOnce={true} >
                    <WorksCard
                        src = {makeAds}
                        title = '広告制作'
                        main = {['明治ガルボ石原さとみ']}
                        top = '0'
                        left = '0'
                    />
                </ScrollAnimation>
                <ScrollAnimation animateIn = 'slideInRight' animateOnce={true} >
                    <WorksCard
                        src = {makeAds}
                        title = 'イベント実施'
                        main = {['ホワイトベルグ']}
                        color = {'#f8f8f8'}
                        top = '0'
                        left = '50%'
                    />
                </ScrollAnimation>
                <ScrollAnimation animateIn = 'slideInleft' animateOnce={true}>
                    <WorksCard
                        src = {makeAds}
                        title = 'キャンペーン企画'
                        main = {['ホワイトベルグ']}
                        top = '550px'
                        left = '0'
                    />
                </ScrollAnimation>
                <ScrollAnimation animateIn = 'slideInlRight' animateOnce={true}>
                    <WorksCard
                        src = {makeAds}
                        title = 'キャスティング'
                        main = {['ホワイトベルグ']}
                        color = {'#f8f8f8'}
                        top = '550px'
                        left = '50%'
                    />
                </ScrollAnimation>
                <ScrollAnimation animateIn = 'slideInleft' animateOnce={true}>
                    <WorksCard
                        src = {makeAds}
                        title = 'PR'
                        main = {['ホワイトベルグ']}
                        top = '1100px'
                        left = '0'
                    />
                </ScrollAnimation>
                <ScrollAnimation animateIn = 'slideInRight' animateOnce={true}>
                    <WorksCard
                        src = {makeAds}
                        title = 'メディア'
                        main = {['ホワイトベルグ']}
                        color = {'#f8f8f8'}
                        top = '1100px'
                        left = '50%'
                    />
                </ScrollAnimation>
            </div>
        );
    }
}

export default WorksMain;