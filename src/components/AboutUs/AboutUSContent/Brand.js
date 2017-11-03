import React, { Component } from 'react';


import './content.css'

class Brand extends Component {
    render() {
        return (
            <div className='common'>
                <div className='brandWenzi1 first'>
                    健康阿鹿，缘于九色鹿的传说，延续九色鹿乐于助人、博施济众的精神，将“乐善助人”作为健康阿鹿的品牌精神。<br/>
                    健康阿鹿按照国际标准打造连锁诊所，致力于为国人提供安心、放心、省心的医疗健康服务，为医生专家提供舒适便捷、收入阳光的共享诊所，建立大平台、运用大数据、服务大健康，目标成为国内领先、国际一流的医疗服务品牌。
                </div>
                <div className='second'>
                    <p className='brandWenzi2'>服务理念</p>
                    <p className='brandWenzi1'>以患者为亲人，提供安心、放心、省心的健康服务</p>
                </div>
                <div className='third'>
                    <p className='brandWenzi2'>健康阿鹿诊所<span style={{fontSize: '16px',color: '#151515',lineHeight: '22px'}}> | 连锁诊所 名医坐诊 名厂好药</span></p>
                    <p className='brandWenzi1'>健康阿鹿诊所开创全新的专家合伙制共享诊所理念，以名医专科为特色+社区全科为基础的服务模式，汇集当地及国内的内、外科主流科室口碑专家打造名医工作室，对接上市医药集团——健康元药业及丽珠医药集团成熟的医药体系，秉承以患者为亲人的服务理念，为广大患者提供安心、放心、省心的健康服务。</p>
                </div>
                <div className='four'>
                    <p className='brandWenzi2'>阿鹿云诊所<span style={{fontSize: '16px',color: '#151515',lineHeight: '22px'}}> | 互联网+智慧诊所</span></p>
                    <p className='brandWenzi1'>阿鹿云诊所是健康阿鹿独立打造、拥有自主知识产权、国内一流的智慧诊所系统，为阿鹿诊所提供5大互联网+能力，致力于为患者、专家和医护人员提供便捷、易用、好用的全流程服务。</p>
                </div>
            </div>
        );
    }
}

export default Brand;