import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 23px;
    font-size: 18px;
    line-height: 1.5;
  }

  svg {
    display: block;
    height: 38px;
    width: 38px;
    padding: 8px;
    border-radius: 6px;

    background-color: #6e78e8;
    fill: #ffffff;

    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
      padding: 3px;
      border-radius: 2px;
    }
  }

  &.active {
    font-weight: 700;
    font-size: 18px;
    & svg {
      box-shadow: 0px 3px 10px rgba(74, 86, 226, 0.5);
      background-color: #4a56e2;
    }
  }

  &:hover {
    transform: scale(1.02);
    & svg {
      background-color: #4a56e2;
    }
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
      align-items: center;
  margin:auto;
  max-width: 480px;
    

     @media screen and (max-width: 768px) {
margin-top: 72px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: start;
    gap: 12px;
        margin: unset;
         align-items: flex-start;
  }
  
`;


