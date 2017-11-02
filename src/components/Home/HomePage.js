import React, { Component } from 'react';
import {Link} from "react-router"
import {
    Carousel,
} from 'antd';

import './homePage.css'
import './news.css'

import news1 from './news1.png'
import news2 from './news2.png'
import news3 from './news3.png'
import sub1 from './news1Sub.png'
import sub2 from './news2Sub.png'
import sub3 from './news3Sub.png'
import carousel_1 from './banner/banner1.png'
import carousel_2 from './banner/banner2.png'
import menzhen from './menzhen.png'
import huiyuan from './huiyuan.png'
import hulianwang from './hulianwang.png'
import internet from './Internet.png'
import member from './Member.png'
import outPatient from './Outpatient.png'
import map from './map.png'
import cooperation from './cooperation.png'
import cooperation2 from './cooperation2.png'
import cooperation3 from './cooperation3.png'

class HomePage extends Component {

    scrollToAnchor = (anchorName) => {
        setTimeout(function () {
            console.log(anchorName)
            if (anchorName) {
                let anchorElement = document.getElementById(anchorName);
                console.log(anchorElement)
                if(anchorElement) {
                    anchorElement.scrollIntoView();
                }
            }
        },10)
    }
    render() {
        return (
            <div id='home' className='homeWrap' style={{minWidth:'1200px',paddingTop:'82px'}}>
                <div className='banner'>
                    <div className='bannerHeader'>
                        <p className='p1'>健康阿鹿</p>
                        <p className='p2'>开创专家合伙制共享诊所</p>
                    </div>
                    <div className='bannerContent'>
                        <div className='fast'>
                            <div className='ball'>快</div>
                            <p className='bannerContentWenzi fastWenzi'>一键预约，定时看诊无需等待，<br/>
                                省时更省心</p>
                        </div>
                        <div className="line2"></div>
                        <div className='save'>
                            <div className='ball'>省</div>
                            <p className='bannerContentWenzi saveWenzi'>医保定点，支付便捷就医更省</p>
                        </div>
                        <div className="line3"></div>
                        <div className='quality'>
                            <div className='ball'>质</div>
                            <p className='bannerContentWenzi fastWenzi'>名医坐诊，享受高质、高效的<br/>
                                诊疗服务</p>
                        </div>
                    </div>
                </div>
                <Carousel autoplay >
                            <div className="carousel"><img src={carousel_1} style={{width:'100%'}} alt=""/></div>
                            <div className="carousel"><img src={carousel_2} style={{width:'100%'}} alt=""/></div>
                </Carousel>
                <div className="serviceWrap">
                    <div className='aluServersTitle'>
                        <p style={{fontSize:'26px',color:'#424242',letterSpacing:'0'}}>阿鹿健康</p>
                        <p style={{fontSize:'13px',color:'#666666',letterSpacing:'0',marginTop:'4px',marginBottom:'18px'}}>以患者为亲人，提供安心、放心、省心的健康服务</p>
                        <div className='line4'></div>
                    </div>
                    <div className='aluServers'>
                        <Link onClick={()=>this.scrollToAnchor('menzhen')} to='/AluService'>
                            <div className='effects'>
                                <img onClick={()=>this.scrollToAnchor('menzhen')} src={menzhen} width='373px' height='240px' alt=""/>
                                <img onClick={()=>this.scrollToAnchor('menzhen')} className='imgEffects' src={outPatient} width='332px' height='170px' alt=""/>
                            </div>
                        </Link>
                        <Link onClick={()=>this.scrollToAnchor('huiyuna')} to='/AluService'>
                            <div className='effects effects2'>
                                <img src={huiyuan} width='373px' height='240px' alt=""/>
                                <img className='imgEffects' src={member} width='332px' height='170px' alt=""/>
                            </div>
                        </Link>
                        <Link onClick={()=>this.scrollToAnchor('hulianwang')} to='/AluService'>
                            <div className='effects effects2'>
                                <img src={hulianwang} width='373px' height='240px' alt=""/>
                                <img className='imgEffects' src={internet} width='332px' height='170px' alt=""/>
                            </div>
                        </Link>
                    </div>
                </div>
                <div id="media" className='mediaWrap'>
                    <div className='mediaAluTitle'>
                        <p style={{fontSize:'26px',color:'#424242',letterSpacing:'0'}}>媒体报道</p>
                        <p style={{fontSize:'13px',color:'#666666',letterSpacing:'0',marginTop:'4px',marginBottom:'18px'}}>您可以通过以下新闻和公司动态进一步了解我们</p>
                        <div className='line4'></div>
                    </div>
                    <div className="news">
                        <a target='blank' href="http://dl.cnr.cn/tnhb/20171020/t20171020_523994483.shtml">
                            <div className='new new1'>
                                <img src={news1} width='346px' height='200px' alt=""/>
                                <div className='newsWenz'>
                                    <p className="wenzTitle">健康阿鹿连锁诊所携手四川省第二中医院共…</p>
                                    <div className='wenzContent wenzContent1'>
                                        2017年10月17日下午，健康阿鹿连锁诊所与四川省第二中医医院医联体战略合作签约授牌仪式在成都新…
                                    </div>
                                    <div className='sub1'>
                                        <img src={sub1} width='47px' height='29px' alt=""/>
                                    </div>
                                    <div className='more more1'>more +</div>
                                </div>
                            </div>
                        </a>
                        <a target='blank' href="http://economy.gmw.cn/2017-10/20/content_26559872.htm">
                            <div className='new new2'>
                                <img src={news2} width='346px' height='200px' alt=""/>
                                <div className='newsWenz'>
                                    <p className="wenzTitle">共享诊所：以互联网+智慧医疗应用平台创…</p>
                                    <div className='wenzContent wenzContent2'>
                                        共享诊所模式，是为诊所和专家搭建一个共享诊室空间、共享经营收益、共享品牌发展的多赢良好平…
                                    </div>
                                    <div className='sub2'>
                                        <img src={sub2} width='64px' height='25px' alt=""/>
                                    </div>
                                    <div className='more more2'>more +</div>
                                </div>
                            </div>
                        </a>
                        <a target='blank' href="https://mp.weixin.qq.com/s/zUcSGiwfHbTdXPNpgQwa3A">
                            <div className='new new3'>
                                <img src={news3} width='346px' height='200px' alt=""/>
                                <div className='newsWenz'>
                                    <p className="wenzTitle">喜讯！四川省中医院张永华教授专家工作室…</p>
                                    <div className='wenzContent wenzContent3'>
                                       2017年10月20日下午，成都中医药大学附属医院泌尿外科张永华教授专家工作室在健康阿鹿连锁…
                                    </div>
                                    <div className='sub3'>
                                        <img src={sub3} width='73px' height='20px' alt=""/>
                                    </div>
                                    <div className='more more3'>more +</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='mapWrap'>
                    <div className='mapBG'></div>
                    <div className="map">
                        <div className='mapTitle'>
                            <p style={{fontSize:'26px',color:'#424242',letterSpacing:'0',lineHeight:'37px'}}>连锁网点</p>
                            <p style={{marginBottom:'18px'}} className='bannerContentWenzi'>专家入驻，共建共享式诊所</p>
                            <div className='line4'></div>
                        </div>
                        <div className='mpamWrap'>
                            <div style={{width:'920px',height:'674px'}}>
                                <img src={map} width='920px' height='674px' alt=""/>
                            </div>
                            <div className='mapIntroduce'>
                                <div className="introduceContent">
                                    <div className="small small1"></div>
                                    <div className='smallContent'>
                                        健康阿鹿诊所目前已吸引了全国各地专家入驻，以四川、山东、河南、黑龙江为首批主要入驻区域，逐步扩散至广东、福建、上海、浙江、云南等地区，最终扩散至全国。
                                    </div>
                                    <div className="small small2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width:'100%',height:'717px',textAlign:'center'}}>
                    <div style={{marginTop:"56px"}}><img src={cooperation} width='1116px' height='231px' alt=""/></div>
                    <div style={{marginTop:"50px",marginBottom:'50px'}}><img src={cooperation2} width='1116px' height='134px' alt=""/></div>
                    <div><img src={cooperation3} width='1116px' height='136px' alt=""/></div>
                </div>
            </div>
        );
    }
}

export default HomePage;