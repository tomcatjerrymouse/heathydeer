import React, { Component } from 'react';

import copyRight from './copyRight.png'

class CopyRight extends Component {
    render() {
        return (
            <div className='homeWrap' style={{minWidth:'1200px',textAlign:'center'}}>
                <div id='copy'></div>
                <img style={{paddingTop:'82px'}} src={copyRight} width='1120px' height='970px' alt=""/>
            </div>
        );
    }
}

export default CopyRight;