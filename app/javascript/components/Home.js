import React from "react"
import { FillButton } from 'tailwind-react-ui'

class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>Welcome to Art Lab Collab!</h1>
        <FillButton brand="info">Info</FillButton>
      </div>
    );
  }
}

export default Home
