import React from 'react';
import { Header } from '../components/Header';
import { SearchBox } from '../components/SearchBox';
import { Restaurants } from '../components/Restaurants';
import { Cart } from '../components/Cart';
import { Pagination } from '../components/Pagination';

import { RestaurantsContainer, Content } from '../styles/pages/dashboard';

export function Dashboard() {
  return (
    <>
      <Header />
      <Content>
        <RestaurantsContainer>
          <SearchBox />
          <Restaurants />
          <Pagination />
        </RestaurantsContainer>
        <Cart />
      </Content>
    </>
  );
}
