import React, { Component } from 'react';

import online from './online.png'

class OnlineBooking extends Component {
    render() {
        return (
            <div id='online' style={{minWidth:'1200px',paddingTop:'82px',}}>
                {/*<div style={{width:'100%',height:'82px'}}></div>*/}
                <img  src={online} width='100%' height='100%' alt=""/>
            </div>
        );
    }
}

export default OnlineBooking;