/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container,
  Restaurant,
  Title,
  Category,
  Address,
  Logo,
  Info,
} from './styles';
import { getAllRestaurants } from '../../store/fetchActions';

export function Restaurants() {
  const restaurants = useSelector(state => state.restaurants);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRestaurants());
  }, []);

  return (
    <Container>
      {restaurants.map(restaurant => (
        <Link to={`/restaurant/${restaurant._id}`} key={restaurant._id}>
          <Restaurant key={restaurant._id}>
            <Logo>
              <img src={restaurant.assets.logo} alt="img" />
            </Logo>
            <Info>
              <Title>{restaurant.name}</Title>
              <Category>{restaurant.description}</Category>
              <Address>
                {' '}
                Rua {restaurant.address.street_name},{' '}
                {restaurant.address.street_number}{' '}
                {restaurant.address.neighborhood}
              </Address>
            </Info>
          </Restaurant>
        </Link>
      ))}
    </Container>
  );
}
