import React from 'react';
import { IoLogOutOutline } from 'react-icons/io5';
import { useMedia } from 'react-use';
import { List, LogOutButton, SpanDead } from './HeaderNav.styled';
import { logout } from 'redux/auth/authOperations';
import { useState } from 'react';
import { LogoutForm } from 'components/ModalLogout/ModalLogout';
import { useDispatch } from 'react-redux';

const HeaderNav = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const dispatch = useDispatch();
  const [isOpenLogoutModal, setIsOpenLogoutModal] = useState(false);

  return (
    <List>
      <li>
        <SpanDead>{/*{Name} {логика когбудет имя}*/} Name</SpanDead>
      </li>
      <li>
        {isOpenLogoutModal && (
          <LogoutForm closeModalFunc={() => setIsOpenLogoutModal(false)} />
        )}
        <LogOutButton
          onClick={() => {
            isMobile ? dispatch(logout()) : setIsOpenLogoutModal(true);
          }}
        >
          <IoLogOutOutline /> {!isMobile && 'Exit'}
        </LogOutButton>
      </li>
    </List>
  );
};

export default HeaderNav;
