import styled from 'styled-components';

export const Container = styled.div`
  margin: 4.24rem 0 2.125rem 0;
  border: 1px solid #e5e4e6;
  border-radius: 7px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  svg {
    margin: auto 10px auto 0;
  }
`;

export const Input = styled.input`
  border: none;
  padding: 14.5px 10px;
  width: 90%;
  &::placeholder {
    color: #d0c9d6;
  }
`;
