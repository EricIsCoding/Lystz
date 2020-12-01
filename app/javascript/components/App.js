import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Collaborations from './Collaborations'
import NewCollab from './NewCollab'

class App extends React.Component {
  render() {
    return (
        <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/collaborations" component={Collaborations} />
          <Route exact path="/new-collab" component={NewCollab} />
        </Switch>
      </div>
    )
  }
}

export default App