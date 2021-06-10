/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IoIosArrowBack } from 'react-icons/io';
import {
  Container,
  Content,
  Restaurant,
  Logo,
  Info,
  Title,
  Category,
  Address,
  Menu,
  Plate,
  PlateName,
  PlateIngredients,
  PlatePrice,
  AddAndRemoveItemBox,
} from './styles';
import { getAllPlates, getAllRestaurants } from '../../store/fetchActions';
import { incrementItem, decrementItem } from '../../store/ducks/cart';
import { Pagination } from '../Pagination';

export function Plates() {
  const { id } = useParams();
  const cart = useSelector(state => state.cart);

  const plates = useSelector(state => state.plates);
  const restaurants = useSelector(state => state.restaurants);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPlates(id));
    dispatch(getAllRestaurants());
  }, []);

  if (!restaurants) {
    return <p>Loading</p>;
  }
  const restaurant = restaurants.find(
    restaurantFind => restaurantFind._id === id,
  );
  function addItemPlate(plate) {
    const plateWithRestaurantName = {
      restaurant_name: restaurant.name,
      ...plate,
    };
    dispatch(incrementItem(plateWithRestaurantName));
  }
  function removeItemPlate(plate) {
    const plateWithRestaurantName = {
      restaurant_name: restaurant.name,
      ...plate,
    };
    dispatch(decrementItem(plateWithRestaurantName));
  }
  return (
    <Container>
      <Link to="/">
        <IoIosArrowBack size={28} color="#8A8A8C" />
      </Link>
      <Content>
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
        <Menu>
          {plates.map(plate => (
            <Plate key={plate._id}>
              <img src={plate.imgs[0].url} alt={plate.name} />
              <PlateName>{plate.name}</PlateName>
              <PlateIngredients>{plate.description}</PlateIngredients>
              <PlatePrice>R$ {plate.pricing}</PlatePrice>

              <AddAndRemoveItemBox>
                <button type="button" onClick={() => removeItemPlate(plate)}>
                  -
                </button>

                <p>
                  {cart.find(item => item._id === plate._id)
                    ? cart.find(item => item._id === plate._id).quantity
                    : 0}
                </p>

                <button type="button" onClick={() => addItemPlate(plate)}>
                  +
                </button>
              </AddAndRemoveItemBox>
            </Plate>
          ))}
        </Menu>
        <Pagination />
      </Content>
    </Container>
  );
}
