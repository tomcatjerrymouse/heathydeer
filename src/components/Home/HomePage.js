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
import media from './media.png'
import carousel_1 from './banner/banner1.png'
import carousel_2 from './banner/banner2.png'
import wenz1 from './banner/wenz1.png'
import wenz2 from './banner/wenz2.png'
import banner from './banner/banner3.png'
import aluServers from './aluServers.png'
import menzhen from './menzhen.png'
import huiyuan from './huiyuan.png'
import hulianwang from './hulianwang.png'
import internet from './Internet.png'
import member from './Member.png'
import outPatient from './Outpatient.png'
import map from './map.png'
import cooperation from './cooperation.png'
import cooperation3 from './hezuo.png'
import technology from './technology.png'

class HomePage extends Component {
    constructor (props) {
        super(props)
        this.state={
            id:'map'
        }
    }
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
            <div className='homeWrap' style={{minWidth:'1200px'}}>
                <img style={{position:'absolute',top:'16%',left:'63%',zIndex:'999'}} src={banner} width='270px' height='331px' alt=""/>
                <Carousel autoplay >
                            <div className="carousel"><img src={carousel_1} style={{width:'100%'}} alt=""/></div>
                            <div className="carousel"><img src={carousel_2} style={{width:'100%'}} alt=""/></div>
                            <div className="carousel"><img src={carousel_1} style={{width:'100%'}} alt=""/></div>
                            <div className="carousel"><img src={carousel_2} style={{width:'100%'}} alt=""/></div>
                </Carousel>
                <div className="serviceWrap">
                    <div style={{textAlign:"center",marginTop:'50px',marginBottom:"80px"}}>
                        <img src={aluServers} alt=""/>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <div className="show1" style={{display:'inline-block',marginRight: '-3px'}}>
                            <div onClick={()=>this.scrollToAnchor('menzhen')} style={{display:'inline-block',marginRight: '-3px'}} className="show1"><Link to='/AluServiceMenzhen'><img src={menzhen} alt=""/></Link></div>
                            <div onClick={()=>this.scrollToAnchor('menzhen')} className="blue hide1"><Link to='/AluServiceMenzhen'><img src={outPatient} alt=""/></Link></div>
                        </div>
                        <div className="show2" style={{display:'inline-block',marginRight: '-3px'}}>
                            <div onClick={()=>this.scrollToAnchor('huiyuna')} style={{display:'inline-block',marginRight: '-3px'}} className="show2"><Link to='/AluServiceHuiyuan'><img src={huiyuan} alt=""/></Link></div>
                            <div onClick={()=>this.scrollToAnchor('huiyuna')} className="blue hide2"><Link to='/AluServiceHuiyuan'><img src={member} alt=""/></Link></div>
                        </div>
                        <div className="show3" style={{display:'inline-block',marginRight: '-3px'}}>
                            <div onClick={()=>this.scrollToAnchor('hulianwang')} style={{display:'inline-block',marginRight: '-3px'}} className="show3"><Link to='/AluServiceHulianwang'><img src={hulianwang} alt=""/></Link></div>
                            <div onClick={()=>this.scrollToAnchor('hulianwang')} className="blue hide3"><Link to='/AluServiceHulianwang'><img src={internet} alt=""/></Link></div>
                        </div>
                    </div>
                </div>
                <div id="media" className='mediaWrap'>
                    <div style={{paddingTop:'60px'}}><img src={media} alt=""/></div>
                    <ul>
                        <li className='media' style={{display:'inline-block'}}><a target='blank' href="http://dl.cnr.cn/tnhb/20171020/t20171020_523994483.shtml"><img src={news1} alt=""/></a></li>
                        <li className='media' style={{display:'inline-block'}}><a target='blank' href="http://economy.gmw.cn/2017-10/20/content_26559872.htm"><img src={news2} alt=""/></a></li>
                        <li className='media' style={{display:'inline-block'}}><a target='blank' href="https://mp.weixin.qq.com/s/zUcSGiwfHbTdXPNpgQwa3A"><img src={news3} alt=""/></a></li>
                    </ul>
                </div>
                <div ><img width={'100%'} src={map} alt=""/></div>
                <div style={{width:'100%',height:'800px',textAlign:'center'}}>
                    <div style={{marginTop:"50px"}}><img src={cooperation} alt=""/></div>
                    <div style={{marginTop:"20px",marginBottom:'20px'}}><img src={cooperation3} alt=""/></div>
                    <div><img src={technology} alt=""/></div>
                </div>
            </div>
        );
    }
}

export default HomePage;