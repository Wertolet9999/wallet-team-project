import { Outlet } from 'react-router-dom';
import { WrapperDiv } from './Layout.styled';
import { Container, Section } from 'stylesheet/baseStyle';
import { SideBar } from 'components/SideBar/SideBar';
import { useMedia } from 'react-use';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';
import { selectIsAuth, selectToken } from 'redux/auth/authSelectors';
import { fetchTransactions } from 'redux/transactions/transactionOperation';
import { getCategories } from 'redux/categories/CategoriesOperations';

export const Layout = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectToken);
  const isMobile = useMedia('(max-width: 767px)');

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchTransactions());
      dispatch(getCategories());
    }
  }, [dispatch, isAuth]);

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
        </>
      )}
    </>
  );
};
