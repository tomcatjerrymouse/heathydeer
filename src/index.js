import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute,IndexRedirect} from 'react-router'

import Home from './components/Home/HomePage'
import AluService from './components/AluService/AluService'
import MediaCoverage from './components/MediaCoverage/MediaCoverage'
import OnlineBooking from './components/OnlineBooking/OnlineBooking'
import AboutUs from './components/AboutUs/AboutUs'
import AluServiceMenzhen from './components/AluService/AluServiceMenzhen'
import AluServiceHuiyuan from './components/AluService/AluServiceHuiyuan'
import AluServiceHulianwang from './components/AluService/AluServiceHulianwang'
import Brand from './components/AboutUs/AboutUSContent/Brand'
import ContactUS from './components/AboutUs/AboutUSContent/ContactUS'
import Dot from './components/AboutUs/AboutUSContent/Dot'
import Recruit from './components/AboutUs/AboutUSContent/Recruit'
import App from './App';


ReactDOM.render(
    (
        <div>
            <Router history={hashHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}></IndexRoute>
                    <IndexRedirect to={'/Home'}></IndexRedirect>
                    <Route path='/Home' component={Home}></Route>


                    <Route path='/AluService' component={AluService}>
                        <Route path='/AluServiceMenzhen' component={AluServiceMenzhen}></Route>
                        <Route path='/AluServiceHuiyuan' component={AluServiceHuiyuan}></Route>
                        <Route path='/AluServiceHulianwang' component={AluServiceHulianwang}></Route>
                    </Route>

                    <Route path='//Home#media' component={MediaCoverage}></Route>

                    <Route path='/OnlineBooking' component={OnlineBooking}></Route>

                    <Route path='/AboutUs' component={AboutUs}>
                        <IndexRoute component={Brand}></IndexRoute>
                        <IndexRedirect to={'/Brand'}></IndexRedirect>
                        <Route path='/Brand' component={Brand}></Route>
                        <Route path='/ContactUS' component={ContactUS}></Route>
                        <Route path='/Dot' component={Dot}></Route>
                        <Route path='/Recruit' component={Recruit}></Route>
                    </Route>
                </Route>
            </Router>
        </div>
    ),
    document.getElementById('root')
);


