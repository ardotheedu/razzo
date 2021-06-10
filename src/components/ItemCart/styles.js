import styled from 'styled-components';

export const RestaurantName = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #249cf2;
  & + p {
    margin-top: 2.4rem;
  }
  margin-bottom: 0.45rem;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Picture = styled.div`
  img {
    width: 79px;
    height: 77px;
    border-radius: 7px;
    margin-right: 6px;
  }
`;
export const Info = styled.div``;
export const ItemName = styled.p`
  height: 18px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #6d5d7a;
  margin-top: 8px;
  margin-bottom: 0.25rem;
`;
export const Price = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #55b84b;
`;
export const AddAndRemoveItemBox = styled.div`
  background: #249cf2;
  margin: 0 5px;
  padding: 8px 16px;
  border-radius: 7px;

  button {
    border-style: none;
    background: transparent;
    color: #fff;
    width: 100%;
    cursor: pointer;
  }
  p {
    padding: 8px 0;

    color: #fff;
  }
`;
export const Category = styled.p`
  height: 17px;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: #282828;
  margin-bottom: 0.5rem;
`;
export const RemoveButton = styled.button`
  border: none;
  background: transparent;
  width: 24px;
  height: 24px;
  margin-left: 14px;
  transform: translateY(120%);
`;
