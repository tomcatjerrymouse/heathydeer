import React, { Component } from 'react';

import aluyun from './hulianwangImg/aluyun.png'
import dianzi from './hulianwangImg/dianzi.png'
import weixin from './hulianwangImg/weixin.png'
import xianshang from './hulianwangImg/xianshang.png'
import yongyao from './hulianwangImg/yongyao.png'
import zhihui from './hulianwangImg/zhihui.png'
import zhuanzhen from './hulianwangImg/zhuanzhen.png'
import zixun from './hulianwangImg/zixun.png'
import './aluService.css'

class AluServiceHulianwang extends Component {
    render() {
        return (
            <div className='hulianwangWrap'>
                    <div className='hulianwangContent'>
                    <div className="outpatientTitle">
                        <p style={{fontSize: '26px',color: '#333333',lineHeight:'37px',marginBottom:'4px'}}>互联网服务</p>
                        <p className='bannerContentWenzi' style={{marginBottom:'18px'}}>阿鹿云·互联网+智慧医疗应用平台</p>
                        <div className='line4'></div>
                    </div>
                    <div>
                        <img src={aluyun} width='618px' height='637px' alt=""/>
                        <div className='xiaotupian'>
                            <div style={{width:'144px',height:'100%',display:'inline-block'}}>
                                <div style={{width:'144px',height:'78px',textAlign:'center',marginBottom:'55px'}}>
                                    <img style={{marginBottom:'15px'}} src={xianshang} width='44px' height='46px' alt=""/>
                                    <p className='bannerContentWenzi'>线上预约</p>
                                </div>
                                <div style={{width:'144px',height:'78px',textAlign:'center',marginBottom:'55px'}}>
                                    <img style={{marginBottom:'15px'}} src={yongyao} width='44px' height='46px' alt=""/>
                                    <p className='bannerContentWenzi'>用药提醒</p>
                                </div>
                                    <div style={{width:'144px',height:'78px',textAlign:'center',marginBottom:'55px'}}>
                                    <img style={{marginBottom:'15px'}} src={zhuanzhen} width='44px' height='46px' alt=""/>
                                    <p className='bannerContentWenzi'>转诊及住院绿色通道</p>
                                </div>
                            </div>
                            <div style={{width:'144px',height:'100%',display:'inline-block',position:'relative',top:'-133px'}}>
                                <div style={{width:'144px',height:'78px',textAlign:'center',marginBottom:'55px'}}>
                                    <img style={{marginBottom:'15px'}} src={dianzi} width='44px' height='46px' alt=""/>
                                    <p className='bannerContentWenzi'>电子病历及健康档案管理</p>
                                </div>
                                <div style={{width:'144px',height:'78px',textAlign:'center',marginBottom:'55px'}}>
                                    <img style={{marginBottom:'15px'}} src={weixin} width='57px' height='46px' alt=""/>
                                    <p className='bannerContentWenzi'>微信随访</p>
                                </div>
                            </div>
                            <div style={{width:'144px',height:'100%',display:'inline-block',position:'relative',top:'-133px'}}>
                                <div style={{width:'144px',height:'78px',textAlign:'center',marginBottom:'55px'}}>
                                    <img style={{marginBottom:'15px'}} src={zhihui} width='44px' height='46px' alt=""/>
                                    <p className='bannerContentWenzi'>智慧药房移动处方</p>
                                </div>
                                <div style={{width:'144px',height:'78px',textAlign:'center',marginBottom:'55px'}}>
                                    <img style={{marginBottom:'15px'}} src={zixun} width='44px' height='46px' alt=""/>
                                    <p className='bannerContentWenzi'>在线咨询轻问诊</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default AluServiceHulianwang;