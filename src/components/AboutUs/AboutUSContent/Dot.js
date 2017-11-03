import React, { Component } from 'react';

import dot from './Group 10.png'

import './content.css'

class Dot extends Component {
    render() {
        return (
            <div className='dot'>
                <div className='brandWenzi1 five'>
                    健康阿鹿诊所目前已吸引了全国各地专家入驻，以四川、山东、河南、黑龙江为首批主要入驻区域，逐步扩散至广东、福建、上海、浙江、云南等地区，最终扩散至全国。
                </div>
                <img src={dot} width='808px' height='570px' alt=""/>
            </div>
        );
    }
}

export default Dot;