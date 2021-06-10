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
import { Pagination } from '../Pagination';

export function Plates() {
  const { id } = useParams();

  const plates = useSelector(state => state.plates);
  const restaurants = useSelector(state => state.restaurants);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPlates(id));
  }, []);
  useEffect(() => {
    dispatch(getAllRestaurants());
  }, []);

  if (!restaurants) {
    return <p>Loading</p>;
  }
  const restaurant = restaurants.find(
    restaurantFind => restaurantFind._id === id,
  );
  console.log(restaurants);
  console.log(restaurant);
  return (
    <Container>
      <Link href="/">
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
            <Plate>
              <img src={plate.imgs[0].url} alt={plate.name} />
              <PlateName>{plate.name}</PlateName>
              <PlateIngredients>{plate.description}</PlateIngredients>
              <PlatePrice>R$ {plate.pricing}</PlatePrice>

              <AddAndRemoveItemBox>
                <button type="button">-</button>

                <p>1</p>

                <button type="button">+</button>
              </AddAndRemoveItemBox>
            </Plate>
          ))}
        </Menu>
        <Pagination />
      </Content>
    </Container>
  );
}
