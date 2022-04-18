import React, { Component } from 'react'
import Props from './learnProps';

export default class State extends Component {
    constructor (props){
        super(props);
        this.state = {
            jenis : "Baju",
            harga : 45000,
            quantity : 0,
            bayar : 0
        }
    }
    _tambahQuantity =() => this.setState({quantity: this.state.quantity + 1});
    _kurangQuantity =() => this.setState({quantity: this.state.quantity - 1});
    _total =() => this.setState({bayar: this.state.quantity * this.state.harga});

    render() {
        return (
        <div>
            <Props jenis={this.state.jenis} harga={this.state.harga}/>
            <h3>Jumlah barang: {this.state.quantity}</h3>
            <input type='button' onClick={this._tambahQuantity} value='+ 1'></input>
            <input type='button' onClick={this._kurangQuantity} value='- 1'></input>
            <h2>Total: Rp{this.state.bayar}</h2>
            <input type='button' onClick={this._total} value='bayar'></input>
        </div>
        )
  }
}
