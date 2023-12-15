import React, { Component } from 'react'
import ParenOne from './components/ParenOne'
import ParenTwo from './components/ParenTwo'

class App extends Component {

  render() {
    return (
      <div>
        <h1> Aplicacion Principal</h1>
        <ParenOne/>
        <ParenTwo/>
      </div>
    )
  }

}

export default App