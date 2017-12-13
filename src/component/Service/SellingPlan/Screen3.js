import React, { Component } from 'react';


class Screen3 extends Component {
    render() {
        return(
            <div style = {{ position: 'absolute', top: '20%', left:'20%', width:'60%', height: '60%'}}>
                <div style = {{ fontSize: '2.0em'}}>
                    料金
                </div>

                <div style = {{ display: 'flex', width: '100%', height: '80%', marginTop: '5%'}}>
                    <div className="basic" style =
                        {{
                            position: 'absolute',
                            width:'30%',
                            height:'70%',
                            borderTop:'solid #bea0e4 thick',
                            borderLeft:'solid #bea0e4 thin',
                            borderRight:'solid #bea0e4 thin',
                            borderBottom:'solid #bea0e4 thin',
                            borderRadius:'0.5em'
                        }}
                    >
                        <div style = {{width:'90%', marginTop:'3%',marginLeft: '5%', height: '15%', color:'#bea0e4 ',fontSize:'23px', borderBottom: 'solid 1px gray', textAlign:'center'}}>
                            ベーシックプラン
                        </div>
                        <div style = {{width:'90%', height:'40%', marginTop: '20%',fontSize: '15px', lineHeight:'2'}}>
                            企画書10ページ以内<br/>
                            企画自体はお客様の方で立案
                        </div>
                        <div style = {{width:'100%', marginTop: '8.5%',height:'20%', backgroundColor: '#bea0e4',fontSize:'27px', color:'white'}}>
                            100,000円(税別）
                        </div>
                    </div>
                    <div className="option" style =
                        {{
                            position: 'absolute',
                            width:'30%',
                            height:'70%',
                            left:'33%',
                            borderTop:'solid #bea0e4 thick',
                            borderLeft:'solid #bea0e4 thin',
                            borderRight:'solid #bea0e4 thin',
                            borderBottom:'solid #bea0e4 thin',
                            borderRadius:'0.5em'
                        }}
                    >
                        <div style = {{width:'90%', marginTop:'3%',marginLeft: '5%', height: '15%', color:'#bea0e4 ',fontSize:'23px', borderBottom: 'solid 1px gray', textAlign:'center'}}>
                            オプションプラン
                        </div>
                        <div style = {{width:'90%', height:'40%', marginTop: '20%',fontSize: '15px', lineHeight:'2'}}>
                            企画書10ページ以内<br/>
                            企画自体はお客様の方で立案
                        </div>
                        <div style = {{width:'100%', marginTop: '8.5%',height:'20%', backgroundColor: '#bea0e4',fontSize:'27px', color:'white'}}>
                            100,000円(税別）
                        </div>
                    </div>
                    <div className="original" style =
                        {{
                            position: 'absolute',
                            width:'30%',
                            height:'70%',
                            left:'66%',
                            borderTop:'solid #bea0e4 thick',
                            borderLeft:'solid #bea0e4 thin',
                            borderRight:'solid #bea0e4 thin',
                            borderBottom:'solid #bea0e4 thin',
                            borderRadius:'0.5em'
                        }}
                    >
                        <div style = {{width:'90%', marginTop:'3%',marginLeft: '5%', height: '15%', color:'#bea0e4 ',fontSize:'23px', borderBottom: 'solid 1px gray', textAlign:'center'}}>
                            ◯◯◯プラン
                        </div>
                        <div style = {{width:'90%', height:'40%', marginTop: '20%',fontSize: '15px', lineHeight:'2'}}>
                            企画書10ページ以内<br/>
                            企画自体はお客様の方で立案
                        </div>
                        <div style = {{width:'100%', marginTop: '8.5%',height:'20%', backgroundColor: '#bea0e4',fontSize:'27px', color:'white'}}>
                            100,000円(税別）
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Screen3;