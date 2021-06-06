import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const listRestaurants = createAction('LIST_RESTAURANTS');

export default createReducer(INITIAL_STATE, {
  [listRestaurants]: (state, action) => [...action.payload],
});
