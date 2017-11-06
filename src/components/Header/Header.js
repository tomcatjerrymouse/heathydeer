import React, { Component } from 'react';
import {Link} from "react-router"

import logo from './logo.png'

import './Header.css'

class Header extends Component {

        scrollToAnchor = (anchorName) => {
            console.log(anchorName)
            setTimeout(function () {
                if (anchorName) {
                    let anchorElement = document.getElementById(anchorName);
                    console.log(anchorElement)
                    if(anchorElement) {
                        anchorElement.scrollIntoView();
                    }
                }
            },1)
        }

    render() {
        return (
            <div style={{position:'fixed',zIndex:'9999'}}>
                <div className="headerBack">
                    <div className="headerImg">
                        <Link to='/Home'><img className='img' width={'146px'} height={'40px'} src={logo} alt="logo"/></Link>
                    </div>
                    <div className="nav">
                        <ul className='ul'>
                            <li className='li'><Link onClick={()=>this.scrollToAnchor('home')} className="start" activeStyle={{textDecoration: 'none'}} activeClassName='underline' to='/Home'>首页</Link></li>
                            <li className='li'><Link onClick={()=>this.scrollToAnchor('service')} className="start" activeStyle={{textDecoration: 'none'}} activeClassName='underline' to='/AluService'>阿鹿服务</Link></li>
                            <li className='li'><Link onClick={()=>this.scrollToAnchor('online')} className="start" activeStyle={{textDecoration: 'none'}} activeClassName='underline' to='/OnlineBooking'>在线预约</Link></li>
                            <li className='li'><Link onClick={()=>this.scrollToAnchor('media')} className="start" activeStyle={{textDecoration: 'none'}} to='/Home'>媒体报道</Link></li>
                            <li className='li'><Link onClick={()=>this.scrollToAnchor('aboutUs')} className="start" activeStyle={{textDecoration: 'none'}} activeClassName='underline' to='/AboutUs'>关于我们</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
