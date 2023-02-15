import { routes } from 'service/routes';
import { StyledNavLink, StyledUl, StyledNav } from './Navigation.styled';

export const Navigation = () => {
  return (
    <StyledNav>
      <StyledUl>
        <li>
          <StyledNavLink to={routes.LOGIN}>LOGIN</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={routes.REGISTER}>REGISTER</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={routes.HOME}>HOME</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={routes.DIAGRAM}>DIAGRAM</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={routes.CURRENCY}>CURRENCY</StyledNavLink>
        </li>
      </StyledUl>
    </StyledNav>
  );
};
//   HOME: '/', //dashboardPage
//   REGISTER: '/register',
//   LOGIN: '/login',
//   DIAGRAM: '/diagram', //SummeryPage
//   CURRENCY: '/currency', //
// };
