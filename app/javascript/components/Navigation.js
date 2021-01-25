import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../containers/Home'
import Collaborate from '../containers/Collaborate'
import Profile from '../containers/Profile'
import NewCollab from './NewCollab'

export default class Navigation extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/profile" component={Profile}/>
                    <Route exact path="/collaborate" component={Collaborate} />
                    <Route exact path="/new-collab" component={NewCollab} />
                </Switch>
            </Router>
        )
    }
}
