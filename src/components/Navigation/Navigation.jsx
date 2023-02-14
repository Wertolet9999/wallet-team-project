import { routes } from 'service/routes';
import { StyledNavLink, StyledUl, StyledNav } from './Navigation.styled';

export const Navigation = () => {
  return (
    <StyledNav>
      <StyledUl>
        <li>
          <StyledNavLink to={routes.LOGIN} />
        </li>
        <li>
          <StyledNavLink to={routes.REGISTER} />
        </li>
        <li>
          <StyledNavLink to={routes.HOME} />
        </li>
        <li>
          <StyledNavLink to={routes.DIAGRAM} />
        </li>
        <li>
          <StyledNavLink to={routes.CURRENCY} />
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
