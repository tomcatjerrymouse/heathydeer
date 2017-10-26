import React, { Component } from 'react';

import QRcode from './erweima.png'

import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div>
                <div className='footerBack'>
                    <div className='footer'>
                        <div className='alu'>
                         <div>阿鹿健康</div>
                         <div className='line'></div>
                         <ul className='alu2'>
                             <li className='aluLies'>门诊服务</li>
                             <li className='aluLies'>会员服务</li>
                             <li className='aluLies'>互联网服务</li>
                         </ul>
                     </div>
                        <div className='alu'>
                            <div>预约挂号</div>
                            <div className='line'></div>
                            <ul className='alu2'>
                                <li className='aluLies'>在线预约</li>
                            </ul>
                        </div>
                        <div className='alu'>
                            <div>媒体报道</div>
                            <div className='line'></div>
                            <ul className='alu2'>
                                <li className='aluLies'>媒体文章</li>
                            </ul>
                        </div>
                        <div className='alu'>
                            <div>关于我们</div>
                            <div className='line'></div>
                            <ul className='alu2'>
                                <li className='aluLies'>品牌介绍</li>
                                <li className='aluLies'>网店分布</li>
                                <li className='aluLies'>专家招募</li>
                                <li className='aluLies'>联系我们</li>
                            </ul>
                        </div>
                        <div className='alu'>
                            <img src={QRcode} alt="二维码"/>
                        </div>
                    </div>
                    <div className='copyright'>
                        Copyright © 2017 www.healthydeer.com 深圳健康阿鹿信息技术有限公司 All Rights Reserved.<br/>
                        粤公网安备 12211212号
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
