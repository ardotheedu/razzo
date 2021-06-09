import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 1.5rem 0;
`;
export const Restaurant = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 1.2rem 1rem 1.5rem 0;
  padding: 16px;
  width: 870px;
  height: 99px;
  border: 1px solid #e5e4e6;
  border-radius: 7px;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Logo = styled.div`
  img {
    width: 4.25rem;
    height: 4.1875rem;
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

  color: #6d5d7a;
`;
export const Category = styled.p`
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
