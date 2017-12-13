import React, { Component } from 'react';

function WorksCard(props) {
    return(
        <div className="cardWrapper" style ={{position: 'absolute', width:'50%', height:'550px', left: `${props.left}`, top: `${props.top}`}}>
            <img src = {props.src} style={styles.img}/>
            <div style={{ position:'absolute', top:'200px', width:'100%', height:'350px', backgroundColor:`${props.color}`,
            }}>
                <div className='cardTitle' style ={styles.title}>{props.title}</div>
                <div className="main" style={styles.main}>{(props.main).map((content) => {
                    return (<div key={content}>{content}</div>);
                })}
                </div>
            </div>
        </div>
    );
}

const styles = {
    img: {
        position: 'absolute',
        width:'100%',
        height:'200px',
        left:'0%'
    },
    title: {
        position:'absolute',
        top:'2%',
        width:'100%',
        height:'10%',
        textAlign:'left',
        fontSize: '27px',
        fontFamily:'Hiragino Maru Gothic'
    },
    main: {
        position: 'absolute',
        top:'12%',
        width:'100%',
        height:'88%',
        textAlign:'left',
        fontSize: '15.84px',
        fontFamily:'Hiragino Maru Gothic'
    }
};


export default WorksCard;
