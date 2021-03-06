const initialDate = null;

export const dateLeavingReducer = (state = initialDate, action) => {
  switch (action.type) {
    case 'addLeavingDate':
      return action.payload
    default:
      return state;
  }
}

export const selectLeavingDate = state => state.leavingDate;
