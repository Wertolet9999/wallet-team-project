import React from 'react';
import Logo from 'components/Logo/Logo';
import HeaderNav from 'components/HederNav/HeaderNav';
import { Conteiner, HeaderTag } from './Header.styled';

export const Header = () => {
  return (
    <HeaderTag>
      <Conteiner>
        <Logo />
        <HeaderNav />
      </Conteiner>
    </HeaderTag>
  );
};
