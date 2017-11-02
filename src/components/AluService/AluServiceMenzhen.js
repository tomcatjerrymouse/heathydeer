import React, { Component } from 'react';

import baojian from './menzhenImg/baojian.png'
import diyi from './menzhenImg/diyi.png'
import dier from './menzhenImg/dier.png'
import disan from './menzhenImg/disan.png'
import doc from './menzhenImg/doc.png'
import jiating from './menzhenImg/jiating.png'
import jizhen from './menzhenImg/jizhen.png'
import shequ from './menzhenImg/shequ.png'
import shuhou from './menzhenImg/shuhou.png'
import zhongyi from './menzhenImg/zhongyi.png'

import './aluService.css'

class AluServiceMenzhen extends Component {
    render() {
        return (
            <div className='outpatientWrap'>
                <div className="outpatientTitle">
                    <p style={{fontSize: '26px',color: '#333333',lineHeight:'37px',marginBottom:'4px'}}>门诊服务</p>
                    <p className='bannerContentWenzi' style={{marginBottom:'18px'}}>以名医专科为特色、社区全科为基础的全面诊疗服务</p>
                    <div className='line4'></div>
                </div>
                <div className='outpatientContentWrap outpatientContentWrap1'>
                    <div className='outpatientWenzi'>
                        <div style={{marginBottom:'11px'}}><img src={doc} width='29px' height='38px' alt=""/></div>
                        <p className='pTitlle'>名医专科</p>
                        <div className='pContent' style={{width: '458px',height: '136px'}}>健康阿鹿邀请当地以及国内的内、外科主流科室口碑专家合伙，并设置“名医工作室”。根据病情提出具有充分医学依据和实践指南支持的诊疗建议，让您就诊更放心。主要专科领域有：消化科、心血管科、内分泌科、肾病、呼吸科、妇科、男科、儿科、皮肤科、不孕不育科、中医科等。
                            <br/>（注：名医专科以单店诊所合伙的名医主治领域为主，诊所之间会有差别，具体请咨询当地健康阿鹿诊所。）
                        </div>
                        <div style={{marginTop:'37px',marginBottom:'11px'}}><img src={shequ} width='29px' height='38px' alt=""/></div>
                        <p className='pTitlle'>社区全科服务</p>
                        <div className='pContent' style={{width: '458px',height: '96px'}}>健康阿鹿的全科医生在各个主要医学领域都经过培训，并具有多年临床经验。全科医学提供：常见病、多发病的诊疗（如感冒、咳嗽、发烧、头痛、头晕、失眠、腹痛腹胀、高血压、糖尿病、颈肩腰腿痛等）；慢病管理；社区康复、健康教育和心理咨询等。
                        </div>
                    </div>
                    <div className='menzhenPic1'><img src={diyi} width='534px' height='444px' alt=""/></div>
                </div>
                <div className="outpatientContentWrap outpatientContentWrap2">
                    <div className='outpatientLeft'>
                        <div style={{paddingBottom:'41px'}}>
                            <img src={dier} width='492px' height='400px' alt=""/>
                        </div>
                        <img style={{marginBottom:'10px'}} src={zhongyi} width='42px' height='34px' alt=""/>
                        <p className='pTitlle'>中医护理</p>
                        <div className='pContent' style={{width: '458px',height: '48px'}}>
                            健康阿鹿为您提供提供现代化丶可靠及方便的特色中医理疗服务，包括：头肩颈等身体部位理疗、推拿保健、针灸/艾灸等中医推拿理疗、火罐/药罐理疗等。
                        </div>
                        <img style={{marginTop:'38px'}} src={baojian} width='42px' height='38px' alt=""/>
                        <p className='pTitlle'>康复保健</p>
                        <div className='pContent' style={{width: '458px',height: '72px'}}>
                            健康阿鹿拥有专业的医护团队，为您提供各种肌肉、韧带、骨骼、关节损伤及神经损伤的康复及保健，主要包括：物理性康复训练、推拿保健、理疗设备辅助治疗、饮食指导、生活起居调护、心理建设、定期随访等。
                        </div>
                        <img style={{marginTop:'38px'}} src={shuhou} width='34px' height='38px' alt=""/>
                        <p className='pTitlle'>康复保健</p>
                        <div className='pContent' style={{width: '458px',height: '48px'}}>
                            健康阿鹿为手术患者提供术后护理服务，主要包括：病症护理、生活护理指导、康复训练、饮食指导、心理护理、定期随访等。
                        </div>
                    </div>
                    <div className='outpatientRight'>
                        <img style={{marginBottom:'10px'}}  src={jiating} width='41px' height='39px' alt=""/>
                        <p className='pTitlle'>家庭医生签约</p>
                        <div className='pContent' style={{width: '458px',height: '96px'}}>
                            健康阿鹿提供以医疗为核心的家庭护理服务，签约家庭医生旨在为您及其家庭提供安心的保障，让您能够在最方便他们的时间地点享受高品质的医疗服务，主要包含的服务内容有：电话咨询、上门访视、家庭护理、家庭康复指导、辅助检查、疫苗接种、健康教育等。
                        </div>
                        <img style={{marginTop:'37px',marginBottom:'10px'}} src={jizhen} width='41px' height='39px' alt=""/>
                        <p className='pTitlle'>常见病急诊、夜诊</p>
                        <div className='pContent' style={{width: '458px',height: '48px'}}>
                            健康阿鹿提供内科、外科、妇科、儿科等常见病急诊；夜间安排值班医生、护士随时为您提供治疗服务。
                        </div>
                        <div style={{paddingTop:'42px'}}>
                            <img src={disan} width='472px' height='536px' alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AluServiceMenzhen;