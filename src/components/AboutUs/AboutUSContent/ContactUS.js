import React, { Component } from 'react';

import BaiduMap from './BaiduMap'

class ContactUS extends Component {
    render() {
        return (
            <div className='common'>
                <div className='eight'>
                    深圳市健康阿鹿信息科技有限公司<br/>
                    地址：深圳市南山区朗山路17-2健康元大厦<br/>
                    电话：+86-755-86259773
                </div>
                <BaiduMap></BaiduMap>
            </div>
        );
    }
}

export default ContactUS;