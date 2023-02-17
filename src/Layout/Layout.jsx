import { Outlet } from 'react-router-dom';
import { WrapperDiv } from './Layout.styled';
import { Container } from 'stylesheet/baseStyle';
import { SideBar } from 'components/SideBar/SideBar';
import { useMedia } from 'react-use';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

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
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </Container>
          </WrapperDiv>
        </>
      ) : (
        <>
          <Container>
            <WrapperDiv>
              <SideBar />
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </WrapperDiv>
          </Container>
        </>
      )}
    </>
  );
};
