import React from 'react';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Container } from './styles';

export function Pagination() {
  return (
    <Container>
      <div>
        <IoIosArrowBack color="#979797" size={20} />
      </div>
      <div>
        <p>1</p>
      </div>
      <div>
        <IoIosArrowForward color="#979797" size={20} />
      </div>
    </Container>
  );
}
