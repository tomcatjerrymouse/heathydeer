/**
 * Created by Administrator on 2017/10/29.
 */
import React, { Component } from 'react';

import './news.css'

import news1 from './news1.png'
import news2 from './news2.png'
import news3 from './news3.png'
import media from './media.png'

class News extends Component {
    render() {
        return (
            <div className='mediaWrap'>
                <div style={{paddingTop:'60px'}}><img src={media} alt=""/></div>
                <ul>
                    <li style={{display:'inline-block'}}><a target='blank' href="http://dl.cnr.cn/tnhb/20171020/t20171020_523994483.shtml"><img src={news1} alt=""/></a></li>
                    <li style={{display:'inline-block'}}><a target='blank' href="http://economy.gmw.cn/2017-10/20/content_26559872.htm"><img src={news2} alt=""/></a></li>
                    <li style={{display:'inline-block'}}><a target='blank' href="https://mp.weixin.qq.com/s/zUcSGiwfHbTdXPNpgQwa3A"><img src={news3} alt=""/></a></li>
                </ul>
            </div>
        );
    }
}

export default News;