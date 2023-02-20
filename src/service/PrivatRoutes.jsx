import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsToken } from 'redux/auth/authSelectors';
import { routes } from './routes';

export const PrivateRoute = ({ component }) => {
  const isAuth = useSelector(selectIsToken);

  return isAuth ? component : <Navigate to={routes.LOGIN} />;
};
