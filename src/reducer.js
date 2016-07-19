import { Map } from 'immutable'

var setState = (state, newState) => {
  return state.merge(newState)
}

var vote = (state, entry) => {
  const currentPair = state.getIn(['vote', 'pair'])
  if (currentPair && currentPair.includes(entry)) {
    return state.set('hasVoted', entry)
  } else {
    return state
  }
}

export default (state = Map(), action) => {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state)
    case 'VOTE':
      return vote(state, action.entry)
  }
  return state
}
