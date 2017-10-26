import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import Home from './components/Home/HomePage'
import AluService from './components/AluService/AluService'
import MediaCoverage from './components/MediaCoverage/MediaCoverage'
import OnlineBooking from './components/OnlineBooking/OnlineBooking'
import AboutUs from './components/AboutUs/AboutUs'
import App from './App';


ReactDOM.render(
    (
        <div>
            <Router history={hashHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}></IndexRoute>
                    <Route path='/Home' component={Home}></Route>
                    <Route path='/AluService' component={AluService}></Route>
                    <Route path='/MediaCoverage' component={MediaCoverage}></Route>
                    <Route path='/OnlineBooking' component={OnlineBooking}></Route>
                    <Route path='/AboutUs' component={AboutUs}></Route>
                </Route>
            </Router>
        </div>
    ),
    document.getElementById('root')
);


