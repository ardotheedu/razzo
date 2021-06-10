/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    incrementItem(state, action) {
      const item = state.find(item => item._id === action.payload._id);

      if (item) {
        item.quantity += 1;
      } else {
        state.push({ quantity: 1, ...action.payload });
      }
    },
    removeItem(state, action) {
      return state.filter(item => item._id !== action.payload);
    },
    decrementItem(state, action) {
      const item = state.find(item => item._id === action.payload._id);

      if (item) {
        item.quantity -= 1;
      }
    },
  },
});
export const { incrementItem, decrementItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
