import { routes } from 'service/routes';
import { StyledNavLink, StyledUl } from './Navigation.styled';
import { useMedia } from 'react-use';
import { IoMdHome } from 'react-icons/io';
import { MdTimeline } from 'react-icons/md';
import { FaDollarSign } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { selectIsToken } from 'redux/auth/authSelectors';

export const Navigation = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const token = Boolean(useSelector(selectIsToken));

  return (
    <StyledUl>
      {!token && (
        <>
          <li>
            <StyledNavLink to={routes.LOGIN}>LOGIN</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to={routes.REGISTER}>REGISTER</StyledNavLink>
          </li>
        </>
      )}
      {token && (
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
