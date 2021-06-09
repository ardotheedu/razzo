import { configureStore } from '@reduxjs/toolkit';

import restaurantsReducer from './ducks/restaurants';
import platesReducer from './ducks/plates';

export default configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    plates: platesReducer,
  },
});
