const reducer = (state = {}, action) => {
  console.log('state action', action)
  switch (action.type) {
    case 'GET_USERS':
      return { ...state, loading: true };
    case 'user_RECEIVED':
      return { ...state, json: action.json ,loading: false }
    case 'GET_POSTS':
      return {...state, loading: true }
      case 'post_RECEIVED':
      return { ...state, post: action.post ,loading: false }
    default:
      return state;
  }
};

export default reducer;
