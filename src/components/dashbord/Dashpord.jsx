import React from 'react';
import { MdEdit } from 'react-icons/md';
import { useMedia } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import {
  BtnDel,
  BtnEdit,
  Span,
  Box,
  Ulheads,
  Liheads,
  Ultable,
  Litable,
} from './Dashpord.styled';
import { deleteTransaction } from 'redux/transactions/transactionOperation';

import { toast } from 'react-toastify';
import { selectBalance } from 'redux/transactions/transactionSelectors';

const Dashpord = ({ transactions, categories, openEditModal }) => {
  const dispatch = useDispatch();
  const currentBalance = useSelector(selectBalance);
  const isMobile = useMedia('(max-width: 767px)');

  const isShown = transactions.length > 0 && categories.length > 0;
  const arrSortTrans = [...transactions].sort(
    (prevTr, nextTr) =>
      Date.parse(nextTr.transactionDate) - Date.parse(prevTr.transactionDate)
  );
  const deleteData = (id, amount) => {
    if (currentBalance - amount < 0) {
      toast.error(
        'Sorry, balance can`t be negative. You should delete expense transactions to delete this income'
      );
      return;
    }
    dispatch(deleteTransaction(id));
  };

  return (
    isShown && (
      <Box>
        {!isMobile && (
          <Ulheads>
            <Liheads>Date</Liheads>
            <Liheads>Type</Liheads>
            <Liheads>Category</Liheads>
            <Liheads>Comment</Liheads>
            <Liheads>sum</Liheads>
            <Liheads></Liheads>
          </Ulheads>
        )}
        {arrSortTrans.map(
          ({ id, transactionDate, type, categoryId, comment, amount }) => (
            <Ultable key={id}>
              <Litable type={type}>
                {isMobile && <Span>Date</Span>}
                {console.log(transactionDate)}
                {transactionDate}
              </Litable>
              <Litable type={type}>
                {isMobile && <Span>Type</Span>}
                {type === 'INCOME' ? '+' : '-'}
              </Litable>
              <Litable type={type}>
                {isMobile && <Span>Category</Span>}
                {categories.find(category => category.id === categoryId).name}
              </Litable>
              <Litable type={type}>
                {isMobile && <Span>Comment</Span>}
                {comment}
              </Litable>
              <Litable type={type}>
                {isMobile && <Span>Category</Span>}
                {amount}
              </Litable>
              <Litable type={type}>
                {!isMobile && (
                  <BtnEdit
                    aria-label="Edit"
                    type="button"
                    onClick={() =>
                      openEditModal({
                        id,
                        transactionDate,
                        type,
                        categoryId,
                        comment,
                        amount,
                      })
                    }
                  >
                    <MdEdit />
                  </BtnEdit>
                )}
                <BtnDel
                  aria-label="delete"
                  type="button"
                  onClick={() => deleteData(id, amount)}
                  red
                >
                  delete
                </BtnDel>
                {isMobile && (
                  <BtnEdit
                    aria-label="Edit"
                    type="button"
                    onClick={() =>
                      openEditModal({
                        id,
                        transactionDate,
                        type,
                        categoryId,
                        comment,
                        amount,
                      })
                    }
                  >
                    <MdEdit />
                    Edit
                  </BtnEdit>
                )}
              </Litable>
            </Ultable>
          )
        )}
      </Box>
    )
  );
};

export default Dashpord;
