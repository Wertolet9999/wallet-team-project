import { Outlet } from 'react-router-dom';
import { WrapperDiv } from './Layout.styled';
import { Container, Section } from 'stylesheet/baseStyle';
import { SideBar } from 'components/SideBar/SideBar';
import { useMedia } from 'react-use';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsToken } from 'redux/auth/authSelectors';
import { ErrorMessage } from 'formik';

export const Layout = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const token = Boolean(useSelector(selectIsToken));

  return (
    <>
      {token ? (
        <>
          <Header />
          {isMobile ? (
            <WrapperDiv>
              <SideBar />
              <Container>
                <Suspense fallback={<Loader />}>
                  <Outlet />
                </Suspense>
              </Container>
            </WrapperDiv>
          ) : (
            <Section>
              <Container>
                <WrapperDiv>
                  <SideBar />
                  <Suspense fallback={<Loader />}>
                    <Outlet />
                  </Suspense>
                </WrapperDiv>
              </Container>
            </Section>
          )}
        </>
      ) : (
        <ErrorMessage message="You must be logged in to view this content" />
      )}
    </>
  );
};
