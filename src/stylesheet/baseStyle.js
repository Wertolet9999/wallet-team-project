import styled, { createGlobalStyle } from 'styled-components';

import orangeEllipseTab from '../img/background/orangeEllipseTab.png';
import orangeEllipseTabLarge from '../img/background/orangeEllipseTab@2x.png';
import orangeEllipseDesk from '../img/background/orangeEllipseDesk.png';
import orangeEllipseDeskLarge from '../img/background/orangeEllipseDesk@2x.png';
import violetEllipseTab from '../img/background/violetEllipseTab.png';
import violetEllipseTabLarge from '../img/background/violetEllipseTab@2x.png';
import violetEllipseDesk from '../img/background/violetEllipseDesk.png';
import violetEllipseDeskLarge from '../img/background/violetEllipseDesk@2x.png';

export const BaseStyle = createGlobalStyle`

*,
::after,
::before {
  box-sizing: border-box;
}


html {
  -moz-tab-size: 4;
  tab-size: 4;
}

html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;

  @media screen and (min-width: 768px) {
  position: relative;

    ::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      z-index: -30;
      display: block;
      width: 368px;
      height: 384px;

      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      background-image: url(${orangeEllipseTab});
      // retina screen
      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${orangeEllipseTabLarge});
      }
    }

    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -40;
      display: block;
      width: 495px;
      height: 323px;

      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      background-image: url(${violetEllipseTab});
      // retina screen
      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${violetEllipseTabLarge});
      }
    }
  }

  @media screen and (min-width: 1280px) {
    position: static;
    
    ::before {
      width: 552px;
      height: 383px;

      background-image: url(${orangeEllipseDesk});
      // retina screen
      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${orangeEllipseDeskLarge});
      }
    }

    ::after {
      width: 496px;
      height: 333px;

      background-image: url(${violetEllipseDesk});
      // retina screen
      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${violetEllipseDeskLarge});
      }
    }
  }
}
.Toastify__toast-theme--colored.Toastify__toast--success {
  background-color: #24CCA7;
}
.Toastify__toast-theme--colored.Toastify__toast--warning {
  background-color: #fed057;
}
.Toastify__toast-theme--colored.Toastify__toast--error {
  background-color: #ff6596;
}


body {
  margin: 0;
  font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    font-size: 16px;
  color: #000000;
  background:#E7EAF2;
}

ul{
  list-style: none;
  padding: 0px;
  margin: 0px;
}

h1, h2, h3, h4, h5, p{
  margin-top: 0;
  margin-bottom: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  cursor: pointer;
}

button {
  cursor: pointer;
}
`;

export const Section = styled.section`
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.4)
  );
  backdrop-filter: blur(25px);

  background-size: cover;
  min-height: calc(100vh - 85px);
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
    width: 1280px;
  }
`;

export const toastStyled = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};
