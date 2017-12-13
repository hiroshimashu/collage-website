import React from 'react';

function GroupInformation(props) {
    return(
        <div className='a-group' style = {{display: 'flex', display: '-webkit-flex', position:'relative',width:'100%', height:'230px', fontFamily: 'Hiragino Maru Gothic'}}>
            <img src = {props.src} alt={props.name} style={styles.img} />
            <div style= {styles.border} />
            <div className="GroupInformation" style = { styles.detail }>
                <div className="groupName" style = {styles.name}>
                    {props.name}
                </div>
                <div className="GroupDetail" style ={{color: '#6e6e6e'}}>
                    {props.detail}
                </div>
            </div>
        </div>
    );
}

const styles = {
    img: {
        position: 'absolute',
        width:'200px',
        height:'100px',
        left: '15%'
    },
    detail: {
        position:'absolute',
        width:'50%',
        left:'45%',
    },
    name: {
        textAlign:'left',
        fontWeight:'bold'
    },
    border: {
        position: 'absolute',
        width:'20px',
        height: '50%',
        left:'40%',
        borderRight:'1px solid',
        color: '#a2a2a2'
    }
}

export default GroupInformation;