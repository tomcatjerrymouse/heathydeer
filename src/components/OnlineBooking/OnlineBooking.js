import React, { Component } from 'react';

import online from './online.png'

class OnlineBooking extends Component {
    render() {
        return (
            <div style={{minWidth:'1200px'}}>
                <img src={online} width='100%' height='100%' alt=""/>
            </div>
        );
    }
}

export default OnlineBooking;