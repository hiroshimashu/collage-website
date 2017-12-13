import React from 'react';
import PriceChart from './PriceChart';
import styleChart1 from './styleChart1';
import styleChart2 from './styleChart2';
import styleChart3 from './styleChart3';
const windowWidth =  window.innerWidth;
const windowHeight = windowWidth *  3812 /750;

const titleWidth = windowWidth *  0.095;
const titleHeight = windowHeight *  0.009;
function calculateTitleX() {
    return( windowWidth - titleWidth) / 2;
}
const titleX = calculateTitleX();
const titleY = 1950 / 3812 * windowHeight;



function Prices() {
    return(
        <div className = 'priceWrapper'>
            <div className="title" style = {styles.title}>
                料金
            </div>
            <PriceChart
                wrapperStyle = {styleChart1.wrapper}
                background = { styleChart1.background}
                planStyle = { styleChart1.plan}
                priceStyle = { styleChart1.price }
                exStyle = { styleChart1.ex}
                detailStyle = { styleChart1.exDetail }
                plan = 'ベーシックプラン'
                price = '100,000円(税別)'
                ex = '企画書10ページ以内'
                exDetail = '企画自体はお客様の方で立案'
            />
            <PriceChart
                wrapperStyle = {styleChart2.wrapper}
                background = { styleChart2.background}
                planStyle = { styleChart2.plan}
                priceStyle = { styleChart2.price }
                exStyle = { styleChart2.ex}
                detailStyle = { styleChart2.exDetail }
                plan = 'オプションプラン'
                price = '10,000円(税別)'
                ex = '追加ページ作成'
                exDetail = '(11ページ目以降の1ページ当たりの料金)'
            />
            <PriceChart
                wrapperStyle = {styleChart3.wrapper}
                background = { styleChart3.background}
                planStyle = { styleChart3.plan}
                priceStyle = { styleChart3.price }
                exStyle = { styleChart3.ex}
                detailStyle = { styleChart3.exDetail }
                plan = '◯◯◯プラン'
                price = '内容によりご相談'
                ex = '企画自体からコラージュで請負'
            />
        </div>
    );
}

const styles = {
    title: {
        position: 'absolute',
        width: titleWidth,
        height: titleHeight,
        top: titleY,
        left: titleX,
        right: titleX,
        fontFamily: 'a-otf-gothic-bbb-pr6n',
        fontSize: '17px',
        fontWeight: '600'
    }
}

export default Prices;