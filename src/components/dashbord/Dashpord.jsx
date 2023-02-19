import React, { useEffect } from 'react';
import { MdEdit } from 'react-icons/md';
import { useMedia } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import {
  BtnDel,
  BtnEdit,
  Table,
  Td,
  Span,
  Thead,
  Thhead,
  Tr,
  Box,
  Ulheads,
  Liheads,
  Ultable,
  Litable,
} from './Dashpord.styled';
import { deleteTransaction } from 'redux/transactions/transactionOperation';
import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { toast } from 'react-toastify';
import { selectBalance } from 'redux/transactions/transactionSelectors';

const Dashpord = ({
  transactions,
  categories,
  openEditModal,
  handleModalOpen,
}) => {
  const dispatch = useDispatch();
  const currentBalance = useSelector(selectBalance);
  const isMobile = useMedia('(max-width: 767px)');
  const isNoMobile = useMedia('(min-width: 768px)');
  const isShown = transactions.length > 0 && categories.length > 0;
  const arrSortTrans = [...transactions].sort(
    (prevTr, nextTr) =>
      Date.parse(nextTr.transactionDate) - Date.parse(prevTr.transactionDate)
  );
  // console.log(arrSortTrans);
  // console.log(transactions);
  // console.log(categories);
  const deleteData = (id, amount) => {
    // if (currentBalance - amount < 0) {
    //   toast.error(
    //     'Sorry, balance can`t be negative. You should delete expense transactions to delete this income'
    //   );
    //   return;
    // } //logict for negetive balans , need tu instal toas
    dispatch(deleteTransaction(id));
  };

  const type = 'INCOME'; // to delet whent  will be work

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
                <BtnDel onClick={deleteData}>delete</BtnDel>
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
        {/* <ButtonAddTransactions onClick={handleModalOpen} /> */}
      </Box>
    )
    // <Table>
    //   {!isMobile && (
    //     <thead>
    //       <tr>
    //         <Thhead>Date</Thhead>
    //         <Thhead>Type</Thhead>
    //         <Thhead>Category</Thhead>
    //         <Thhead>Comment</Thhead>
    //         <Thhead style={{ textAlign: 'right' }}>sum</Thhead>
    //         <Thhead></Thhead>
    //       </tr>
    //     </thead>
    //   )}
    //   <tbody>
    // {arrSortTrans.map(
    //   ({
    //     id,
    //     transactionDate,
    //     type,
    //     categoryId,
    //     comment,
    //     amount,
    //     balanceAfter,
    //   }) => (
    //         <Tr key={id} type={type}>
    //           <Td>
    //             {isMobile && <Span>Date</Span>}
    //             {transactionDate}
    //           </Td>
    //           <Td>
    //             {isMobile && <Span>Type</Span>}
    //             {type === 'INCOME' ? '+' : '-'}
    //           </Td>
    //           <Td>
    //             {isMobile && <Span>Category</Span>}
    //             {categories.find(category => category.id === categoryId).name}
    //           </Td>
    //           <Td>
    //             {isMobile && <Span>Comment</Span>}
    //             {comment}
    //           </Td>
    //           <Td type={type}>
    //             {isMobile && <Span>Category</Span>}
    //             {amount}
    //           </Td>
    //           <Td>
    //             <BtnEdit>
    //               <MdEdit />
    //             </BtnEdit>
    //             <BtnDel>delete</BtnDel>
    //           </Td>
    //         </Tr>
    //   )
    // )}
    //     {/* {transactions.map(
    //       ({
    //         id,
    //         transactionDate,
    //         type,
    //         categoryId,
    //         comment,
    //         amount,
    //         balanceAfter,
    //       }) => ( */}

    //     {/* )
    //     )} */}
    //     {/* {isMobile &&
    //       arrSortTrans.map(
    //         ({
    //           id,
    //           transactionDate,
    //           type,
    //           categoryId,
    //           comment,
    //           amount,
    //           balanceAfter,
    //         }) => (
    //           <tr key={id} type={type}>
    //             <Td>{transactionDate}</Td>
    //             <Td>{type}</Td>
    //             <Td>{categoryId}</Td>
    //             <Td>{comment}</Td>
    //             <Td>{amount}</Td>
    //             <Td>
    //               <BtnEdit>
    //                 <MdEdit />

    //               </BtnEdit>
    //               <BtnDel>delete</BtnDel>
    //             </Td>
    //           </tr>
    //         )
    //       )} */}
    //   </tbody>
    // </Table>
  );
};

export default Dashpord;
