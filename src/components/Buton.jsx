import React, { Component } from 'react'

export default class Buton extends Component {

  render() {
    const {addCount, textButon} = this.props
    return (
      <button onClick={addCount}>
        {textButon}
      </button>
    )
  }
}

