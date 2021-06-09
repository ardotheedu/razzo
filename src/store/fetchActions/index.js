import api from '../../services/api';
import { listRestaurants } from '../ducks/restaurants';
import { listPlates } from '../ducks/plates';

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

export const getAllPlates = id => {
  return dispatch => {
    api
      .get(`/product/business/${id}`)
      .then(res => {
        dispatch(listPlates(res.data.data));
      })
      .catch(console.log);
  };
};
