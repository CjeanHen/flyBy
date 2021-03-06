import React from 'react';
import { useSelector,useDispatch } from 'react-redux';

import { addOrigin } from '../actions/originActions';
import { selectOrigin } from '../reducers/originReducer';
import { addDestination } from '../actions/destinationActions';
import { selectDestination } from '../reducers/destinationReducer';
import { addLeavingDate } from '../actions/leavingDateActions';
import { selectLeavingDate } from '../reducers/dateLeavingReducer';
import { addDateReturning } from '../actions/dateReturningAction';
import { selectDateReturning } from '../reducers/dateReturningReducer';

const SearchForm = () => {
  // variable containing the values of the different slices of state
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const leavingDate = useSelector(selectLeavingDate);
  const dateReturning = useSelector(selectDateReturning);

  const dispatch = useDispatch();

  const changeOrigin = e => {
    const userInput = e.target.value;
    dispatch(addOrigin(userInput));
  }

  const changeDestination = e => {
    const userInput = e.target.value;
    dispatch(addDestination(userInput));
  }

  const changeLeavingDate = e => {
    const userInput = e.target.value;
    dispatch(addLeavingDate(userInput));
  }

  const changeDateReturning = e => {
    const userInput = e.target.value;
    dispatch(addDateReturning(userInput))
  }
  return (
    <div id="searchForm">
      <form>
        <label>Origin</label>
        <input type="text" name="origin" value={origin} onChange={changeOrigin} />
        <label>Destination</label>
        <input type="text" name="destination" value={destination} onChange={changeDestination} />
        <label>Leaving</label>
        <input type="date" name="dateLeaving" value={leavingDate} onChange={changeLeavingDate} />
        <label>Returning</label>
        <input type="date" name="dateReturning" value={dateReturning} onChange={changeDateReturning}/>
        <button>Search</button>
      </form>
    </div>
  )
}

export default SearchForm
