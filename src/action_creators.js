export var setState = (state) => {
  return {
    type: 'SET_STATE',
    state
  }
}

export var vote = (entry) => {
  return {
    type: 'VOTE',
    entry
  }
}
