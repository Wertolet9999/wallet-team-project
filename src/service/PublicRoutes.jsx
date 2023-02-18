import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from 'redux/auth/authSelectors';
import { routes } from './routes';

export const PublicRoute = ({ component }) => {
  const isAuth = Boolean(useSelector(selectIsAuth));

  return !isAuth ? component : <Navigate to={routes.HOME} />;
};
