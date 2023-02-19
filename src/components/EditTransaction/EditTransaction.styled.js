import styled from 'styled-components';
import { switchBg } from 'stylesheet/switchBg';

export const ButtonEdit = styled.button`
  position: relative;
  padding: 13px;
  border-radius: 20px;
  min-width: 200px;
  font-size: 18px;
  font-weight: 400;
  line-height: calc(27 / 18);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  overflow: hidden;
  background-color: #fff;
  transition: all 0.3s;
  z-index: 10;

  &:nth-child(2) {
    margin-top: 40px;
    margin-bottom: 20px;
  }

  &:hover {
    transform: scale(1.05);
  }
  ${p => {
    if (p.primary) {
      return `
      background:#24CCA7;
      color: #ffffff;
      border: 1px solid transparent;
      &:hover {
        box-shadow: 0px 6px 15px #24CCA7;
      }`;
    }
    return `    
    border: 1px solid #4A56E2;
    color: #4A56E2;
    
    &:hover {
      box-shadow: 0px 6px 15px #4A56E2;
    }`;
  }}
  min-height: 50px;
  @media screen and (min-width: 768px) {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;

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
