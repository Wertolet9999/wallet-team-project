import { Route, Routes, Navigate } from 'react-router-dom';
import { routes } from 'service/routes';
import { Layout } from 'Layout/Layout';
import { PrivateRoute } from 'service/PrivatRoutes';
import { PublicRoute } from 'service/PublicRoutes';
import { lazy, useEffect } from 'react';
import { selectToken } from 'redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';

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
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path={routes.LOGIN}
        element={<PublicRoute component={<LoginPage />} />}
      />
      <Route
        path={routes.REGISTER}
        element={<PublicRoute component={<RegisterPage />} />}
      />
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<PrivateRoute component={<DashboardPage />} />} />
        <Route
          path={routes.DIAGRAM}
          element={<PrivateRoute component={<StatisticPage />} />}
        />
        <Route
          path={routes.CURRENCY}
          element={<PrivateRoute component={<CurrencyPage />} />}
        />
        <Route path="*" element={<Navigate to={routes.HOME} />} />
      </Route>
    </Routes>
  );
};
