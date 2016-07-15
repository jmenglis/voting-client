import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)
    // this.getPair = this.getPair.bind(this)
  }
  getPair() {
    return this.props.pair || [];
  }
  render() {
    return (
      <div className="voting">
      {this.getPair().map(entry =>
        <button key={entry}>
          <h1>{entry}</h1>
        </button>
      )}
      </div>
    )
  }
}
