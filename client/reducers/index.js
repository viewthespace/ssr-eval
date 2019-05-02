export default (state, action) => {
  const { count } = state
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: count - 1
      }
    default:
      return state
  }
}
