import styled from 'styled-components';

export const HeaderTag = styled.header`
  display: flex;
  justify-content: space-between;

  background-color: white;

  @media screen and (max-width: 767px) {
    position: fixed;
    left: 0;
    right: 0;
    // width: 768px;
  }

  @media screen and (min-width: 767px);
   {
    padding: 20px 32px;
  }

  @media screen and (min-width: 1200px);
   {
    padding: 20px 16px;
  }
`;
