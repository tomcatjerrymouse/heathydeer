import React, { Component } from 'react';

import recruit from './Group 9.png'

class Recruit extends Component {
    render() {
        return (
            <div className='common'>
                <img style={{marginBottom:'29px'}} src={recruit} width='805px' height='176px' alt=""/>
                <div className='brandWenzi1 six'>
                    未来，医生将更多趋向多点甚至自由执业，医生个人品牌的建立变得尤为重要，在互联网时代下，医生通过新型诊所模式与患者建立联系，增强自己的曝光度，这不仅有利于医生自我形象的建立，更有利于专业医疗知识的传播普及，对推动改善医患关系也大有裨益。
                </div>
                <p style={{fontSize: '26px', color: '#333333',marginBottom:'32px'}}>期待您的加入！</p>
                <div className='seven'>
                    <p style={{fontSize: '18px', color: '#333333', lineHeight: '26px',}}>深圳市健康阿鹿信息科技有限公司</p>
                    <p className='brandWenzi1'>公司地址：深圳市南山区朗山路17-2健康元大厦
                        <br/>服务热线：0755-86252487</p>
                </div>
            </div>
        );
    }
}

export default Recruit;