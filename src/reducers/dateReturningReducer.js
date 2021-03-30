const initialDate = '';

export const dateReturningReducer = ( state = initialDate, action ) => {
  switch (action.type) {
    case 'addDateReturning':
      return action.payload
    default:
      return state
  }
}

export const selectDateReturning = state => state.dateReturning;
