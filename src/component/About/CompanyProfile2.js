import React from 'react';
import CompanyProfileMain2 from './CompanyProfileMain2';
import building from  '../../static/building.svg';
import Placeholder from '../../static/placeholder.svg';
import Calender from '../../static/calendar.svg';
import User from '../../static/user.svg';
import Coin from '../../static/coins.svg';
import Calculator from '../../static/calculator.svg';
import Bank from '../../static/bank.svg';
import Pencil from '../../static/pencil.svg';
import profile1 from '../../static/profile1-mod.png';
import profile2 from '../../static/profile2.png';
import profile3 from '../../static/profile3.png';
import profile4 from '../../static/profile4.png';
import profile5 from '../../static/profile5.png';
import profile6 from '../../static/month.png';
import profile7 from '../../static/profile7.png';
import profile8 from '../../static/profile8.png';




const windowWidth = window.innerWidth;
const windowHeight = 2917 / 750 * windowWidth;
const imgWidth1 = windowWidth *  0.071;
const imgX1 = windowWidth * 117 / 750;
const imgY1 = windowHeight * 189/ 2917;
const mainWidth1 = windowWidth * 0.325;
const mainHeight1 =  windowHeight * 0.009;
const mainX1 = windowWidth *  296 / 750;
const mainY1 = windowHeight * 203 / 2917;

const imgWidth2 = windowWidth *  0.049;
const imgHeight2 =  windowHeight * 0.018;
const imgX2 = windowWidth * 124 / 750;
const imgY2 = windowHeight * 279 / 2917;
const mainWidth2 = windowWidth * 0.511;
const mainHeight2 =  windowHeight * 0.021;
const mainX2 = windowWidth *  297 / 750;
const mainY2 = windowHeight * 273 / 2917;


const imgWidth3 = windowWidth *  0.071;
const imgHeight3 =  windowHeight * 0.017;
const imgX3 = windowWidth * 116 / 750;
const imgY3 = windowHeight * 368 / 2917;
const mainWidth3 = windowWidth * 0.325;
const mainHeight3 =  windowHeight * 0.009;
const mainX3 = windowWidth *  295 / 750;
const mainY3 = windowHeight * 378 / 2917;

const imgWidth4 = windowWidth *  0.071;
const imgHeight4 =  windowHeight * 0.018;
const imgX4 = windowWidth * 117 / 750;
const imgY4 = windowHeight * 461 / 2917;
const mainWidth4 = windowWidth * 0.192;
const mainHeight4 =  windowHeight * 0.009;
const mainX4 = windowWidth *  295 / 750;
const mainY4 = windowHeight * 471 / 2917;

const imgWidth5 = windowWidth *  0.071;
const imgHeight5 =  windowHeight * 0.017;
const imgX5 = windowWidth * 116 / 750;
const imgY5 = windowHeight * 553 / 2917;
const mainWidth5 = windowWidth * 0.136;
const mainHeight5 =  windowHeight * 0.008;
const mainX5 = windowWidth *  296 / 750;
const mainY5 = windowHeight * 566 / 2917;

const imgWidth6 = windowWidth *  0.055;
const imgHeight6 =  windowHeight * 0.018;
const imgX6 = windowWidth * 122 / 750;
const imgY6 = windowHeight * 642 / 2917;
const mainWidth6 = windowWidth * 0.051;
const mainHeight6 =  windowHeight * 0.008;
const mainX6 = windowWidth *  298 / 750;
const mainY6 = windowHeight * 655/ 2917;


const imgWidth7 = windowWidth *  0.071;
const imgHeight7 =  windowHeight * 0.018;
const imgX7 = windowWidth * 114 / 750;
const imgY7 = windowHeight * 748 / 2917;
const mainWidth7 = windowWidth * 0.507;
const mainHeight7 =  windowHeight * 0.035;
const mainX7 = windowWidth *  298 / 750;
const mainY7 = windowHeight * 714 / 2917;

const imgWidth8 = windowWidth *  0.071;
const imgHeight8 =  windowHeight * 0.018;
const imgX8 = windowWidth * 116 / 750;
const imgY8 = windowHeight * 856 / 2917;
const mainWidth8 = windowWidth * 0.543;
const mainHeight8 =  windowHeight * 0.009;
const mainX8 = windowWidth *  297 / 750;
const mainY8 = windowHeight * 870 / 2917;









