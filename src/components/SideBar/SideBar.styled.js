import styled from 'styled-components';

export const Wrap = styled.div`
  margin-top: 12px;
  padding: 0 44px;

   @media screen and (min-width: 768px) {
 margin-top: 0;
  padding: 0;
  }
`;

export const FlexWrap = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    gap: 32px;
    padding-top: 32px;
    padding-bottom: 20px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 40px;
    padding-bottom: 47px;
    padding-right: 68px;
  }
`;
