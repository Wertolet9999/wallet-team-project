import { useFormik } from 'formik';
import React, { useState } from 'react';
import {
  Amount,
  Button,
  CheckBox,
  CheckButton,
  Comment,
  customStylesSelect,
  InputCheckBox,
  ModalAddTransactionTitle,
  ModalForm,
  Span,
  TypeLabel,
} from './ModalAddTransaction.styled';
import Select from 'react-select';
import { useMedia } from 'react-use';

export const ModalAddTransaction = ({ onClose }) => {
  const categories = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const [transactionDate] = useState(new Date());
  const [categoryId, setCategoryId] = useState('');
  const isMobile = useMedia('(max-width: 767px)');
  const changeCategory = categoryId => {
    setCategoryId(categoryId.value);
  };
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

  return (
    <>
      <ModalAddTransactionTitle>Add transaction</ModalAddTransactionTitle>
      <ModalForm onSubmit={handleSubmit}>
        <TypeLabel>
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
        </TypeLabel>
        <Select
          name="categoryId"
          styles={customStylesSelect(isMobile)}
          onChange={evt => {
            changeCategory(evt);
          }}
          options={categories}
          required
        ></Select>
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
