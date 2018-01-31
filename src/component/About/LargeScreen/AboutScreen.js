import React, { Component } from 'react';
import { connect } from 'react-redux';
import AboutTitle from './AboutTitle';
import ConceptTitle from './ConceptTitle';
import ConceptMain from './ConceptMain';
import BackgroundParticle from './BackroundParticle';
import CompanyProfileTitle from './CompanyProfileTitle';
import CompanyProfile from './CompanyProfile';
import ProfileDivider from './ProfileDivider';
import GroupTitle from './GroupTitle';
import GroupSubTitle from './GroupSubTitle';
import GroupInformation from './GroupInformation';
import showMenu from '../../../actions/showMenu';
import group1 from '../../../static/group1.png';
import group2 from '../../../static/group2.png';
import detail1 from '../../../static/group1Detail.png';
import detail2 from '../../../static/group2Detail.png';
import Assemblage from '../../../static/ASSEMBLAGE_logo.png';
import Zero from '../../../static/collageZero.png';
import groupStyle from './groupStyle';

const windowWidth = window.innerWidth;
const windowHeight = windowWidth * 2744 / 1200;
const aboutWrapperHeight = windowHeight *  0.339;
const profileWrapperHeight = windowHeight *  0.392;
const groupWrapperHeight = windowHeight * 0.269;

const titleWidth = 393;
const conceptTitleWidth = 205;
const conceptWidth = 539;
const companyProfileTitleWidth = 414;
const groupTitleWidth =  windowWidth * 0.165;
const groupSubTitleWidth = windowWidth * 0.078;


const cImage1X = 121 / 1200 * windowWidth;
const companyName1X = 549 / 1200  * windowWidth;
const companyMain1X = 548 /1200 * windowWidth;
const dividerX = 497 / 1200 * windowWidth;
const cImage2X = 124 / 1200 * windowWidth;
const companyMain2X = 548 / 1200 *  windowWidth;






class AboutScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: this.props.window.width,
            titleX: this.calculateX(this.props.window.width, titleWidth),
            conceptTitleX:this.calculateX(this.props.window.width, conceptTitleWidth),
            conceptX:this.calculateX(this.props.window.width, conceptWidth),
            companyProfileTitleX: this.calculateX(this.props.window.width, companyProfileTitleWidth),
            dividerX: this.props.window.width * 441 / 1200,
            groupTitleX: this.calculateX(this.props.window.width, groupTitleWidth),
            groupSubTitleX: this.calculateX(this.props.window.width, groupSubTitleWidth),
            group1X1: this.props.window.width * 121 / 1200,
            group1X2: this.props.window.width * 549 / 1200,
            group1X3: this.props.window.width * 548 / 1200,
            groupDividerX: this.props.window.width * 497 / 1200,
            group2X1: this.props.window.width * 124 / 1200,
            group2X2: this.props.window.width * 549 / 1200,
            group2X3: this.props.window.width * 548 / 1200,
            img1: this.props.window.width * 330 / 1200,
            main1: this.props.window.width * 508 / 1200,
            img2: this.props.window.width * 337 / 1200,
            main2: this.props.window.width * 508 / 1200,
            img3: this.props.window.width * 330 / 1200,
            main3: this.props.window.width * 508 / 1200,
            img4: this.props.window.width * 329 / 1200,
            main4: this.props.window.width * 508 / 1200,
            img5: this.props.window.width * 329 / 1200,
            main5: this.props.window.width * 508 / 1200,
            img6: this.props.window.width * 329 / 1200,
            main6: this.props.window.width * 508 / 1200,
            img7: this.props.window.width * 329 / 1200,
            main7: this.props.window.width * 508 / 1200,
            img8: this.props.window.width * 329 / 1200,
            main8: this.props.window.width * 508 / 1200,
            menu: this.props.show

        };

        this.calculateX = this.calculateX.bind(this);
    }

    componentWillReceiveProps() {
        console.log(this.props.window.width);
        this.setState(() => {
            return {
                width: this.props.window.width,
                titleX:this.calculateX(this.props.window.width, titleWidth),
                conceptTitleX:this.calculateX(this.props.window.width, conceptTitleWidth),
                conceptX: this.calculateX(this.props.window.width, conceptWidth),
                companyProfileTitleX: this.calculateX(this.props.window.width, companyProfileTitleWidth),
                dividerX: this.props.window.width * 441 / 1200,
                groupTitleX: this.calculateX(this.props.window.width, groupTitleWidth),
                groupSubTitleX: this.calculateX(this.props.window.width, groupSubTitleWidth),
                group1X1: this.props.window.width * 121 / 1200,
                group1X2: this.props.window.width * 549 / 1200,
                group1X3: this.props.window.width * 548 / 1200,
                groupDividerX: this.props.window.width * 497 / 1200,
                group2X1: this.props.window.width * 124 / 1200,
                group2X2: this.props.window.width * 549 / 1200,
                group2X3: this.props.window.width * 548 / 1200,
                img1: this.props.window.width * 330 / 1200,
                main1: this.props.window.width * 508 / 1200,
                img2: this.props.window.width * 337 / 1200,
                main2: this.props.window.width * 508 / 1200,
                img3: this.props.window.width * 329 / 1200,
                main3: this.props.window.width * 508 / 1200,
                img4: this.props.window.width * 329 / 1200,
                main4: this.props.window.width * 508 / 1200,
                img5: this.props.window.width * 329 / 1200,
                main5: this.props.window.width * 508 / 1200,
                img6: this.props.window.width * 329 / 1200,
                main6: this.props.window.width * 508 / 1200,
                img7: this.props.window.width * 329 / 1200,
                main7: this.props.window.width * 508 / 1200,
                img8: this.props.window.width * 329 / 1200,
                main8: this.props.window.width * 508 / 1200,
            };
        });
    }

    componentDidMount() {
        this.props.showMenu();
    }


    calculateX(window, width) {
        return (window - width) / 2;
    }

    render() {
        return(
            <div className="aboutWrapper" style = {{position: 'relative', width: 100 + 'vw', height: 228.66 + 'vw'}}>
                <BackgroundParticle width = {this.state.width} />
                <div style = {{...styles.aboutWrapper, width: 100 + 'vw'}}>
                    <AboutTitle titleX = {this.state.titleX} />
                    <ConceptTitle conceptTitleX = {this.state.conceptTitleX}/>
                    <ConceptMain conceptX = {this.state.conceptX} />
                </div>
                <div style = {{...styles.profileWrapper, width: 100 + 'vw'}}>
                    <CompanyProfileTitle companyProfileTitleX = {this.state.companyProfileTitleX}/>
                    <CompanyProfile
                        img1 = {this.state.img1}
                        main1 = {this.state.main1}
                        img2 = {this.state.img2}
                        main2 = {this.state.main2}
                        img3 = {this.state.img3}
                        main3 = {this.state.main3}
                        img4 = {this.state.img4}
                        main4 = {this.state.main4}
                        img5 = {this.state.img5}
                        main5 = {this.state.main5}
                        img6 = {this.state.img6}
                        main6 = {this.state.main6}
                        img7 = {this.state.img7}
                        main7 = {this.state.main7}
                        img8 = {this.state.img8}
                        main8 = {this.state.main8}
                    />
                    <ProfileDivider
                        dividerX = {this.state.dividerX}
                    />
                </div>
                <div className = 'groupWrapper' style = {{...styles.groupWrapper}}>
                    <GroupTitle
                        groupTitleX = {this.state.groupTitleX}
                    />
                    <GroupSubTitle
                        groupSubTitleX = {this.state.groupSubTitleX}
                    />
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
                        groupX1 = {this.state.group1X1}
                        groupX2 = {this.state.group1X2}
                        groupX3 = {this.state.group1X3}
                        dividerX = {this.state.groupDividerX}
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
                        groupX1 = {this.state.group2X1}
                        groupX2 = {this.state.group2X2}
                        groupX3 = {this.state.group2X3}
                        dividerX = {this.state.groupDividerX}
                    />
                </div>
            </div>
        );
    }
}

const styles = {
    aboutWrapper: {
        height: 77.518 + 'vw',
        position: 'relative',
    },
    profileWrapper: {
        position: 'relative',
        height : 89.6373 + 'vw'
    },
    groupWrapper: {
        position: 'relative',
        width: 100 +'vw',
        height: 61.511 + 'vw'
    },

}

function mapStateToProps(state) {
    return {
        window: state.windowsize,
        show: state.showMenu.visible
    };
}
function mapDispatchToProps(dispatch) {
    return {
        showMenu() {
            dispatch(showMenu());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen);