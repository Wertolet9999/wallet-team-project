import React from 'react';
import { IoLogOutOutline } from 'react-icons/io5';
import { useMedia } from 'react-use';
import { List, LogOutButton, SpanDead } from './HeaderNav.styled';
import { useState } from 'react';
import { LogoutForm } from 'components/ModalLogout/ModalLogout';
import { useSelector } from 'react-redux';
import { selectName } from 'redux/auth/authSelectors';

const HeaderNav = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const [isOpenLogoutModal, setIsOpenLogoutModal] = useState(false);
  const name = useSelector(selectName);

  return (
    <List>
      <li>
        <SpanDead>{name}</SpanDead>
      </li>
      <li>
        {isOpenLogoutModal && (
          <LogoutForm closeModalFunc={() => setIsOpenLogoutModal(false)} />
        )}
        <LogOutButton
          onClick={() => {
            setIsOpenLogoutModal(true);
          }}
        >
          <IoLogOutOutline /> {!isMobile && 'Exit'}
        </LogOutButton>
      </li>
    </List>
  );
};

export default HeaderNav;
