import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';

import Home from './Main/Home';
import Login from './Main/Login';
import Signup from './Main/Signup';
import Profile from './Main/Profile';


export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path='/profile' exact component={Profile}/>
                </Switch>
            </div>
        )
    }
}
