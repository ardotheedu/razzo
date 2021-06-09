import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const listPlates = createAction('LIST_PLATES');

export default createReducer(INITIAL_STATE, {
  [listPlates]: (state, action) => [...action.payload],
});
