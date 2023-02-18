import styled from 'styled-components';

export const BalanceDiv = styled.div`
  /* margin-top: 12px; */
  margin-bottom: 32px;
  @media screen and (max-width: 767px) {
    margin-right: auto;
    margin-left: auto;
  }
  padding: 10px 32px 12px;
  /* width: 80px; */
  background-color: white;
  border-radius: 20px;
  @media screen and (min-width: 376px) {
    width: 336px;
  }
  @media screen and (min-width: 768px) {
    /* margin-top: 28px; */
    margin-bottom: 0;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
    margin-bottom: 32px;
  }
`;

export const TextBalance = styled.p`
  font-family: Circe, sans-serif;
  font-size: 12px;
  line-height: 1.5;
  text-transform: uppercase;
  color: #a6a6a6;

  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
`;

export const AmountBalance = styled.p`
  /* margin-top: 12px; */
  color: #000000;
  font-size: 30px;
  line-height: calc(36 / 30);
`;
