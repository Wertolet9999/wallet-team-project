import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import Dashpord from 'components/dashbord/Dashpord';
import { HomeTab } from 'components/HomeTab/HomeTab';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import ModalWindowOverlay from 'components/ModalWindowOverlay/ModalWindowOverlay';
import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import React, { useState } from 'react';

export const DashboardPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Dashpord />
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
