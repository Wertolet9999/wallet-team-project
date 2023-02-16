import styled from 'styled-components';

export const Table = styled.table`
  width: 715px;
  margin: 46px 16px 0 69px;
  border-collapse: collapse;
  border-spacing: 0;
`;

export const Thhead = styled.th`
  background-color: white;
  padding: 15px 0;
  :first-child {
    padding-left: 20px;
    border-radius: 30px 0 0 30px;
  }
  :last-child {
    border-radius: 0 30px 30px 0;
  }
`;

export const Tr = styled.tr`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    &:not(:last-child) {
      margin-bottom: 8px;
    }
    background-color: white;
    border-radius: 10px;
    border-left: 5px solid grey;
  }
  position: relative;
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      &::after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border: 1px solid #dcdcdf;
        box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
      }
    }
  }
`;

export const Td = styled.td`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-grow: 1;
    width: 100%;
    align-items: center;
    &:not(:last-child) {
      border-bottom: 1px solid #dcdcdf;
    }
  }
  justify-content: space-between;
  padding: 8px 10px;
  height: 52px;
  line-height: calc(24 / 16);
  color: #000000;
  font-weight: 400;

  font-size: 16px;
  @media screen and (min-width: 768px) {
    &:nth-child(1) {
      width: 75px;
    }
    &:nth-child(2) {
      width: 70px;
    }
    &:nth-child(3) {
      width: 135px;
    }
    &:nth-child(4) {
      width: 130px;
    }
    &:last-child {
      width: 40px;
      padding-right: 5px;
    }
  }
`;
