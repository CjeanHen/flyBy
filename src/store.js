import { createStore, combineReducers } from 'redux';
import { originReducer } from './reducers/originReducer';
import { destinationReducer } from './reducers/destinationReducer';
import { dateLeavingReducer } from './reducers/dateLeavingReducer';
// import { dateReturningReducer } from './reducers/dateReturningReducer';
// import { flightsReducer } from './reducers/flightsReducer';

export const store = createStore(combineReducers({
  origin: originReducer,
  destination: destinationReducer,
  leavingDate: dateLeavingReducer,
  // dateReturning: dateReturningReducer,
  // flights: flightsReducer
}))
