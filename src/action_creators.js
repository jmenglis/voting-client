export var setState = (state) => {
  return {
    type: 'SET_STATE',
    state
  }
}

export var vote = (entry) => {
  return {
    meta: {remote: true},
    type: 'VOTE',
    entry
  }
}
