import styled from 'styled-components';

export const Container = styled.div`
  justify-content: flex-end;
  width: 100%;
  display: flex;
  flex-direction: row;

  div {
    background: #e5e4e6;
    border-radius: 7px;
    width: 32px;
    height: 32px;
    padding: 5px;

    & + div {
      margin-left: 8px;
    }
  }

  div:nth-child(2) {
    color: #fff;
    background-color: #249cf2;
    padding: 5px 12px;
  }
`;
