import { selectIsAuth } from 'redux/auth/authSelectors';

import { Balance } from 'components/Balance/Balance';
import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import Dashpord from 'components/dashbord/Dashpord';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import ModalWindowOverlay from 'components/ModalWindowOverlay/ModalWindowOverlay';

import React, { useState } from 'react';
import { useMedia } from 'react-use';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   selectIsLoading,
//   selectTransaction,
// } from 'redux/transactions/transactionSelectors';
// import { selectCategories } from 'redux/categories/categoriesSelectors';
// import { Patron } from 'components/Patron/Patron';
// import { useEffect } from 'react';

export const DashboardPage = () => {
  const isMobile = useMedia('(max-width: 767px)');
  // const [transactionToEdit, setTransactionToEdit] = useState(null);
  // const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const isAuth = useSelector(state => state.auth.isAuth);
  // useEffect(() => {
  //   if (isAuth) {
  //     dispatch(transactions());
  //   }
  // }, [dispatch, isAuth]);

  // const transactions = useSelector(selectTransaction);
  // const categories = useSelector(selectCategories);
  // const isFetchingTransaction = useSelector(selectIsLoading);
  // console.log(transactions);
  // console.log(categories);
  // console.log(isFetchingTransaction);
  const handleModalOpen = () => {
    setModalIsOpen(true);
  };
  // const handleEditModal = transaction => {
  //   setTransactionToEdit(transaction);
  // };
  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {isMobile && <Balance />}
      {/* {transactions.length > 0 ? (
        <> */}
      {/* <Dashpord
        // transactions={transactions}
        // categories={categories}
        // openEditModal={handleEditModal}
      /> */}
      <ButtonAddTransactions onClick={handleModalOpen} />
      {/* </>
      ) : (
        !isFetchingTransaction && (
          <button onClick={handleModalOpen}>
            <Patron />
          </button>
        )
      )} */}
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
