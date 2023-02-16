import styled from 'styled-components';
import { switchBg } from 'stylesheet/switchBg';

export const Box = styled.div`
  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 320px;
  overflow: visible scroll;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 704px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 46px;
    margin-right: 0;
    max-width: 715px;
    max-height: 50vh;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 2px;
  }
`;

export const NoDataField = styled.div`
  overflow: hidden;
`;

export const TextMessage = styled.h2`

`;

export const TableList = styled.table`
  
`;

export const TableHeading = styled.th`
  &:first-child {
    border-radius: 30px 0 0 30px;
  }
  &:last-child {
    border-radius: 0 30px 30px 0;
  }

  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
`;

export const TrData = styled.tr`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  &:first-child {
    margin-top: 8px;
  }
  position: relative;
  font-size: 16px;

  &::after {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    bottom: 0;
    width: 100%;
    border: 1px solid #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  }
`;

export const StyledTd = styled.td`

  @media screen and (max-width: 767px) {
    max-width: 188px;
  }

  @media screen and (min-width: 1280px) {
    
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 18px;
    @media screen and (min-width: 1280px) {
      left: 28px;
    }
    transform: translateY(-50%);
    
  }
`;

export const TrSummaryWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;

  margin-top: 16px;
`;

export const TrSummaryField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  @media screen and (min-width: 1280px) {
    padding: 0 28px;
  }
`;

export const TrSummaryStr = styled.span`
  font-weight: 700;
  line-height: calc(24 / 16);
`;

export const TrSummaryNum = styled.span`
  
`;

export const SelectWrap = styled.div`
  @media screen and (max-width: 767px) {
    display: block;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

