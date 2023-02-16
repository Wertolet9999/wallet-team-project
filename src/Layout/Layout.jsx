import { Outlet } from 'react-router-dom';
import { WrapperDiv } from './Layout.styled';
import { Container } from 'stylesheet/baseStyle';
import { SideBar } from 'components/SideBar/SideBar';
import { useMedia } from 'react-use';
import { Header } from 'components/Header/Header';

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
              <Outlet />
            </Container>
          </WrapperDiv>
        </>
      ) : (
        <>
          <Container>
            <WrapperDiv>
              <SideBar />
              <Outlet />
            </WrapperDiv>
          </Container>
        </>
      )}
    </>
  );
};
