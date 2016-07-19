import { List, Map } from 'immutable'

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

var resetVote = (state) => {
  const hasVoted = state.get('hasVoted')
  const currentPair = state.getIn(['vote', 'pair'], List())
  if (hasVoted && !currentPair.includes(hasVoted)) {
    return state.remove('hasVoted')
  } else {
    return state
  }
}

export default (state = Map(), action) => {
  switch (action.type) {
    case 'SET_STATE':
      return resetVote(setState(state, action.state))
    case 'VOTE':
      return vote(state, action.entry)
  }
  return state
}
