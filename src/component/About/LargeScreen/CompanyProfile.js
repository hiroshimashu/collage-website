import React from 'react';
import CompanyProfileMain from './CompanyProfileMain';
import building from  '../../../static/building.svg';
import Placeholder from '../../../static/placeholder.svg';
import Calender from '../../../static/calendar.svg';
import User from '../../../static/user.svg';
import Coin from '../../../static/coins.svg';
import Calculator from '../../../static/calculator.svg';
import Bank from '../../../static/bank.svg';
import Pencil from '../../../static/pencil.svg';
import profileStyle from './profileStyle';
import companyName from '../../../static/companyName.png';
import address from '../../../static/address2.png';
import wada from '../../../static/representative.png';
import resource from '../../../static/resource.png';
import month from '../../../static/month.png';
import deal from '../../../static/deal.png';
import job from '../../../static/job.png';


function CompanyProfile(props) {
    return(
        <div>
            <CompanyProfileMain img = {{...profileStyle.img1}} src = {building} src2 = {companyName} subtitle = '社名' information = '株式会社コラージュ' main = {{...profileStyle.main1}}/>
            <CompanyProfileMain img = {{...profileStyle.img2}} src = {Placeholder} src2 = {address} subtitle = '住所' information ='〒106-0032 東京都港区六本木　5-9-20' main = {{...profileStyle.main2}}/>
            <CompanyProfileMain img = {{...profileStyle.img3}} src = {Calender} src2 = {companyName} subtitle = 'カレンダー' information ='株式会社コラージュ' main = {{...profileStyle.main3}} />
            <CompanyProfileMain img = {{...profileStyle.img4}} src = {User} src2 = {wada} subtitle = 'user' information ='和田 嘉吉郎' main = {{...profileStyle.main4}} />
            <CompanyProfileMain img = {{...profileStyle.img5}} src = {Coin} src2 = {resource} subtitle = 'coin' information ='800万円' main = {{...profileStyle.main5 }} />
            <CompanyProfileMain img = {{...profileStyle.img6}} src = {Calculator} src2 = {month} subtitle = '決算' information ='1月' main = {{...profileStyle.main6}} />
            <CompanyProfileMain
                img = {{...profileStyle.img7}}
                src = {Bank}
                src2 = {deal}
                subtitle = 'bank'
                information = {<div>みずほ銀行 神谷町支店<br/>三菱東京UFJ銀行 恵比寿支店<br/>三井住友銀行 恵比寿支店<br/></div>}
                main = {{...profileStyle.main7}}
            />
            <CompanyProfileMain img = {{...profileStyle.img8}} src = {Pencil}  src2 = {job} subtitle = 'pencil' information ='広告・宣伝に関する業務全般 + α' main = {{...profileStyle.main8}}/>
        </div>
    );
}

export default CompanyProfile;