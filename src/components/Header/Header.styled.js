import styled from 'styled-components';

export const HeaderTag = styled.header`
  background-color: white;

  @media screen and (max-width: 767px) {
    position: fixed;
    left: 0px;
    right: 0px;
    z-index: 15;
  }
`;

export const Conteiner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;

  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 767px) {
    padding: 20px 32px;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    padding: 20px 16px;
    width: 1280px;
  }
`;
