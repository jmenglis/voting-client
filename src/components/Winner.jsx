import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


export default class extends Component {
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="winner">
        Winner is {this.props.winner}!
      </div>
    )
  }
}