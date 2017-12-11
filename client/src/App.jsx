import React from 'react'
import { withRouter } from 'react-router-dom'

import NavBar from './common/NavBar'
// import Routes from './Routes'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <NavBar />
      </div>
    )
  }
}

export default withRouter(App)
