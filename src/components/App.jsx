import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';

import { DashboardPage } from 'pages/DashboardPage/DashboardPage';

import { routes } from 'service/routes';

export const App = () => {
  return (
    <Routes>
      <Route path={routes.LOGIN} element={<LoginPage />} />
      <Route path={routes.REGISTER} element={<RegisterPage />} />
      <Route path={routes.HOME} element={<DashboardPage />}>
        <Route index element={<HomePage />} />
        <Route path={routes.DIAGRAM} element={<StatisticPage />} />
        <Route path={routes.CURRENCY} element={<CurrencyPage />} />
        <Route path="*" element={<Navigate to={routes.HOME} />} />
      </Route>
    </Routes>
  );
};
//   HOME: '/', //dashboardPage
//   REGISTER: '/register',
//   LOGIN: '/login',
//   DIAGRAM: '/diagram', //SummeryPage
//   CURRENCY: '/currency', //
// };
