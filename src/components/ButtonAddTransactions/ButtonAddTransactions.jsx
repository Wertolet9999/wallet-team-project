import React from 'react';
import { Icon, StyledBtn } from './ButtonAddTransactions.styled';

export const ButtonAddTransactions = ({ onClick }) => {
  return (
    <StyledBtn onClick={onClick}>
      <Icon />
    </StyledBtn>
  );
};
