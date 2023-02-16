import React from 'react';
import { LogoLink, LogoSvg } from './Logo.styled';
import headerLogo from '../../img/header-logo/header-logo.svg';

const Logo = () => {
  return (
    <LogoLink>
      <LogoSvg src={headerLogo} />
      <span>Wallet</span>
    </LogoLink>
  );
};

export default Logo;
