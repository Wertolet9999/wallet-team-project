import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelectors';
import { routes } from './routes';

export const PrivateRoute = ({ component }) => {
  const isAuth = Boolean(useSelector(selectToken));

  return isAuth ? component : <Navigate to={routes.LOGIN} />;
};
