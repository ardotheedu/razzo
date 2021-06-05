import styled from 'styled-components';

export const Container = styled.header`
  height: 5rem;
`;
export const Content = styled.div`
  background-color: var(--fundo);
  height: 5rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
  }

  nav {
    margin-left: 10rem;
    height: 5rem;

    a {
      text-decoration: none;
      display: inline-block;
      position: relative;
      padding: 0 0.5rem;
      height: 5rem;
      line-height: 5rem;
      color: var(--blue);
      -webkit-transition: color 0.2s;
      transition: color 0.2s;

      &:hover {
        color: #ffff;
      }

      & {
        font-weight: bold;
      }

      &::after {
        content: '';
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;
        position: absolute;
        bottom: 1px;
        left: 0;
        background: var(--blue);
      }
    }
  }
  button {
    margin-left: auto;
  }
`;

export const BagShop = styled.div`
  background-color: #fff;
  width: 48px;
  height: 48px;
  border-radius: 30px;
  svg {
    margin: auto;
  }
`;
export const User = styled.div`
  img {
    width: 48px;
    height: 48px;
    margin: 0 5px 0 10px;
    border-radius: 30px;
  }
  svg {
    margin: auto;
  }
`;
