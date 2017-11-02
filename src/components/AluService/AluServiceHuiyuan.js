import React, { Component } from 'react';

import card from './huiyuanImg/card.png'
import card2 from './huiyuanImg/card2.png'
import ketang from './huiyuanImg/ketang.png'
import songyao from './huiyuanImg/songyao.png'
import xiaohu from './huiyuanImg/xiaohu.png'
import point from './huiyuanImg/point.png'

class AluServiceHuiyuan extends Component {
    render() {
        return (
            <div style={{position:'relative'}}>
                <div className='huiyuanBG'></div>
                <div className='huiyaunWrap'>
                    <div className='huiyWrap'>
                        <div className='memberTitle'>
                            <p className='menberP'>会员服务</p>
                            <p className='bannerContentWenzi' style={{marginBottom:'18px'}}>关爱您的健康，亲人般呵护备至</p>
                            <div className='line4'></div>
                        </div>
                        <div className='cardWrap'>
                            <div style={{marginLeft:'20px',width:'46px',height:'34px'}}>
                                <img src={card} width='46px' height='34px' alt=""/>
                            </div>
                            <p style={{fontSize: '16px',color: '#333333',marginTop:'-39px',marginLeft:'86px',marginBottom:'5px'}}>健康加油卡</p>
                            <div style={{marginLeft:'86px',marginBottom:'13px'}}>
                                <span style={{marginRight:'68px'}} className='bannerContentWenzi'><img className='point' src={point} width='3px' height='3px' alt=""/> 家庭健康年卡</span>
                                <span className='bannerContentWenzi'><img className='point' src={point} width='3px' height='3px' alt=""/> 会员储值卡</span>
                            </div>
                            <img src={card2} width='360px' height='255px' alt=""/>
                        </div>
                        <div className='fuwuWrap'>
                            <div style={{marginBottom:'58px'}}>
                                <img src={xiaohu} width='38px' height='43px' alt=""/>
                                <div style={{marginLeft:'63px'}}>
                                    <p style={{fontSize: '16px',color: '#333333',marginTop:'-46px'}}>阿鹿小护</p>
                                    <p className='bannerContentWenzi' style={{marginTop:'5px'}}>转诊加号、就诊陪护</p>
                                </div>
                            </div>
                            <div style={{marginBottom:'49px'}}>
                                <img src={songyao} width='42px' height='39px' alt=""/>
                                <div style={{marginLeft:'63px'}}>
                                    <p style={{fontSize: '16px',color: '#333333',marginTop:'-46px'}}>送药上门</p>
                                    <p className='bannerContentWenzi' style={{marginTop:'5px'}}>智慧药房，实现慢病复诊用药送药上门</p>
                                </div>
                            </div>
                            <div style={{marginBottom:'58px'}}>
                                <img src={ketang} width='50px' height='52px' alt=""/>
                                <div style={{marginLeft:'63px'}}>
                                    <p style={{fontSize: '16px',color: '#333333',marginTop:'-46px'}}>健康课堂</p>
                                    <p className='bannerContentWenzi' style={{marginTop:'5px'}}>日常健康知识及急救培训</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AluServiceHuiyuan;