import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 174px;
  min-width: 280px;
  border-radius: 30px;
  background-color: #6e78e8;
  color: #ffffff;
`;

export const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 11px 17px 12px 20px;
  justify-content: space-between;
  list-style: none;

  font-family: 'Circe';
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
`;

export const Table = styled.div`
  height: 124px;

  border-radius: 0 0 30px 30px;
  background-color: #4a56e2;
  min-height: 93px;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;

  font-family: 'Circe';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;

export const CurrencyList = styled.ul`
  margin: 0;
  padding: 12px 20px 16px 20px;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

export const CurrencyItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const HeaderTitle = styled.li`
  width: 60px;
  text-align: center;
`;

export const SpanDescr = styled.span`
  width: 60px;
  text-align: center;
`;
