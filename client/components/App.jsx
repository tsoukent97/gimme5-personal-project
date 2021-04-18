import React, {useState, useEffect} from 'react'
import {getGreeting} from '../apiClient'

const App = () => {
  return (
    <Router>
      <Route exact path={'/nbaStats'} component={NbaStats}/>
      <Route exact path={'/'} component={Menu} />
    </Router>
  )
}

export default App
