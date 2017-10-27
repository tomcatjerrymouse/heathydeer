import React, { Component } from 'react';
import {Link} from "react-router"

import logo from './logo.png'

import './Header.css'

class Header extends Component {
    render() {
        return (
            <div>
                <div className="headerBack">
                    <div className="headerImg">
                        <img className='img' src={logo} alt="logo"/>
                    </div>
                    <div className="nav">
                        <ul className='ul'>
                            <li className='li'><Link className="start" activeStyle={{textDecoration: 'none'}} activeClassName='underline' to='/Home'>首页</Link></li>
                            <li className='li'><Link className="start" activeStyle={{textDecoration: 'none'}} activeClassName='underline' to='/AluService'>阿鹿服务</Link></li>
                            <li className='li'><Link className="start" activeStyle={{textDecoration: 'none'}} activeClassName='underline' to='/MediaCoverage'>在线预约</Link></li>
                            <li className='li'><Link className="start" activeStyle={{textDecoration: 'none'}} activeClassName='underline' to='/OnlineBooking'>媒体报道</Link></li>
                            <li className='li'><Link className="start" activeStyle={{textDecoration: 'none'}} activeClassName='underline' to='/AboutUs'>关于我们</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
