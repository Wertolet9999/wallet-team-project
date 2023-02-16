import { useFormik } from 'formik';
import React, { useState } from 'react';
import {
  Amount,
  Button,
  CheckBox,
  CheckButton,
  Comment,
  customStylesSelect,
  DateInput,
  DivFlex,
  InputCheckBox,
  Label,
  ModalAddTransactionTitle,
  ModalForm,
  Span,
} from './ModalAddTransaction.styled';
import Select from 'react-select';
import { useMedia } from 'react-use';
import { BsCalendar2Day } from 'react-icons/bs';
import Datetime from 'react-datetime';
import styles from '../ModalAddTransaction/ModalAddTransaction.module.css';
import 'react-datetime/css/react-datetime.css';
import { selectCategories } from 'redux/categories/categoriesSelectors';
import { useDispatch, useSelector } from 'react-redux';

export const ModalAddTransaction = ({ onClose }) => {
  // const categories = useSelector(selectCategories);
  const categories = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  const [transactionDate] = useState(new Date());
  const [categoryId, setCategoryId] = useState('');
  const isMobile = useMedia('(max-width: 767px)');
  // const dispatch = useDispatch();

  const changeCategory = categoryId => {
    setCategoryId(categoryId.value);
  };

  const changeDate = date => {
    setTransactionDate(date._d);
  };

  // Submit
  const { handleSubmit, values, handleChange, resetForm } = useFormik({
    initialValues: {
      type: true,
      comment: '',
      amount: '',
    },
    onSubmit: ({ type, comment, amount }) => {
      const newTransaction = {
        transactionDate,
        type: type ? 'EXPENSE' : 'INCOME',
        categoryId: categoryId && type ? categoryId : 'INCOME-ID',
        comment,
        amount: type ? -Number(amount) : Number(amount),
      };
      console.log(newTransaction);
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
          <Span>Income</Span>
          <InputCheckBox
            type="checkbox"
            name="type"
            value={values.type}
            onChange={handleChange}
            checked={values.type}
          />
          <CheckBox>
            <CheckButton props={values.type}></CheckButton>
          </CheckBox>
          <Span>Expense</Span>
        </Label>
        <Select
          name="categoryId"
          styles={customStylesSelect(isMobile)}
          onChange={evt => {
            changeCategory(evt);
          }}
          options={categories}
          required
        ></Select>
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
        <Button primary type="submit">
          ADD
        </Button>
        <Button type="button" onClick={onClose}>
          CANCEL
        </Button>
      </ModalForm>
    </>
  );
};
