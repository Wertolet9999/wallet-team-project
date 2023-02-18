import React from 'react';
import { useSelector } from 'react-redux';
import { selectBalance } from 'redux/transactions/transactionSelectors';
import { AmountBalance, BalanceDiv, TextBalance } from './Balance.styled';

export const Balance = () => {
  const currentBalance = useSelector(selectBalance);

  return (
    <BalanceDiv>
      <TextBalance>your balance</TextBalance>
      <AmountBalance>
        &#8372; <b>{currentBalance.toFixed(2)}</b>
      </AmountBalance>
    </BalanceDiv>
  );
};
