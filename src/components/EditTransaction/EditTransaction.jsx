import { useDispatch, useSelector } from 'react-redux';
import { GrClose } from 'react-icons/gr';
import {
  ButtonFlexDiv,
  // CloseButton,
  CloseButtonEd,
  ModalAddTransactionTitle,
  ModalForm,
} from 'components/ModalAddTransaction/ModalAddTransaction.styled';
import { selectCategories } from 'redux/categories/categoriesSelectors';
import { useMedia } from 'react-use';
import { useFormik } from 'formik';
import { updateTransaction } from 'redux/transactions/transactionOperation';
import {
  Amount,
  AmountDiv,
  ButtonEdit,
  Category,
  Comment,
  TransactionData,
} from './EditTransaction.styled';

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
      amount: transaction.amount,
    },
    onSubmit: values => {
      dispatch(
        updateTransaction({
          ...transaction,
          ...values,
          amount: Number(values.amount),
        })
      );
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
      <AmountDiv>
        Amount:
        <Amount
          type="text"
          placeholder="0.00"
          name="amount"
          value={values.amount}
          onChange={handleChange}
          required
        />
      </AmountDiv>
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
        <ButtonFlexDiv>
          <ButtonEdit type="submit" primary>
            EDIT
          </ButtonEdit>
          <ButtonEdit type="button" onClick={close}>
            Cancel
          </ButtonEdit>
        </ButtonFlexDiv>
        {!isMobile && (
          <CloseButtonEd type="button" onClick={close} aria-label="close">
            <GrClose />
          </CloseButtonEd>
        )}
      </ModalForm>
    </>
  );
};
