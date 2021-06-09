import React from 'react';

import { Header } from '../components/Header';
import { Cart } from '../components/Cart';
import { Plates } from '../components/Plates';
import { Content } from '../styles/pages/dashboard';

export function Menu() {
  return (
    <>
      <Header />
      <Content>
        <Plates />
        <Cart />
      </Content>
    </>
  );
}
