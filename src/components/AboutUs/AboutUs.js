import React, { Component } from 'react';

import {Link} from "react-router"

import aboutTitle from './16sucai_2016052117_10011 (3).png'
import aboutUs from './Group 6.png'

import './about.css'

class AboutUs extends Component {
    render() {
        return (
            <div style={{position:'relative',backgroundColor:'#F6F6F6',minWidth:'1400px'}}>
                <img width={'100%'} src={aboutTitle} alt=""/>
                <div style={{marginTop:'-100px',marginLeft:"300px"}}>
                    <div><img src={aboutUs} alt=""/></div>
                    <ul>
                        <Link className="start2" activeClassName='active2' activeStyle={{textDecoration: 'none'}} to='/Brand'><li className="lis">品牌介绍</li></Link>
                        <Link className="start2" activeClassName='active2' activeStyle={{textDecoration: 'none'}} to='/Dot'><li className="lis">网点分布</li></Link>
                        <Link className="start2" activeClassName='active2' activeStyle={{textDecoration: 'none'}} to='/Recruit'><li className="lis">专家招募</li></Link>
                        <Link className="start2" activeClassName='active2' activeStyle={{textDecoration: 'none'}} to='/ContactUS'><li className="lis">联系我们</li></Link>
                    </ul>
                </div>
                <div style={{marginTop:'-408px',marginLeft:"500px"}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default AboutUs;