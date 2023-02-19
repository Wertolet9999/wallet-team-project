import { selectIsAuth } from 'redux/auth/authSelectors';
import { Balance } from 'components/Balance/Balance';
import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import Dashpord from 'components/dashbord/Dashpord';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import ModalWindowOverlay from 'components/ModalWindowOverlay/ModalWindowOverlay';
import React, { useState } from 'react';
import { useMedia } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectTransaction,
} from 'redux/transactions/transactionSelectors';
import { selectCategories } from 'redux/categories/categoriesSelectors';
import { Patron } from 'components/Patron/Patron';
import { useEffect } from 'react';
import { fetchTransactions } from 'redux/transactions/transactionOperation';
import { getCategories } from 'redux/categories/CategoriesOperations';
import { EditTransaction } from 'components/EditTransaction/EditTransaction';
import { Wrapper } from './DashboardPage.styled';

export const DashboardPage = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const [transactionToEdit, setTransactionToEdit] = useState(null);
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const isAuth = useSelector(state => state.auth.isAuth);

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchTransactions());
      dispatch(getCategories());
    }
  }, [dispatch, isAuth]);

  const transactions = useSelector(selectTransaction);
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectIsLoading);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };
  const closeEditModal = () => {
    setTransactionToEdit(null);
  };

  const handleEditModal = transaction => {
    setTransactionToEdit(transaction);
  };

  return (
    <>
      <Wrapper>
        {isMobile && <Balance />}
        {!isLoading && transactions.length === 0 ? (
          <Patron />
        ) : (
          <Dashpord
            transactions={transactions}
            categories={categories}
            openEditModal={handleEditModal}
            handleModalOpen={handleModalOpen}
          />
        )}
        <ButtonAddTransactions type="button" onClick={handleModalOpen}>
          add transaction
        </ButtonAddTransactions>
        {(modalIsOpen || transactionToEdit) && (
          <ModalWindowOverlay clickOnBackdrop={handleModalClose}>
            {modalIsOpen ? (
              <ModalAddTransaction onClose={handleModalClose} />
            ) : (
              <EditTransaction
                transaction={transactionToEdit}
                close={closeEditModal}
              />
            )}
          </ModalWindowOverlay>
        )}
      </Wrapper>
    </>
  );
};
