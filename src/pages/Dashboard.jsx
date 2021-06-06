import React from 'react';
import { Header } from '../components/Header';
import { SearchBox } from '../components/SearchBox';
import { Restaurants } from '../components/Restaurants';

import { RestaurantsContainer } from '../styles/pages/dashboard';

export function Dashboard() {
  return (
    <>
      <Header />
      <RestaurantsContainer>
        <SearchBox />
        <Restaurants />
      </RestaurantsContainer>
    </>
  );
}
