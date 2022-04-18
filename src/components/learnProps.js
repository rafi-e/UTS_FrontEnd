import React, { Component } from 'react'

export default class Props extends Component {
  render() {
    return (
      <div>
            <h2>{this.props.jenis}</h2>
            <h3>Harga: Rp{this.props.harga}</h3>
      </div>
    )
  }
}
