import { Balance } from 'components/Balance/Balance';
import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { HomeTab } from 'components/HomeTab/HomeTab';
import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import React from 'react';
import { useMedia } from 'react-use';

export const DashboardPage = () => {
  const isMobile = useMedia('(max-width: 767px)');

  return (
    <div>
      {isMobile && <Balance />}
      <HomeTab />
      <TransactionsList />
      <ButtonAddTransactions />
    </div>
  );
};
