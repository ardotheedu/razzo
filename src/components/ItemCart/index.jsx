/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import { incrementItem, decrementItem } from '../../store/ducks/cart';

import {
  RestaurantName,
  Item,
  Picture,
  Info,
  ItemName,
  Price,
  AddAndRemoveItemBox,
  Category,
  RemoveButton,
} from './styles';

export default function ItemCart({ item, removeItemCart }) {
  const dispatch = useDispatch();
  function incrementPlate(plate) {
    dispatch(incrementItem(plate));
  }
  function decrementPlate(plate) {
    dispatch(decrementItem(plate));
  }

  return (
    <>
      <RestaurantName>{item.restaurant_name}</RestaurantName>
      <Item key={item._id}>
        <Picture>
          <img src={item.imgs[0].url} alt="img" />
        </Picture>
        <Info>
          <ItemName>{item.restaurant_name}</ItemName>
          <Category>{item.category}</Category>
          <Price>R$ {item.pricing}</Price>
        </Info>
        <AddAndRemoveItemBox>
          <button type="button" onClick={() => decrementPlate(item)}>
            -
          </button>

          <p>{item.quantity}</p>

          <button type="button" onClick={() => incrementPlate(item)}>
            +
          </button>
        </AddAndRemoveItemBox>
        <RemoveButton type="button" onClick={() => removeItemCart(item._id)}>
          <FaTrashAlt size={24} color="D0C9D6" />
        </RemoveButton>
      </Item>
    </>
  );
}
