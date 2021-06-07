import React from 'react';

import { IoIosArrowForward } from 'react-icons/io';
import { FaTrashAlt } from 'react-icons/fa';

import {
  Container,
  Page,
  FromPage,
  ToPage,
  CartBox,
  RestaurantName,
  Item,
  ItemBox,
  Picture,
  Info,
  ItemName,
  Price,
  AddAndRemoveItemBox,
  Category,
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

export function Cart() {
  return (
    <Container>
      <Page>
        <FromPage> Home </FromPage>
        <IoIosArrowForward size={16} color="#8A8A8C" />
        <ToPage>Sacola</ToPage>
      </Page>
      <CartBox>
        <ItemBox>
          <RestaurantName>RodaPizza</RestaurantName>
          <Item>
            <Picture>
              <img src="https://github.com/ardotheedu.png" alt="img" />
            </Picture>
            <Info>
              <ItemName>Pizza de Calabresa</ItemName>
              <Category>Pizzas</Category>
              <Price>R$ 58.98</Price>
            </Info>
            <AddAndRemoveItemBox>
              <button type="button">-</button>

              <p>1</p>

              <button type="button">+</button>
            </AddAndRemoveItemBox>
            <FaTrashAlt size={24} color="D0C9D6" />
          </Item>
        </ItemBox>
        <Value>
          <SubTotal>
            <div>
              <ValueText>Subtotal:</ValueText>
            </div>
            <div>
              <ValueNumber>R$ 300</ValueNumber>
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
          <Total>
            <div>
              <p>Total</p>
            </div>
            <div>
              <p>R$ 307,90</p>
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
