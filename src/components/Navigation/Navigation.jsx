import { routes } from 'service/routes';
import { StyledNavLink, StyledUl } from './Navigation.styled';
import { useMedia } from 'react-use';
import { IoMdHome } from 'react-icons/io';
import { MdTimeline } from 'react-icons/md';
import { FaDollarSign } from 'react-icons/fa';

export const Navigation = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const isAuth = false;
  return (
    <StyledUl>
      {isAuth ? (
        <>
          <li>
            <StyledNavLink to={routes.LOGIN}>LOGIN</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to={routes.REGISTER}>REGISTER</StyledNavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <StyledNavLink to={routes.HOME}>
              <IoMdHome />
              {!isMobile && 'Home'}
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to={routes.DIAGRAM}>
              <MdTimeline />
              {!isMobile && 'Statistics'}
            </StyledNavLink>
          </li>
        </>
      )}
      {isMobile && (
        <li>
          <StyledNavLink to={routes.CURRENCY}>
            <FaDollarSign />
          </StyledNavLink>
        </li>
      )}
    </StyledUl>
  );
};
