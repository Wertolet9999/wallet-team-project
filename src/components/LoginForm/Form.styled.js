import styled from 'styled-components';
import { Link } from 'react-router-dom';
import loginBgImgTab from '../../img/background/loginBgImgTab.png';
import loginBgImgTabLarge from '../../img/background/loginBgImgTab@2x.png';
import loginBgImgDesk from '../../img/background/loginBgImgDesk.png';
import loginBgImgDeskLarge from '../../img/background/loginBgImgDesk@2x.png';
import registerBgImgTab from '../../img/background/registerBgImgTab.png';
import registerBgImgTabLarge from '../../img/background/registerBgImgTab@2x.png';
import registerBgImgDesk from '../../img/background/registerBgImgDesk.png';
import registerBgImgDeskLarge from '../../img/background/registerBgImgDesk@2x.png';

export const Page = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    background-color: #ffffff;
  }
`;

export const CustomizedLoginPage = styled(Page)`
  @media screen and (min-width: 768px) {
    padding-top: 360px;
    padding-bottom: 196px;
    ::before {
      content: '';
      position: absolute;
      top: 60px;
      left: 114px;
      z-index: -20;
      display: block;
      width: 260px;
      height: 250px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-image: url(${loginBgImgTab});
      // retina screen
      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${loginBgImgTabLarge});
      }
    }
  }
  @media screen and (min-width: 1280px) {
    padding-top: 136px;
    padding-bottom: 116px;
    ::before {
      top: 150px;
      left: 76px;
      width: 435px;
      height: 420px;
      background-image: url(${loginBgImgDesk});
      // retina screen
      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${loginBgImgDeskLarge});
      }
    }
    ::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      z-index: -25;
      display: block;
      width: 57%;
      height: 100vh;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.4),
        rgba(255, 255, 255, 0.4)
      );
      backdrop-filter: blur(25px);
    }
  }
`;

export const CustomizedRegisterPage = styled(CustomizedLoginPage)`
  @media screen and (min-width: 768px) {
    padding-bottom: 48px;
    ::before {
      width: 274px;
      background-image: url(${registerBgImgTab});
      // retina screen
      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${registerBgImgTabLarge});
      }
    }
  }
  @media screen and (min-width: 1280px) {
    padding-top: 52px;
    padding-bottom: 52px;
    ::before {
      top: 153px;
      left: 66px;
      width: 452px;
      height: 413px;
      background-image: url(${registerBgImgDesk});
      // retina screen
      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${registerBgImgDeskLarge});
      }
    }
  }
`;

export const Title = styled.h1`
  position: absolute;
  z-index: -10;
  font-weight: 400;
  font-size: 30px;
  line-height: calc(45 / 30);
  color: #000000;
  @media screen and (max-width: 1279px) {
    top: 163px;
    right: 153px;
  }
  @media screen and (min-width: 1280px) {
    top: 598px;
    left: 200px;
  }
`;

export const HeaderLogo = styled.header`
  a {
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 533px;
    margin-left: auto;
    margin-right: auto;
    padding: 40px 58.5px 62px 65px;
    border-radius: 20px;
    background-color: #ffffff;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 91px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 60px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  position: relative;
  svg {
    position: absolute;
    top: 8px;
    left: 12.5px;
    width: 24px;
    height: 24px;
    fill: ${p => {
      if (p.value.length > 0) {
        return !p.error ? '#24CCA7' : '#ff6596';
      }
      return '#e0e0e0';
    }};
  }
  div {
    position: absolute;
    top: 48px;
    left: 0;
    width: 100%;
    height: 0;
    border: 4px solid #e5f1ef;
    border-radius: 8px;
  }
  span {
    position: absolute;
    top: -4px;
    left: -4px;
    display: block;
    width: ${p => (p.length < 13 ? (p.length / 12) * 102 : 102)}%;
    height: 0;
    border: 4px solid ${p => (!p.error ? '#24CCA7' : '#ff6596')};
    border-radius: 8px;
    box-shadow: 0px 1px 8px rgba(36, 204, 167, 0.5);
  }
  p {
    position: absolute;
    top: 4px;
    left: 0;
    margin: 0;
    font-size: 10px;
    line-height: calc(27 / 18);
    color: #ff6596;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 8px 8px 54.5px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  font-size: 18px;
  line-height: calc(27 / 18);
  ::placeholder {
    color: #bdbdbd;
  }
`;

export const FormButton = styled.button`
  padding: 13px;
  background: #24cca7;
  border: 1px solid transparent;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 400;
  line-height: calc(27 / 18);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 6px 15px #24cca7;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FormLink = styled(Link)`
  display: block;
  padding: 13px;
  /* background-color: #24cca7; */
  border: 1px solid #4a56e2;
  border-radius: 20px;
  font-size: 18px;
  line-height: calc(27 / 18);
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  color: #4a56e2;
  transition: all 0.3s;
  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 6px 15px #4a56e2;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;
