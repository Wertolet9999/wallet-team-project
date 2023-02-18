import { useFormik } from 'formik';
import React, { useState } from 'react';
import {
  Amount,
  Button,
  ButtonFlexDiv,
  CheckBox,
  CheckButton,
  CloseButton,
  Comment,
  customStylesSelect,
  DateInput,
  DivFlex,
  Error,
  Expense,
  Income,
  InputCheckBox,
  Label,
  ModalAddTransactionTitle,
  ModalForm,
  Span,
  SpanExpense,
  SpanIncome,
} from './ModalAddTransaction.styled';
import Select from 'react-select';
import { useMedia } from 'react-use';
import { BsCalendar2Day } from 'react-icons/bs';
import Datetime from 'react-datetime';
import styles from '../ModalAddTransaction/ModalAddTransaction.module.css';
import 'react-datetime/css/react-datetime.css';
import { selectCategories } from 'redux/categories/categoriesSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from 'redux/categories/CategoriesOperations';
import * as yup from 'yup';
import { GrClose } from 'react-icons/gr';
import {
  addTransaction,
  fetchTransactions,
} from 'redux/transactions/transactionOperation';

export const ModalAddTransaction = ({ onClose }) => {
  const categories = useSelector(selectCategories);
  console.log('categories :>> ', categories);
  // const categories = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' },
  // ];
  const [transactionDate, setTransactionDate] = useState(new Date());
  const [categoryId, setCategoryId] = useState('');
  // const balance = useSelector(selectBalance);
  const isMobile = useMedia('(max-width: 767px)');
  const dispatch = useDispatch();
  // console.log(categories);

  const validationSchema = yup.object({
    amount: yup
      .number()
      .typeError('Must be a number')
      .moreThan(0, 'Please, enter number more than 0')
      .required(''),
  });

  const changeCategory = categoryId => {
    setCategoryId(categoryId.value);
  };

  const changeDate = date => {
    setTransactionDate(date._d);
  };

  // Submit
  const { handleSubmit, values, handleChange, errors, resetForm } = useFormik({
    initialValues: {
      type: true,
      comment: '',
      amount: '',
    },
    validationSchema,
    onSubmit: ({ type, comment, amount }) => {
      const newTransaction = {
        transactionDate,
        type: type ? 'EXPENSE' : 'INCOME',
        categoryId: categoryId && type ? categoryId : 'INCOME-ID',
        comment,
        amount: type ? -Number(amount) : Number(amount),
      };
      console.log(newTransaction);
      dispatch(addTransaction(newTransaction));

      resetForm();
      onClose();
    },
  });

  const today = new Date();
  const lastYear = new Date('February 24, 2022 23:59:59');
  const disableFutureDate = current => {
    return current.isBefore(today) && current.isAfter(lastYear);
  };

  return (
    <>
      <ModalAddTransactionTitle>Add transaction</ModalAddTransactionTitle>
      <ModalForm onSubmit={handleSubmit}>
        <Label>
          {values.type ? <Span>Income</Span> : <SpanIncome>Income</SpanIncome>}
          <InputCheckBox
            type="checkbox"
            name="type"
            value={values.type}
            onChange={handleChange}
            checked={values.type}
          />
          <CheckBox>
            <CheckButton props={values.type}>
              {!values.type ? <Income /> : <Expense />}
            </CheckButton>
          </CheckBox>
          {!values.type ? (
            <Span>Expense</Span>
          ) : (
            <SpanExpense>Expense</SpanExpense>
          )}
        </Label>
        {values.type && (
          <Select
            name="categoryId"
            styles={customStylesSelect(isMobile)}
            onChange={evt => {
              changeCategory(evt);
            }}
            options={categories}
            required
          ></Select>
        )}
        <DivFlex>
          <div>
            <Amount
              type="text"
              placeholder="0.00"
              name="amount"
              value={values.amount}
              onChange={handleChange}
              required
            />
            {errors.amount && <Error>{errors.amount}</Error>}
          </div>
          <DateInput>
            <Datetime
              dateFormat="DD.MM.YY"
              timeFormat={false}
              name="transactionDate"
              value={transactionDate}
              onChange={evt => {
                changeDate(evt);
              }}
              inputProps={{
                className: styles.dateTime,
              }}
              closeOnSelect={true}
              isValidDate={disableFutureDate}
            />
            <BsCalendar2Day />
          </DateInput>
        </DivFlex>
        <Comment
          placeholder="Comment"
          name="comment"
          value={values.comment}
          onChange={handleChange}
        />
        <ButtonFlexDiv>
          <Button primary type="submit">
            ADD
          </Button>
          <Button type="button" onClick={onClose}>
            CANCEL
          </Button>
        </ButtonFlexDiv>
        {!isMobile && (
          <CloseButton type="button" onClick={onClose}>
            <GrClose />
          </CloseButton>
        )}
      </ModalForm>
    </>
  );
};
