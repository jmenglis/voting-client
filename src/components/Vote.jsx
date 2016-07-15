import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


export default class extends Component {
  mixins: [PureRenderMixin],
  getPair() {
    return this.props.pair || []
  }
  isDisabled() {
    return !!this.props.hasVoted
  }
  hasVotedFor() {
    return this.props.hasVoted === entry
  }
  render() {
    return (
      <div className="voting">
        {this.props.winner ?
          <div ref="winner">Winner is {this.props.winner}!</div> :
          this.getPair().map(entry =>
            <button key={entry}
                    disabled={this.isDisabled()}
                    onClick="{() => this.props.vote(entry)">
              <h1>{entry}</h1>
              {this.hasVotedFor(entry) ? <div className="label">Voted</div> : null}
            </button>
          )
        }
      </div>
    )
  }
}
