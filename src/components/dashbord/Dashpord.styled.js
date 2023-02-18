import styled from 'styled-components';
import { MdDelete, MdEdit } from 'react-icons/md';

const switchColor = type => {
  switch (type) {
    case 'INCOME':
      return `#24CCA7`;
    case 'EXPENSE':
      return `#FF6596`;
    default:
      return `#000000`;
  }
};

export const Table = styled.table`
  width: 280px;
  margin: 32px auto 8px;
  border-collapse: collapse;
  border-spacing: 0;
  @media screen and (min-width: 767px) {
    margin: 46px 16px 0 69px;
    width: 704px;
  }
  @media screen and (min-width: 1200px) {
    width: 715px;
  } ;
`;

export const Thhead = styled.th`
  background-color: white;
  padding: 15px 0;
  text-align: left;

  @media screen and (min-width: 767px) {
    :first-child {
      padding-left: 20px;
      border-radius: 30px 0 0 30px;
    }
    :nth-child(2) {
      width: 84px;
    }
    :nth-child(4) {
      width: 146px;
    }
    :nth-child(4) {
      width: 118px;
    }
    :nth-child(5) {
      width: 108px;
    }
    :last-child {
      width: 130px;

      border-radius: 0 30px 30px 0;
    }
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
    border-left: 5px solid ${switchColor};
  }
  position: relative;
  @media screen and (min-width: 768px) {
    height: 52px;
    width &:not(:last-child) {
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
    padding: 8px 10px;
    display: flex;
    flex-grow: 1;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    &:not(:last-child) {
      border-bottom: 1px solid #dcdcdf;
    }
  }

  height: 52px;
  line-height: calc(24 / 16);
  color: #000000;
  font-weight: 400;

  font-size: 16px;
  :nth-child(5) {
    color: ${switchColor};
  }
  @media screen and (min-width: 767px) {
    :first-child {
      padding-left: 20px;
    }
    :nth-child(2) {
      padding-left: 18px;
      text-align: left;
      width: 84px;
    }
    :nth-child(4) {
      width: 146px;
    }
    :nth-child(4) {
      width: 118px;
    }
    :nth-child(5) {
      text-align: right;
      width: 108px;
    }
    :last-child {
      width: 130px;
      text-align: centr;
      display: flex;
      justify-content: centr;
      align-items: centr;
      padding-right: 8px;
      padding-left: 33px;
    }
  }
`;

export const BtnEdit = styled.button`
  border: none;
  background: transparent;
  height: 14px;
  width: 14px;
  margin: auto;
  margin-right: 8px;
`;

export const BtnDel = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  gap: 2px;

  width: 67px;
  height: 26px;
  margin: auto 0;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;

  color: #ffffff;
  background: #24cca7;
  border: none;
  border-radius: 18px;
`;

export const Span = styled.span`
  color: #000000;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
`;
