import React, { Component } from 'react';
import Logo from '../../Top/LargeScreen/Logo';
import AboutTitle from './AboutTitle';
import ConceptTitle from './ConceptTitle';
import ConceptMain from './ConceptMain';
import BackgroundParticle from '../BackroundParticle';
import CompanyProfileTitle from './CompanyProfileTitle';
import CompanyProfile from './CompanyProfile';
import ProfileDivider from './ProfileDivider';
import GroupTitle from './GroupTitle';
import GroupSubTitle from './GroupSubTitle';
import GroupInformation from './GroupInformation';
import group1 from '../../../static/group1.png';
import group2 from '../../../static/group2.png';
import detail1 from '../../../static/group1Detail.png';
import detail2 from '../../../static/group2Detail.png';
import Assemblage from '../../../static/ASSEMBLAGE_logo.png';
import Zero from '../../../static/zero.png';
import groupStyle from './groupStyle';

const windowWidth = window.innerWidth;
const windowHeight = windowWidth * 2744 / 1200;
const aboutWrapperHeight = windowHeight *  0.339;
const profileWrapperHeight = windowHeight *  0.392;
const groupWrapperHeight = windowHeight * 0.269;




class AboutScreen extends Component {
    render() {
        return(
            <div className="aboutWrapper" style = {{position: 'relative', width:windowWidth, height:windowHeight}}>
                <div style = {styles.aboutWrapper}>
                    <AboutTitle />
                    <ConceptTitle />
                    <ConceptMain />
                </div>
                <div style = {styles.profileWrapper}>
                    <BackgroundParticle />
                    <CompanyProfileTitle />
                    <CompanyProfile />
                    <ProfileDivider />
                </div>
                <div className = 'groupWrapper' style = {styles.groupWrapper}>
                    <GroupTitle />
                    <GroupSubTitle />
                    <GroupInformation
                        name = '株式会社アッサンブラージュ'
                        explanation = {
                            <div>主にテレビ番組の企画・制作を行う制作会社です。<br/>番組制作のノウハウにより、通常の広告制作の単価<br/>より、割安な単価での映像制作が可能となります。</div>
                        }
                        src = {Assemblage}
                        src2 = {group1}
                        src3 = {detail1}
                        cImage =  {groupStyle.cImage1}
                        nameStyle = {groupStyle.name1}
                        exStyle = {groupStyle.exStyle1}
                        divider =  {groupStyle.divider1}
                    />
                    <GroupInformation
                        name = '株式会社コラージュ・ゼロ'
                        explanation = {
                            <div>広告×ITを標榜し、研究開発からサービス化までを目<br/>指す会社です。現在は人工知能を用いて広告動画を科<br/>学的に評価するプロジェクトに取り組んでいます。</div>
                        }
                        src = {Zero}
                        src2 = {group2}
                        src3 = {detail2}
                        cImage =  {groupStyle.cImage2}
                        nameStyle = {groupStyle.name2}
                        exStyle = {groupStyle.exStyle2}
                        divider = {groupStyle.divider2}
                    />
                </div>
            </div>
        );
    }
}

const styles = {
    aboutWrapper: {
        width: windowWidth,
        height: aboutWrapperHeight,
        position: 'relative',
        backgroundColor: '#f6f6f6',
    },
    profileWrapper: {
        position: 'relative',
        width:  '100%',
        height : profileWrapperHeight,
    },
    groupWrapper: {
        position: 'relative',
        width: '100%',
        height: groupWrapperHeight,
        backgroundColor: '#f6f6f6'
    },

}

export default AboutScreen;