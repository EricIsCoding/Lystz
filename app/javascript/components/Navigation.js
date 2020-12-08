import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import Home from '../containers/Home'
import Collaborations from '../containers/Collaborations'
import NewCollab from './NewCollab'

export default class Navigation extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/collaborations" component={Collaborations} />
                    <Route exact path="/new-collab" component={NewCollab} />
                </Switch>
            </Router>
        )
    }
}
