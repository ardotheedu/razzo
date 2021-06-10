import { configureStore } from '@reduxjs/toolkit';

import restaurantsReducer from './ducks/restaurants';
import platesReducer from './ducks/plates';
import cartReducer from './ducks/cart';

export default configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    plates: platesReducer,
    cart: cartReducer,
  },
});
