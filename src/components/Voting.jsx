import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div>
        {this.props.winner ?
          <Winner ref="winner" winner={this.props.winner} /> :
          <Vote {...this.props} />}
      </div>
    )
  }
}
