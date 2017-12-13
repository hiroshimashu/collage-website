import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../index.css';
import Radium from 'radium';


import AboutImage2 from './AboutImage2';
import Logo2 from './Logo2';
import Menu from '../Service/InteractiveMovie/Menu';
import Logo from '../Service/InteractiveMovie/Logo';
import ConceptTitle2 from './ConceptTitle2';
import ConceptMain2 from './ConceptMain2';
import CompanyProfileTitle2 from './CompanyProfileTitle2';
import BackgroundParticle from './BackroundParticle';
import ProfileDivider2 from './ProfileDivider2';
import CompanyProfile2 from './CompanyProfile2';
import GroupTitle2 from './GroupTitle2';
import GroupSubTitle2 from './GroupSubTitle2';
import GroupInformation2 from './GroupInformation2';
import Assemblage from '../../static/ASSEMBLAGE_logo.png';
import Zero from '../../static/zero.png';
import group1 from '../../static/group1.png';
import group2 from '../../static/group2.png';
import detail1 from '../../static/group1Detail.png';
import detail2 from '../../static/group2Detail.png';
const { StyleRoot }  = Radium;


const windowSize = window.innerWidth;
const windowHeight =2917 / 750 * windowSize;
const wrapperHeight = windowHeight * 0.33;
const companyWrapperHeight = windowHeight * 0.356;
const groupWrapperHeight =  windowHeight * 0.314;
const conceptHeight = `${963 /750 * 100}%` ;
const imgX2 = `${ 15/750 * 100}%`;
const imgY2 = `${ 64/963 * 100}%`;
const aboutX = `${ 174 / 750 * 100}%`;
const aboutY = `${ 133 / 963 * 100}%`;

const cImage1Width = windowSize * 0.456;
const cImage1Height = windowHeight *  0.038;
const cImage1X = calculateImage1X();
const cImage1Y = windowHeight * 201 / 2917
const companyName1Width = windowSize * 0.492;
const companyName1Height = windowHeight *  0.01;
const companyName1X = calculateName1X();
const companyName1Y = windowHeight *  338 /2917;
const companyMain1Width = windowSize * 0.721;
const companyMain1Height = windowHeight *  0.037;
const companyMain1X = calculateMain1X();
const companyMain1Y = windowHeight *  384 /2917;

const cImage2Width = windowSize * 0.431;
const cImage2Height = windowHeight *  0.038;
const cImage2X = calculateImage2X();
const cImage2Y = windowHeight * 546 / 2917
const companyName2Width = windowSize * 0.452;
const companyName2Height = windowHeight *  0.01;
const companyName2X = calculateName2X();
const companyName2Y = windowHeight *  675 /2917;
const companyMain2Width = windowSize * 0.753;
const companyMain2Height = windowHeight *  0.037;
const companyMain2X = calculateMain2X();
const companyMain2Y = windowHeight *  721 /2917;




function calculatePositionX() {
    const x = (windowSize - 393)/(2 * windowSize);
    return x * 100;
}

function calculateImage1X() {
    const x = (windowSize - cImage1Width)/2;
    return x;
}

function calculateImage2X() {
    const  x = (windowSize - cImage2Width)/2;
    return x;
}

function calculateName1X() {
    const  x = (windowSize - companyName1Width)/2;
    return x;
}
function calculateName2X() {
    const  x = (windowSize - companyName2Width)/2;
    return x;
}


function calculateMain1X() {
    const  x = (windowSize - companyMain1Width)/2;
    return x;
}
function calculateMain2X() {
    const  x = (windowSize - companyMain2Width)/2;
    return x;
}






const  imgX = `${calculatePositionX()}%`




const Fade = ({ children, ...props }) => (
    <CSSTransition
        {...props}
        timeout={1000}
        classNames="fade"
    >
        {children}
    </CSSTransition>
);



class AboutScreen extends Component {
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
                <div ref = {aboutWrapper => this.aboutWrapper = aboutWrapper} className="aboutWrapper"  style={styles.aboutWrapper}>
                    <div style = {styles.conceptWrapper}>
                        <Logo />
                        <AboutImage2 />
                        <ConceptTitle2 />
                        <ConceptMain2 />
                    </div>
                    <div className = 'profileWrapper' style = { styles.profileWrapper }>
                        <BackgroundParticle />
                        <CompanyProfileTitle2 />
                        <ProfileDivider2 />
                        <CompanyProfile2 />
                    </div>
                    <div className = 'groupWrapper' style = {styles.groupWrapper}>
                        <GroupTitle2 />
                        <GroupSubTitle2 />
                        <GroupInformation2
                            src1 = {Assemblage}
                            src2 = {group1}
                            src3 = {detail1}
                            cImage =  {styles.cImage1}
                            nameStyle = {styles.name1}
                            exStyle = {styles.exStyle1}
                        />
                        <GroupInformation2
                            src1 = {Zero}
                            src2 = {group2}
                            src3 = {detail2}
                            cImage =  {styles.cImage2}
                            nameStyle = {styles.name2}
                            exStyle = {styles.exStyle2}
                        />
                    </div>
                </div>
            </Fade>
        );
    }
}

const styles = {
    aboutWrapper: {
        width: '100%',
        height: windowHeight,
    },
    conceptWrapper: {
        position: 'relative',
        width: '100%',
        height: wrapperHeight,
        backgroundColor: '#f6f6f6',
    },
    logo: {
        position: 'absolute',
        top: '18px',
        left: '16px',
        '@media(max-width: 500px)':{
            left: imgX2,
            top: imgY2
        }
    },
    profileWrapper: {
        position: 'relative',
        width:  '100%',
        height : companyWrapperHeight,

    },
    groupWrapper: {
        position: 'relative',
        width: '100%',
        height: groupWrapperHeight,
        backgroundColor: '#f6f6f6'
    },
    cImage1: {
        position: 'absolute',
        width: cImage1Width,
        height: cImage1Height,
        top: cImage1Y,
        left: cImage1X,

    },
    name1: {
        position: 'absolute',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        color: '#464646',
        fontSize: '14px',
        fontWeight: 600,
        textAlign: 'center',
        width: companyName1Width,
        height: companyName1Height,
        top: companyName1Y,
        left: companyName1X,
        right: companyName1X
    },
    exStyle1: {
        position: 'absolute',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        color: '#6e6e6e',
        fontSize: '11px',
        textAlign: 'center',
        width: companyMain1Width,
        height: companyMain1Height,
        top: companyMain1Y,
        left: companyMain1X,
        right: companyMain1X
    },
    cImage2: {
        position: 'absolute',
        width: cImage2Width,
        height: cImage2Height,
        top: cImage2Y,
        left: cImage2X,

    },
    name2: {
        position: 'absolute',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        color: '#464646',
        fontSize: '14px',
        fontWeight: 600,
        textAlign: 'center',
        width: companyName2Width,
        height: companyName2Height,
        top: companyName2Y,
        left: companyName2X,
        right: companyName2X
    },
    exStyle2: {
        position: 'absolute',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        color: '#6e6e6e',
        fontSize: '11px',
        textAlign: 'center',
        width: companyMain2Width,
        height: companyMain2Height,
        top: companyMain2Y,
        left: companyMain2X,
        right: companyMain2X
    },


}


export default AboutScreen;