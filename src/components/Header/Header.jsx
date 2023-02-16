import React from 'react';
import Logo from 'components/Logo/Logo';
import HeaderNav from 'components/heder-nav/HeaderNav';
import { HeaderTag } from './Header.styled';

export const Header = () => {
  return (
    <HeaderTag>
      <Logo />
      <HeaderNav />
    </HeaderTag>
  );
};
