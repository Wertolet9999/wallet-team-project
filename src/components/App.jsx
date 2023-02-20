import { Route, Routes, Navigate } from 'react-router-dom';
import { routes } from 'service/routes';
import { Layout } from 'Layout/Layout';
// import { PrivateRoute } from 'service/PrivatRoutes';
// import { PublicRoute } from 'service/PublicRoutes';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import {
  selectIsFetching,
  selectIsLoadingUser,
  selectIsToken,
} from 'redux/auth/authSelectors';
import { Loader } from './Loader/Loader';
import { PublicRoute } from 'service/PublicRoutes';
import { PrivateRoute } from 'service/PrivatRoutes';

const DashboardPage = lazy(() =>
  import('../pages/DashboardPage/DashboardPage').then(module => ({
    default: module.DashboardPage,
  }))
);

const StatisticPage = lazy(() =>
  import('../pages/StatisticPage/StatisticPage').then(module => ({
    default: module.StatisticPage,
  }))
);

const CurrencyPage = lazy(() =>
  import('../pages/CurrencyPage/CurrencyPage').then(module => ({
    default: module.CurrencyPage,
  }))
);

const RegisterPage = lazy(() =>
  import('../pages/RegisterPage/RegisterPage').then(module => ({
    default: module.RegisterPage,
  }))
);

const LoginPage = lazy(() =>
  import('../pages/LoginPage/LoginPage').then(module => ({
    default: module.LoginPage,
  }))
);

export const App = () => {
  const token = Boolean(useSelector(selectIsToken));
  const dispatch = useDispatch();

  const isFetching = useSelector(selectIsFetching);
  const isLoading = useSelector(selectIsLoadingUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isFetching || isLoading ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path={routes.LOGIN}
          element={<PublicRoute component={<LoginPage />} />}
        />
        <Route
          path={routes.REGISTER}
          element={<PublicRoute component={<RegisterPage />} />}
        />
        <Route
          path={routes.HOME}
          element={<PrivateRoute component={<Layout />} />}
        >
          <Route index element={<DashboardPage />} />
          <Route path={routes.DIAGRAM} element={<StatisticPage />} />
          <Route path={routes.CURRENCY} element={<CurrencyPage />} />
          <Route path="*" element={<Navigate to={routes.HOME} />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
