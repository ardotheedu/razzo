import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 1.5rem 0;
`;
export const Content = styled.div`
  margin: 1.2rem 1rem 1.5rem 0;
`;
export const Restaurant = styled.div`
  display: flex;
  align-items: flex-start;
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

export const Menu = styled.div`
  display: flex;
  margin: 2rem 0;
`;
export const Plate = styled.div`
  padding: 16px;

  width: 268px;
  height: 274px;
  align-items: center;

  border: 1px solid #e5e4e6;
  border-radius: 7px;
  & + div {
    margin-left: 2rem;
  }
  img {
    width: 90px;
    height: 90px;
    transform: translateX(78%);

    border-radius: 7px;
  }
`;
export const PlateName = styled.p`
  font-weight: normal;
  line-height: 16px;
  margin-top: 0.5rem;

  text-align: center;

  color: #6d5d7a;
`;
export const PlateIngredients = styled.p`
  font-size: 10px;
  line-height: 150%;
  margin-top: 0.5rem;

  text-align: center;

  color: #979797;
`;
export const PlatePrice = styled.p`
  font-size: 16px;
  line-height: 23px;

  text-align: center;
  margin: 0.5rem 0 1rem 0;

  color: #55b84b;
`;

export const AddAndRemoveItemBox = styled.div`
  display: flex;
  flex-direction: row;
  background: #249cf2;
  margin: 0 5px;
  padding: 8px;
  border-radius: 7px;

  button {
    border-style: none;
    background: transparent;
    color: #fff;
    width: 50%;
    cursor: pointer;
  }
  p {
    padding: 8px 0;

    color: #fff;
  }
`;
