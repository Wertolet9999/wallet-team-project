// import { useDispatch, useSelector } from 'react-redux';
// import { useFormik } from 'formik';
// import { GrClose } from 'react-icons/gr';
// import {
//   CloseButton,
//   ModalForm,
//   ModalTitle,
// } from 'components/ModalAddTransaction/ModalAddTransaction.styled';
// import { updateTransaction } from 'redux/transactions/transactionOperation';
// import { selectCategories } from 'redux/categories/categoriesSelectors';
// import { Comment, Category, TransactionData } from './EditModal.styled';
// import { Button } from 'components/Button/Button';
// import { transformDate } from 'helpers/transformDate';
// import { useMedia } from 'react-use';

import { useDispatch, useSelector } from 'react-redux';
import { GrClose } from 'react-icons/gr';
import {
  Button,
  CloseButton,
  ModalAddTransactionTitle,
  ModalForm,
} from 'components/ModalAddTransaction/ModalAddTransaction.styled';
import { selectCategories } from 'redux/categories/categoriesSelectors';
import { useMedia } from 'react-use';
import { useFormik } from 'formik';
import { updateTransaction } from 'redux/transactions/transactionOperation';
import { Category, Comment, TransactionData } from './EditTransaction.styled';

export const EditTransaction = ({ transaction, close }) => {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();
  const isMobile = useMedia('(max-width: 768px)');
  const transformDate = date => {
    const dateString = new Date(date);
    const day = dateString.getDate().toString().padStart(2, '0');
    const month = (dateString.getMonth() + 1).toString().padStart(2, '0');
    const year = dateString.getFullYear().toString().slice(2);

    return `${day}.${month}.${year}`;
  };

  const { handleSubmit, values, handleChange } = useFormik({
    initialValues: {
      comment: transaction.comment,
    },
    onSubmit: values => {
      dispatch(updateTransaction({ ...transaction, ...values }));
      close();
    },
  });
  return (
    <>
      <ModalAddTransactionTitle>Edit comment</ModalAddTransactionTitle>
      <Category type={transaction.type}>
        {
          categories.find(category => category.id === transaction.categoryId)
            .name
        }
      </Category>
      <TransactionData>
        Date: {transformDate(transaction.transactionDate)}
      </TransactionData>
      <TransactionData>
        Sum: {Math.abs(transaction.amount).toFixed(2)}
      </TransactionData>
      <ModalForm onSubmit={handleSubmit}>
        <Comment
          placeholder="Comment"
          name="comment"
          onChange={handleChange}
          rows="4"
          value={values.comment}
        >
          {values.comment}
        </Comment>

        <Button type="submit" primary>
          UPDATE
        </Button>
        <Button type="button" onClick={close}>
          Cancel
        </Button>
        {!isMobile && (
          <CloseButton type="button" onClick={close} aria-label="close">
            <GrClose />
          </CloseButton>
        )}
      </ModalForm>
    </>
  );
};
