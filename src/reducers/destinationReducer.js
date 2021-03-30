const intitialDestination = '';

export const destinationReducer = (state = intitialDestination, action) => {
  switch (action.type) {
    case 'addDestination':
      return action.payload;
    default:
      return state;
  }
}

export const selectDestination = state => state.destination;
