import styled from 'styled-components';

export const HeaderTag = styled.header`
  display: flex;
  justify-content: space-between;

  padding-top: 15px;
  padding-bottom: 15px;

  background-color: white;

  @media screen and (max-width: 767px) {
    position: fixed;
    left: 0;
    right: 0;
    width: 768px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;
