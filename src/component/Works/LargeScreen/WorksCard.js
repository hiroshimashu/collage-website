import React from 'react';
import worksStyle1 from './worksStyle1';
import worksStyle2 from './worksStyle2';
import worksStyle3 from './worksStyle3';
import worksStyle4 from './worksStyle4';
import worksStyle5 from './worksStyle5';
import worksStyle6 from './worksStyle6';
import Ads from '../../../static/ads.jpg';
import Event from '../../../static/event.jpg';
import Campaign from '../../../static/campaign.jpg';
import Casting from '../../../static/casting.jpg';
import PR from '../../../static/PR.png';
import Media from '../../../static/media.jpg';
import title1 from '../../../static/detail1.png';
import title2 from '../../../static/detail2.png';
import title3 from '../../../static/detail3.png';
import title4 from '../../../static/detail4.png';
import title5 from '../../../static/detail5.png';
import title6 from '../../../static/detail6.png';

const windowWidth = window.innerWidth;
const windowHeight = 2246 / 1200  * windowWidth;
const imgY =  212 / 2246 * windowHeight;

const Cards = [
    {src1: Ads, src2:title1, style1:worksStyle1.imgStyle, style2:worksStyle1.titleStyle, flag:1},
    {src1: title2, src2:Event, style1:worksStyle2.imgStyle, style2:worksStyle2.titleStyle, flag: 2},
    {src1: Campaign, src2:title3, style1:worksStyle3.imgStyle, style2:worksStyle3.titleStyle, flag:1},
    {src1: title4, src2:Casting, style1:worksStyle4.imgStyle, style2:worksStyle4.titleStyle, flag:4},
    {src1: PR, src2:title5, style1:worksStyle5.imgStyle, style2:worksStyle5.titleStyle, flag: 5},
    {src1: title6, src2:Media, style1:worksStyle6.imgStyle, style2:worksStyle6.titleStyle, flag: 3}
];


function WorksCard2(props) {
    return(

        Cards.map(function(card) {
            if(card.flag === 1) {
                return (
                    <div style={{display: 'flex'}}>
                        <img src={card.src1} alt={card.src1} key={card.src1} style={{...card.style1}}/>
                        <img src={card.src2} alt={card.src2} key={card.src2} style={{...card.style2}}/>
                    </div>
                );
            }else if(card.flag === 3){
                return (
                    <div style={{display: 'flex'}}>
                        <img src={card.src1} alt={card.src1} key={card.src1} style={{...card.style1}}/>
                        <img src={card.src2} alt={card.src2} key={card.src2} style={{...card.style2}}/>
                    </div>
                );
            }else if(card.flag === 2){
                return (
                    <div style={{display: 'flex'}}>
                        <img src={card.src1} alt={card.src1} key={card.src1} style={{...card.style1}} />
                        <img src={card.src2} alt={card.src2} key={card.src2} style={{...card.style2}}/>
                    </div>
                );
            }else if(card.flag === 4){
                return (
                    <div style={{display: 'flex'}}>
                        <img src={card.src1} alt={card.src1} key={card.src1} style={{...card.style1}} />
                        <img src={card.src2} alt={card.src2} key={card.src2} style={{...card.style2}}/>
                    </div>
                );
            }else if(card.flag === 5){
                return (
                    <div style={{display: 'flex'}}>
                        <img src={card.src1} alt={card.src1} key={card.src1} style={{...card.style1}} />
                        <img src={card.src2} alt={card.src2} key={card.src2} style={{...card.style2}}/>
                    </div>
                );
            }
        })
    );
}

export default WorksCard2;