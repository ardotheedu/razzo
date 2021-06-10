/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';

import { IoIosArrowForward } from 'react-icons/io';

import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Page,
  FromPage,
  ToPage,
  CartBox,
  ItemBox,
  Value,
  SubTotal,
  Delivery,
  Total,
  Buttons,
  ContinueButton,
  FinishButton,
  ValueText,
  ValueNumber,
} from './styles';
import {
  removeItem,
  incrementItem,
  decrementItem,
} from '../../store/ducks/cart';
import ItemCart from '../ItemCart';

export function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  function removeItemCart(id) {
    dispatch(removeItem(id));
  }
  const subTotal = cart.reduce((sumTotal, product) => {
    sumTotal += product.pricing * product.quantity;

    return sumTotal;
  }, 0);
  const total = subTotal + 7.9;
  return (
    <Container>
      <Page>
        <FromPage> Home </FromPage>
        <IoIosArrowForward size={16} color="#8A8A8C" />
        <ToPage>Sacola</ToPage>
      </Page>
      <CartBox>
        <ItemBox>
          {cart.map(item => (
            <ItemCart item={item} removeItemCart={removeItemCart} />
          ))}
        </ItemBox>
        <Value>
          <SubTotal>
            <div>
              <ValueText>Subtotal:</ValueText>
            </div>
            <div>
              <ValueNumber>R$ {subTotal}</ValueNumber>
            </div>
          </SubTotal>
          <Delivery>
            <div>
              <ValueText>Entrega:</ValueText>
            </div>
            <div>
              <ValueNumber>R$ 7,90</ValueNumber>
            </div>
          </Delivery>
          <hr />
          <Total>
            <div>
              <ValueNumber>Total:</ValueNumber>
            </div>
            <div>
              <p>R$ {total}</p>
            </div>
          </Total>
        </Value>
      </CartBox>
      <Buttons>
        <ContinueButton>Continuar compra</ContinueButton>
        <FinishButton>Finalizar a compra</FinishButton>
      </Buttons>
    </Container>
  );
}
