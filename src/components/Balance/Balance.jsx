import React from 'react';
import { AmountBalance, BalanceDiv, TextBalance } from './Balance.styled';

export const Balance = () => {
  // const currentBalance = useSelector(selectBalance);
  const currentBalance = 20000;
  return (
    <BalanceDiv>
      <TextBalance>your balance</TextBalance>
      <AmountBalance>
        &#8372; <b>{currentBalance.toFixed(2)}</b>
      </AmountBalance>
    </BalanceDiv>
  );
};
