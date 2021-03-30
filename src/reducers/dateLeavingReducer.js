let initialDate;

export const dateLeavingReducer = (state = initialDate, action) => {
  switch (action.type) {
    case 'addLeavingDate':
      return {
        type: 'addLeavingDate',
        payload: action.payload
      };
    default:
      return state;
  }
}

export const selectLeavingDate = state => state.leavingDate;
