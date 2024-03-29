import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Page = styled.div`
  display: flex;
  margin: 2rem 0 1.5rem 0;

  svg {
    margin: auto 16px;
  }
`;

export const FromPage = styled.p`
  font-size: 16px;
  color: #8a8a8c;
  line-height: 23px;
`;
export const ToPage = styled.p`
  font-size: 16px;
  color: #249cf2;
  line-height: 23px;
`;

export const CartBox = styled.div`
  width: 100%;
  height: 703px;
  background: #f2f5fa;
  border-radius: 7px;
  position: relative;
`;

export const ItemBox = styled.div`
  margin-top: 42px;
  padding: 0 1rem;
`;

export const Value = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  flex-direction: column;

  width: 93%;
  margin: 0 0.5rem 2rem 1rem;
  hr {
    color: #e5e4e6;
    width: 92%;
    margin: 16px 0 12px auto;
    border: 1px solid;
    height: 1px;
    border-color: #e5e4e6;
  }
`;
export const SubTotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Delivery = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
`;
export const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div:nth-child(2) {
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;

      color: #55b84b;
    }
  }
`;

export const ValueText = styled.p`
  color: #979797;
  font-size: 16px;
  font-weight: normal;
  line-height: 150%;
`;
export const ValueNumber = styled.p`
  color: #282828;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContinueButton = styled.button`
  align-items: center;
  padding: 16px 107px;

  border: 2px solid #f2f5fa;
  background: #f2f5fa;
  border-radius: 7px;

  font-size: 13px;
  line-height: 19px;

  color: #73657e;
  margin-top: 2rem;
`;
export const FinishButton = styled.button`
  align-items: center;
  padding: 16px 107px;

  border: 2px solid #249cf2;

  background: #249cf2;
  border-radius: 7px;

  font-size: 13px;
  line-height: 19px;

  color: #ffffff;
  margin: 1rem 0 4rem 0;
`;
