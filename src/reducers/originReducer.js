const intialOrigin = '';

export const originReducer = (state = intialOrigin, action) => {
    switch (action.type) {
      case 'addOrigin':
        return action.payload
      default:
        return state
    }
  }

export const selectOrigin = state => state.origin;
