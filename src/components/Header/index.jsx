import React from 'react';

import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import { Container, Content, BagShop, User } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <div>
          <img src="/logo.svg" alt="razzo" />
          <nav>
            <a href="/">Dashboard</a>
          </nav>
        </div>

        <div>
          <BagShop>
            <HiOutlineShoppingBag size={20} />
          </BagShop>
          <User>
            <img src="https://github.com/ardotheedu.png" alt="user img" />
            <IoIosArrowDown size={20} color="8A8A8C" />
          </User>
        </div>
      </Content>
    </Container>
  );
}
