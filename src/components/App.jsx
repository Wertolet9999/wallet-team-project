import { Route, Routes, Navigate } from 'react-router-dom';
import { routes } from 'service/routes';
import { Layout } from 'Layout/Layout';
// import { PrivateRoute } from 'service/PrivatRoutes';
// import { PublicRoute } from 'service/PublicRoutes';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { selectToken } from 'redux/auth/authSelectors';

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
  const token = Boolean(useSelector(selectToken));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      {!token ? (
        <>
          <Route path={routes.LOGIN} element={<LoginPage />} />
          <Route path={routes.REGISTER} element={<RegisterPage />} />
        </>
      ) : (
        <>
          <Route path={routes.HOME} element={<Layout />}>
            <Route index element={<DashboardPage />} />
            <Route path={routes.DIAGRAM} element={<StatisticPage />} />
            <Route path={routes.CURRENCY} element={<CurrencyPage />} />
          </Route>
        </>
      )}

      <Route
        path="*"
        element={
          token ? <Navigate to={routes.HOME} /> : <Navigate to={routes.LOGIN} />
        }
      />
    </Routes>
  );
};
