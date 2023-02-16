import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLink = styled(Link)`
  display: flex;
  gap: 15px;
  align-items: center;
  text-decoration: none;
  padding: 0;
  margin: 0;
  // font-family: Poppins;
  font-weight: 700};
  font-size: 18px;
  line-height: 1.5;
  color: black;
  @media (min-width: 768px) {
    gap: 20px;
    font-size: 30px};
  }
`;

export const LogoSvg = styled('img')`
  width: 30px;
  height: 30px;
  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
