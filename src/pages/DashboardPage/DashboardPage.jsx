import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { HomeTab } from 'components/HomeTab/HomeTab';
import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import React from 'react';

export const DashboardPage = () => {
  return (
    <>
      <HomeTab />
      <TransactionsList />
      <ButtonAddTransactions />
    </>
  );
};
