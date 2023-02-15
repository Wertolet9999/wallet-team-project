import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Section, WrapperDiv } from './Layout.styled';
import { Container } from 'stylesheet/baseStyle';
import { SideBar } from 'components/SideBar/SideBar';

export const Layout = () => {
  return (
    <>
      <Header />
      <WrapperDiv>
        <SideBar />
        <Container>
          <Section>
            <Outlet />
          </Section>
        </Container>
      </WrapperDiv>
    </>
  );
};