function CompanyProfile2() {
    return(
        <div>
            <CompanyProfileMain2 img = {styles.img1} src = {building} src2 ={profile1} subtitle = '社名' information = '株式会社コラージュ' main = { styles.main1 }/>
            <CompanyProfileMain2 img = {styles.img2} src = {Placeholder} src2 ={profile2} subtitle = '住所' information ='〒106-0032 東京都港区六本木　5-9-20' main = { styles.main2 }/>
            <CompanyProfileMain2 img = {styles.img3} src = {Calender}  src2 ={profile3} subtitle = 'カレンダー' information ='株式会社コラージュ' main = { styles.main3 }/>
            <CompanyProfileMain2 img = {styles.img4} src = {User} src2 ={profile4} subtitle = 'user' information ='和田嘉吉郎' main = { styles.main4 }/>
            <CompanyProfileMain2 img = {styles.img5} src = {Coin} src2 ={profile5} subtitle = 'coin' information ='800万円' main = { styles.main5 }/>
            <CompanyProfileMain2 img = {styles.img6} src = {Calculator}  src2 ={profile6} subtitle = '決算' information ='1月' main = { styles.main6 }/>
            <CompanyProfileMain2
                img = {styles.img7}
                src = {Bank} subtitle = 'bank'
                src2 ={profile7}
                information = {<div>みずほ銀行 神谷町支店<br/>三菱東京UFJ銀行 恵比寿支店<br/>三井住友銀行 恵比寿支店<br/></div>}
                main = { styles.main7 }
            />
            <CompanyProfileMain2 img = {styles.img8} src = {Pencil} src2 ={profile8} subtitle = 'pencil' information ='広告・宣伝に関する業務全般 + α' main = { styles.main8 }/>
        </div>
    );
}

const styles = {
    img1: {
        width: imgWidth1,
        height: imgWidth1,
        left: imgX1,
        top:imgY1
    },
    main1: {
        width: mainWidth1,
        height: 'auto',
        left: mainX1,
        top: mainY1,
        fontSize: '13px',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        textAlign: 'center',
        lineHeight: '20px',
        transform: 'scaleX(1.0007)',
        color: '#484848'
    },
    img2: {
        width: imgWidth2,
        height: imgHeight2,
        left: imgX2,
        top:imgY2
    },
    main2: {
        width: mainWidth2,
        height: 'auto',
        left: mainX2,
        top: mainY2,
        fontSize: '13px',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        textAlign: 'left',
        lineHeight: '20px',
        transform: 'scaleX(1.0007)',
        color: '#484848'
    },
    img3: {
        width: imgWidth3,
        height: imgHeight3,
        left: imgX3,
        top:imgY3
    },
    main3: {
        width: mainWidth3,
        height: 'auto',
        left: mainX3,
        top: mainY3,
        fontSize: '13px',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        textAlign: 'left',
        lineHeight: '20px',
        transform: 'scaleX(1.0007)',
        color: '#484848'
    },
    img4: {
        width: imgWidth4,
        height: imgHeight4,
        left: imgX4,
        top:imgY4
    },
    main4: {
        width: mainWidth4,
        height: 'auto',
        left: mainX4,
        top: mainY4,
        fontSize: '13px',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        textAlign: 'left',
        lineHeight: '20px',
        transform: 'scaleX(1.0007)',
        color: '#484848'
    },
    img5: {
        width: imgWidth5,
        height: imgHeight5,
        left: imgX5,
        top:imgY5
    },
    main5: {
        width: mainWidth5,
        height:'auto',
        left: mainX5,
        top: mainY5,
        fontSize: '13px',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        textAlign: 'left',
        lineHeight: '20px',
        transform: 'scaleX(1.0007)',
        color: '#484848'
    },
    img6: {
        width: imgWidth6,
        height: imgHeight6,
        left: imgX6,
        top:imgY6
    },
    main6: {
        width: mainWidth6,
        height:'auto',
        left: mainX6,
        top: mainY6,
        fontSize: '13px',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        textAlign: 'left',
        lineHeight: '20px',
        transform: 'scaleX(1.0007)',
        color: '#484848'
    },
    img7: {
        width: imgWidth7,
        height: imgHeight7,
        left: imgX7,
        top:imgY7
    },
    main7: {
        width: mainWidth7,
        height: 'auto',
        left: mainX7,
        top: mainY7,
        fontSize: '13px',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        textAlign: 'left',
        lineHeight: '20px',
        transform: 'scaleX(1.0007)',
        color: '#484848'
    },
    img8: {
        width: imgWidth8,
        height: imgHeight8,
        left: imgX8,
        top:imgY8
    },
    main8: {
        width: mainWidth8,
        height: 'auto',
        left: mainX8,
        top: mainY8,
        fontSize: '13px',
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        textAlign: 'left',
        lineHeight: '20px',
        transform: 'scaleX(1.0007)',
        color: '#484848'
    },



}


export default CompanyProfile2;