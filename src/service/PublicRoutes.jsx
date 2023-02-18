import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelectors';
import { routes } from './routes';

export const PublicRoute = ({ children, restricted = false }) => {
  const isLogIn = useSelector(selectToken);
  const shouldRedirect = isLogIn && restricted;
  return shouldRedirect ? <Navigate to={routes.HOME} /> : children;
};
