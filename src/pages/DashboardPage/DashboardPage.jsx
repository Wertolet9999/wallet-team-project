import { Balance } from 'components/Balance/Balance';
import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { HomeTab } from 'components/HomeTab/HomeTab';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import ModalWindowOverlay from 'components/ModalWindowOverlay/ModalWindowOverlay';
import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import React, { useState } from 'react';
import { useMedia } from 'react-use';

export const DashboardPage = () => {
  const isMobile = useMedia('(max-width: 767px)');

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {isMobile && <Balance />}
      <HomeTab />
      <TransactionsList />
      <ButtonAddTransactions onClick={handleModalOpen} />

      {modalIsOpen && (
        <ModalWindowOverlay clickOnBackdrop={handleModalClose}>
          {modalIsOpen ? (
            <ModalAddTransaction onClose={handleModalClose} />
          ) : null}
        </ModalWindowOverlay>
      )}
    </>
  );
};
