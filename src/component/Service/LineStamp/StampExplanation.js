import React from 'react';

function StampExplanation(props) {
    return(
        <div className='stampEx'>
            <div style = {styles.name}>
                {props.name}
            </div>
            <div style = {styles.sub}>
                <div>
                    年齢： {props.year}
                </div>
                <div>
                    職種： {props.kind}
                </div>
                <div>
                    趣味：{props.interest}
                </div>
                <div>
                    性格：{props.personality}
                </div>
            </div>
        </div>
    );
}

const styles = {
    name: {
        fontSize:'19.06px'
    },
    sub: {
        fontSize:'12.71px',
        textAlign: 'left',
        lineHeight: '2.0em',
        width: '210px',
        marginLeft: '15%'
    }
}

export default StampExplanation;