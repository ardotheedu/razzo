import api from '../../services/api';
import { listRestaurants } from '../ducks/restaurants';

export const getAllRestaurants = () => {
  return dispatch => {
    api
      .get('/business')
      .then(res => {
        dispatch(listRestaurants(res.data.data));
      })
      .catch(console.log);
  };
};
