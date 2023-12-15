import React, { Component } from 'react'
import Buton from './Buton'

export default class ParenTwo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nombre: 'carlitos'
    }
    this.changeName = this.changeName.bind(this)
  }

  changeName() {
    this.setState(
      {nombre: 'javier'}
    )
  }

  render() {
    const {nombre} = this.state
    return (
      <div>
        <h3> mi nombre es : {nombre}</h3>
        <Buton addCount={this.changeName} textButon='cambiar nombre' />
      </div>
    )
  }
}
   