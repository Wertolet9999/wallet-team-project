import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Section, WrapperDiv } from './Layout.styled';
import { Container } from 'stylesheet/baseStyle';
import { SideBar } from 'components/SideBar/SideBar';
import { useMedia } from 'react-use';

export const Layout = () => {
  const isMobile = useMedia('(max-width: 767px)');
  return (
    <>
      <Header />
      {isMobile ? (
        <>
          <WrapperDiv>
            <SideBar />
            <Container>
              <Section>
                <Outlet />
              </Section>
            </Container>
          </WrapperDiv>
        </>
      ) : (
        <>
          <Container>
            <Section>
              <WrapperDiv>
                <SideBar />
                <Outlet />
              </WrapperDiv>
            </Section>
          </Container>
        </>
      )}
    </>
  );
};
