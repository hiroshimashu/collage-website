import React from 'react';
import Radium from 'radium';

const conceptMainX = `${316/1200 * 100}%`;
const conceptMainX2 = `${56/ 750 * 100}%`;
const conceptMainY2 = `${359/963 * 100}%`;
const conceptMainHeight2 = `${517/963 * 100}%`;
const { StyleRoot } = Radium;


function ConceptMain() {
    return(
        <StyleRoot>
            <div style={styles.conceptMain}>
            "コラージュ"とはもともと現代絵画の手法の一つです.<br/>
            従来の画法/技法とは異なり、<br/>
            あらゆる性質とロジックがバラバラの素材を組み合わせて、<br/>
            ひとつの作品を作り出し、<br/>
            作品としての統一性を出す技法です。<br/>
            その技法は絵画と彫刻の境界を消滅させました。<br/>
            今の広告業界に必要なのは、<br/>
            既存のプロモーション手法、商慣習にとらわれない、<br/>
            新しい発想や概念、他業種との融合です。<br/>
           「広告という既成概念」の境界を消滅させ、<br/>
            そこから生まれる全く新しい形のコミュニケーション<br/>
            を提供したい。それが私たち”コラージュ”の想いです.
            </div>
        </StyleRoot>
    );
}

const styles = {
    conceptMain: {
        position: 'absolute',
        fontFamily:'a-otf-gothic-bbb-pr6n',
        fontWeight: '500',
        color:  '#484848',
        fontSize: '19.99px',
        lineHeight: '40px',
        textAlign: 'center',
        transform: 'scaleY(1.0008)',
        width: '539px',
        height: '481px',
        left: conceptMainX,
        right: conceptMainX,
        top: '322px',
        '@media (max-width: 500px)': {
            width: '82.7%',
            height: '17.7%',
            left: conceptMainX2,
            right: conceptMainX2,
            fontSize: '10px'
        }
    }
}

export default ConceptMain;