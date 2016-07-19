export default socket => store => next => action => {
  if (ation.meta && action.meta.remote) {
    socket.emit('action', action)
  }
  return next(action)
}
