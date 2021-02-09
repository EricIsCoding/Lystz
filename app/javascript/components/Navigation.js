import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom'

import Home from '../containers/Home'
import VendorPage from '../containers/VendorPage'
import BlockPage from '../containers/BlockPage'
import { csrf } from '../helpers/helpers'

 
const Navigation =  (props) => {

  const sign_out = () => {
    const options = {
      method: 'DELETE',
      headers: {
        'X-CSRF-TOKEN': csrf
      }
    }
    fetch('/users/sign_out', options)
      .then(() => {
        location.reload();
      })
  }
 
    return(
      <Router>
        <Navbar bg="dark" variant="dark" expand="sm" >
          <Navbar.Brand as={Link} to="/">Lystz</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link as={Link} to="/blocks">All Blocks!</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Nav.Link onClick={sign_out}>Sign Out</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blocks" component={BlockPage}/>
          <Route exact path="/:id/:slug/blocks" component={VendorPage}/>
          <Route render={() => <Redirect to={{pathname: "/"}} />} />
        </Switch>
      </Router>
    )
}

 
export default Navigation;