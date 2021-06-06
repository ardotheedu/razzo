import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Container, Input } from './styles';

export function SearchBox() {
  return (
    <Container>
      <Input placeholder="Buscar estabelecimento" />
      <AiOutlineSearch color="d0c9d6" size={18} />
    </Container>
  );
}
