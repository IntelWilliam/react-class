import React, { Component } from 'react'
import Buton from './Buton';

export default class ParenOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
    this.addCounter = this.addCounter.bind(this)
  }

  //Owner Methods 
  addCounter() {
    this.setState(
      preState => ({
        counter: preState.counter + 1
      })
    )
  }

  render() {
    const {counter} = this.state
    return (
      <div>
        <h3> Componente Padre para Boton </h3>
        <h2> {counter}</h2>
        <Buton 
          addCount={this.addCounter} 
          textButon="Agregar" 
        />
      </div>
    ) 
  }
}
