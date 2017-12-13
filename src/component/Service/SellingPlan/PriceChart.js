import React from 'react';


function PriceChart(props) {
    return(
        <div>
            <div className = 'chartWrapper' style = {props.wrapperStyle}/>
            <div style = {props.background}/>
            <div style = { props.planStyle}>
                {props.plan}
            </div>
            <div style = { props.priceStyle}>
                {props.price}
            </div>
            <div style = { props.exStyle}>
                {props.ex}
            </div>
            <div style = { props.detailStyle}>
                {props.exDetail}
            </div>
        </div>
    );
}

export default PriceChart;