import styled from 'styled-components';
import { switchBg } from 'stylesheet/switchBg';

export const Category = styled.p`
  color: ${switchBg};
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

export const TransactionData = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Comment = styled.textarea`
  resize: none;
  width: 280px;
  border: 0;
  @media screen and (min-width: 768px) {
    width: 394px;
  }
  font-family: Exo, sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  outline: 1px solid #e0e0e0;
  outline-offset: 2px;
  border-radius: 2px;
  transition: outline-color 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 2px;
    background-color: #e7eaf2;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #4a56e2;
    border-radius: 2px;
  }
  &:focus {
    outline-color: #6e78e8;
  }
`;
