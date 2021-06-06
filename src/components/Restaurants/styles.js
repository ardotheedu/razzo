import styled from 'styled-components';

export const Container = styled.div`
  width: 950px;
  display: flex;
  flex-wrap: wrap;
`;
export const Restaurant = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px;
  width: 300px;
  height: 99px;
  border: 1px solid #e5e4e6;
  border-radius: 7px;
  margin: 0 15px 23px 0;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Logo = styled.div`
  img {
    width: 4.25rem;
    height: 4.25rem;
    border-radius: 7px;
    margin-right: 12px;
  }
`;
export const Title = styled.p`
  font-family: ABeeZee;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  /* identical to box height, or 138% */

  /* Texto Campos */

  color: #6d5d7a;
`;
export const Category = styled.a`
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: #249cf2;
  margin-bottom: 4px;
`;
export const Address = styled.p`
  font-family: ABeeZee;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #979797;
`;
