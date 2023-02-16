import React from 'react';
import { IoLogOutOutline } from 'react-icons/io5';
import { useMedia } from 'react-use';
import { List, LogOutButton, SpanDead } from './HeaderNav.styled';

const HeaderNav = () => {
  const isMobile = useMedia('(max-width: 767px)');
  return (
    <List>
      <li>
        <SpanDead>{/*{Name} {логика когбудет имя}*/} Name</SpanDead>
      </li>
      <li>
        <LogOutButton>
          <IoLogOutOutline /> {!isMobile && <SpanDead>Exit</SpanDead>}
        </LogOutButton>
      </li>
    </List>
  );
};

export default HeaderNav;
