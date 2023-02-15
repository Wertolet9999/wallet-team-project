import styled from 'styled-components';

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  min-height: 100%;
  padding-top: 50px;
  bottom: 0;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  min-width: 320px;
  width: 100%;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 37px;
  left: 400px;
  position: absolute;
  z-index: 10;
  background-color: #ffffff;
`;
