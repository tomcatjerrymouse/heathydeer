import React, { Component } from 'react';
import News from './news/News'
import {Link} from "react-router"
import {
    Carousel,
} from 'antd';

import './homePage.css'

import carousel_1 from './Carousel.png'
import carousel_2 from './Carousel 2.png'
import carousel_3 from './Carousel 3.png'
import carousel_4 from './Carousel 4.png'
import aluServers from './aluServers.png'
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
import technology from './technology.png'

class HomePage extends Component {
    render() {
        return (
            <div className='homeWrap'>
                <Carousel autoplay >
                            <div className="carousel"><img src={carousel_1} style={{width:'100%'}} alt=""/></div>
                            <div className="carousel"><img src={carousel_2} style={{width:'100%'}} alt=""/></div>
                            <div className="carousel"><img src={carousel_3} style={{width:'100%'}} alt=""/></div>
                            <div className="carousel"><img src={carousel_4} style={{width:'100%'}} alt=""/></div>
                </Carousel>
                <div className="serviceWrap">
                    <div style={{textAlign:"center",marginTop:'50px',marginBottom:"100px"}}>
                        <img src={aluServers} alt=""/>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <div className="show1" style={{display:'inline-block',marginRight: '-3px'}}>
                            <div style={{display:'inline-block',marginRight: '-3px'}} className="show1"><Link to='/AluServiceMenzhen'><img src={menzhen} alt=""/></Link></div>
                            <div className="blue hide1"><Link to='/AluServiceMenzhen'><img src={outPatient} alt=""/></Link></div>
                        </div>
                        <div className="show2" style={{display:'inline-block',marginRight: '-3px'}}>
                            <div style={{display:'inline-block',marginRight: '-3px'}} className="show2"><Link to='/AluServiceHuiyuan'><img src={huiyuan} alt=""/></Link></div>
                            <div className="blue hide2"><Link to='/AluServiceHuiyuan'><img src={member} alt=""/></Link></div>
                        </div>
                        <div className="show3" style={{display:'inline-block',marginRight: '-3px'}}>
                            <div style={{display:'inline-block',marginRight: '-3px'}} className="show3"><Link to='/AluServiceHulianwang'><img src={hulianwang} alt=""/></Link></div>
                            <div className="blue hide3"><Link to='/AluServiceHulianwang'><img src={internet} alt=""/></Link></div>
                        </div>
                    </div>
                </div>
                <News></News>
                <div className='bgImg'><img src={map} alt=""/></div>
                <div style={{width:'100%',height:'800px',textAlign:'center'}}>
                    <div style={{marginTop:"50px"}}><img src={cooperation} alt=""/></div>
                    <div><img src={cooperation2} alt=""/></div>
                    <div style={{marginTop:"20px",marginBottom:'20px'}}><img src={cooperation3} alt=""/></div>
                    <div><img src={technology} alt=""/></div>
                </div>
            </div>
        );
    }
}

export default HomePage;