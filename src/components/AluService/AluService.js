import React, { Component } from 'react';

import title from './16sucai_2016052117_10011 (1).png'

import AluServiceMenzhen from './AluServiceMenzhen'
import AluServiceHuiyuan from './AluServiceHuiyuan'
import AluServiceHulianwang from './AluServiceHulianwang'

class AluService extends Component {
    render() {
        return (
            <div>
                <div className="AluTitle"><img width="100%" height='100%' src={title} alt=""/></div>
                <AluServiceMenzhen></AluServiceMenzhen>
                <AluServiceHuiyuan></AluServiceHuiyuan>
                <AluServiceHulianwang></AluServiceHulianwang>
            </div>
        );
    }
}

export default AluService;