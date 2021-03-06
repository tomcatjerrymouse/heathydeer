import React, { Component } from 'react';

import title from './16sucai_2016052117_10011 (1).png'

import AluServiceMenzhen from './AluServiceMenzhen'
import AluServiceHuiyuan from './AluServiceHuiyuan'
import AluServiceHulianwang from './AluServiceHulianwang'

class AluService extends Component {
    render() {
        return (
            <div id='service' style={{minWidth:'1200px',paddingTop:'82px'}}>
                <div className="AluTitle"><img width="100%" height='100%' src={title} alt=""/></div>
                <div id='menzhen'></div>
                <AluServiceMenzhen></AluServiceMenzhen>
                <div id='huiyuna' style={{height:'82px',backgroundColor:'#F6F6F6'}}></div>
                <div ></div>
                <AluServiceHuiyuan ></AluServiceHuiyuan>
                <div id='hulianwang'></div>
                <AluServiceHulianwang></AluServiceHulianwang>
            </div>
        );
    }
}

export default AluService;