import React, { Component } from 'react';

import {Link} from "react-router"

import './Footer.css'

import lianheguo from './lianheguo.png'
import weishen from './weishen.png'
import kexue from './kexue.png'
import yinguo from './yinguo.png'
import zhongyi from './zhongyi.png'
import erweima from './erweima.png'

class Footer extends Component {

    scrollToAnchor = (anchorName) => {
        setTimeout(function () {
            console.log(anchorName)
            if (anchorName) {
                let anchorElement = document.getElementById(anchorName);
                console.log(anchorElement)
                if(anchorElement) { anchorElement.scrollIntoView(); }
            }
        },10)
    }
    render() {
        return (
            <div className='backWrap'>
                <div className='wrap'>
                    <div className='navWrap'>
                        <div className='navWrapSub'>
                            <div className='navTitle'>阿鹿服务</div>
                            <div className='line'></div>
                            <ul className='ul'>
                                <Link activeStyle={{textDecoration:'none'}} to='/AluService'><li className="lies" onClick={()=>this.scrollToAnchor('menzhen')}>门诊服务</li></Link>
                                <Link activeStyle={{textDecoration:'none'}} to='/AluService'><li className="lies" onClick={()=>this.scrollToAnchor('huiyuna')}>会员服务</li></Link>
                                <Link activeStyle={{textDecoration:'none'}} to='/AluService'><li className="lies" onClick={()=>this.scrollToAnchor('hulianwang')}>互联网服务</li></Link>
                            </ul>
                        </div>
                        <div className='navWrapSub'>
                            <div className='navTitle'>预约挂号</div>
                            <div className='line'></div>
                            <ul className='ul'>
                                <Link activeStyle={{textDecoration:'none'}} to='/OnlineBooking'><li className="lies" onClick={()=>this.scrollToAnchor('online')}>在线预约</li></Link>
                            </ul>
                        </div>
                        <div className='navWrapSub'>
                            <div className='navTitle'>媒体报道</div>
                            <div className='line'></div>
                            <ul className='ul'>
                                <Link activeStyle={{textDecoration:'none'}} to='/Home'><li className="lies" onClick={()=>this.scrollToAnchor('media')}>媒体文章</li></Link>
                            </ul>
                        </div>
                        <div className='navWrapSub'>
                            <div className='navTitle'>关于我们</div>
                            <div className='line'></div>
                            <ul className='ul'>
                                <Link activeStyle={{textDecoration:'none'}} to='/Brand'><li className="lies" onClick={()=>this.scrollToAnchor('brand')}>品牌介绍</li></Link>
                                <Link activeStyle={{textDecoration:'none'}} to='/Dot'><li className="lies" onClick={()=>this.scrollToAnchor('dot')}>网点分布</li></Link>
                                <Link activeStyle={{textDecoration:'none'}} to='/Recruit'><li className="lies" onClick={()=>this.scrollToAnchor('recruit')}>专家招募</li></Link>
                                <Link activeStyle={{textDecoration:'none'}} to='/ContactUS'><li className="lies" onClick={()=>this.scrollToAnchor('contactUS')}>联系我们</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className='blackLineS1'></div>
                    <div className='friendshipLink'>
                        <div className='navTitle'>友情链接</div>
                        <div className='pic'>
                            <a target='blank' href="https://www.unicef.org"><img style={{marginRight:'10px'}} src={lianheguo} width='96px' height='57px' alt=""/></a>
                            <a target='blank' href="http://www.who.int/zh/"><img src={weishen} width='93px' height='57px' alt=""/></a>
                            <a target='blank' href="http://www.kna-tech.com"><img src={kexue} width='92px' height='57px' alt=""/></a>
                            <a target='blank' href="https://www.bma.org.uk"><img src={yinguo} width='93px' height='58px' alt=""/></a>
                            <a target='blank' href="http://www.cma.org.cn"><img src={zhongyi} width='93px' height='58px' alt=""/></a>
                        </div>
                    </div>
                    <div className='blackLineS2'></div>
                    <div className='erweima'>
                        <img src={erweima} width='144px' height='147px' alt=""/>
                    </div>
                    <div ></div>
                </div>
                <Link to='/copyRight'>
                    <div onClick={()=>this.scrollToAnchor('copy')} className='copyRight'>
                        Copyright © 2017 www.healthydeer.com 深圳健康阿鹿信息技术有限公司 All Rights Reserved.<br/>
                        中华人民共和国互联网药品信息服务资格证书(粤）-非经营性-2017-0017
                    </div>
                </Link>
            </div>
        );
    }
}

export default Footer;
