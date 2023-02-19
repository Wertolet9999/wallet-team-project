import React from 'react';
import Logo from 'components/Logo/Logo';
import HeaderNav from 'components/HederNav/HeaderNav';
import { HeaderDiv, HeaderTag } from './Header.styled';
import { Container } from 'stylesheet/baseStyle';

export const Header = () => {
  return (
    <HeaderTag>
      <Container>
        <HeaderDiv>
          <Logo />
          <HeaderNav />
        </HeaderDiv>
      </Container>
    </HeaderTag>
  );
};
