import React from 'react';
import GroupInformation from './GroupInformation';

function Group() {
    return(
        <div className='GroupWrapper' style = {{position:'absolute', width:'60%', left:'20%', height:'600px', top: '1650px', backgroundColor:'rgba(248,251,253, 1)'}}>
            <div style ={{fontFamily: 'Raleway, sans-serif', fontSize: '40px', letterSpacing: '0.1em', position: 'absolute', width: '100%', top:'10%'}}>
                COLLAGE
            </div>
            <div style ={{fontFamily: 'Raleway, sans-serif', fontSize: '25px', color: '#a2a2a2',letterSpacing: '0.1em', position: 'absolute', width: '100%', top:'18%'}}>
                GROUP
            </div>
            <div style = {{marginTop: '200px'}}>
            <GroupInformation
               src="https://s3-ap-northeast-1.amazonaws.com/logcolle/Group1.png"
               name='株式会社アッサンブラージュ'
               detail="主にテレビ番組の企画・制作を行う制作会社です。
                番組制作のノウハウにより、通常の広告制作の単価より、
                割安な単価での映像制作が可能となります。"
            />
            <GroupInformation
               src="https://s3-ap-northeast-1.amazonaws.com/logcolle/Group2.png"
               name='株式会社コラージュゼロ'
               detail="広告×ITを標榜し、研究開発からサービス化までを目指す会社です。現在は人工知能を用いて広告動画を科学的に
                     評価するプロジェクトに取り組んでいます。"
            />
            </div>
        </div>
    );
}

export default Group;