import React, { Component } from 'react';
import {Link} from "react-router"

import logo from './logo.png'

import './Header.css'

class Header extends Component {

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
            <div>
                <div className="headerBack">
                    <div className="headerImg">
                        <Link to='/Home'><img className='img' width={'146px'} height={'40px'} src={logo} alt="logo"/></Link>
                    </div>
                    <div className="nav">
                        <ul className='ul'>
                            <li className='li'><Link className="start" activeStyle={{textDecoration: 'none'}} activeClassName='underline' to='/Home'>首页</Link></li>
                            <li className='li'><Link className="start" activeStyle={{textDecoration: 'none'}} activeClassName='underline' to='/AluService'>阿鹿服务</Link></li>
                            <li className='li'><Link className="start" activeStyle={{textDecoration: 'none'}} activeClassName='underline' to='/OnlineBooking'>在线预约</Link></li>
                            {/*<Link className="start" activeStyle={{textDecoration: 'none'}} activeClassName='underline' to='/Home#map'><li className='li' onClick={()=>this.scrollToAnchor('map')}>媒体报道</li></Link>*/}
                            {/*<li className='li' onClick={()=>this.scrollToAnchor('media').bind(this)}><Link className="start" activeStyle={{textDecoration: 'none'}} activeClassName='underline' to='/Home'>媒体报道</Link></li>*/}
                            <Link className="start" activeStyle={{textDecoration: 'none'}} activeClassName='underline' to='/Home#media'><li className='li' onClick={()=>this.scrollToAnchor('media')}>媒体报道</li></Link>
                            <li className='li'><Link className="start" activeStyle={{textDecoration: 'none'}} activeClassName='underline' to='/AboutUs'>关于我们</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
