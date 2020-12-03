import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import Home from './Home'
import Collaborations from './Collaborations'
import NewCollab from './NewCollab'

export default class Navigation extends Component {
    render() {
        return (
            <Router>
                <Navbar expand="lg" variant="light" bg="light" sticky="top">
                    <Navbar.Brand as={Link} to="/">Art Lab Collab</Navbar.Brand>
                    <Nav className="mr auto">
                        <LinkContainer to="/collaborations">
                            <Nav.Link>Collaborations</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/collaborations" component={Collaborations} />
                    <Route exact path="/new-collab" component={NewCollab} />
                </Switch>
            </Router>
        )
    }
}
