import styled from 'styled-components';

export const ModalAddTransactionTitle = styled.h2`
  display: block;
  margin: 0;
  padding: 0;
  text-align: center;
`;
export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
export const TypeLabel = styled.label`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const InputCheckBox = styled.input`
  appearance: none;
  position: absolute;
`;
export const CheckBox = styled.div`
  position: relative;
  width: 80px;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
  display: flex;
  align-items: center;
`;
export const Span = styled.span`
  color: #e0e0e0;
`;
export const CheckButton = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  position: absolute;
  left: 45px;
  background-color: green;
`;

export const customStylesSelect = isMobile => ({
  control: styles => ({
    ...styles,
    backgroundColor: 'white',
    width: isMobile ? '280px' : '394px',

    ':active': {
      border: '1px solid #e0e0e0',
      borderRadius: '6px',
    },
    ':hover': {
      borderRadius: '6px',
      border: '1px solid #e0e0e0',
    },
    ':focus': {
      borderRadius: '6px',
      border: '1px solid #e0e0e0',
    },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    height: '32px',
    backgroundColor: isDisabled
      ? undefined
      : isSelected
      ? data.color
      : isFocused
      ? 'rgba(255, 255, 255, 0.5)'
      : undefined,

    color: isDisabled
      ? '#ccc'
      : isSelected
      ? '#ff6596'
      : isFocused
      ? '#ff6596'
      : undefined,

    cursor: isDisabled ? 'not-allowed' : 'default',

    ':active': {
      ...styles[':active'],
      backgroundColor: !isDisabled
        ? isSelected
          ? data.color
          : 'rgba(255, 255, 255, 0.5)'
        : undefined,
    },
    ':hover': {
      color: '#ff6596',
      background: 'rgba(255, 255, 255, 0.5)',
    },
    ':focus': {
      color: '#ff6596',
      background: 'rgba(255, 255, 255, 0.5)',
    },
  }),
});
export const Amount = styled.input`
  padding-left: 8px;
  padding-right: 8px;
  width: 190px;
  height: 32px;
  border: 0;
  text-align: center;
`;
export const Comment = styled.textarea``;
export const Button = styled.button`
  background-color: #fff;
`;
