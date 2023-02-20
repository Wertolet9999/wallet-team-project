import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

export const CloseButtonEd = styled.button`
  position: absolute;
  right: -60px;
  top: -225px;
  background-color: transparent;
  border: 0;
  font-size: 16px;
`;

const checkButtonColor = p => {
  let backgroundColor;
  if (!p.props) {
    backgroundColor = '#24CCA7';
  } else {
    backgroundColor = '#ff6596';
  }
  return backgroundColor;
};

const checkButtonPosition = p => {
  if (!p.props) {
    return -4;
  } else {
    return 47;
  }
};

export const ModalAddTransactionTitle = styled.h2`
  display: block;
  margin: 0;
  padding: 0;
  height: 40px;
  text-align: center;
  margin-bottom: 40px;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Label = styled.label`
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
  font-family: Circe, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: #e0e0e0;
`;

export const SpanIncome = styled.span`
  font-family: Circe, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: #24cca7;
`;

export const SpanExpense = styled.span`
  font-family: Circe, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: #ff6596;
`;

export const CheckButton = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  position: absolute;
  left: ${checkButtonPosition}%;
  background-color: ${checkButtonColor};
  transition: all 0.5s;
  scale: 1;
  &:hover,
  &:focus {
    box-shadow: 0px 3px 10px ${checkButtonColor};
    transition: all 0.5s;
    cursor: pointer;
    scale: 1.05;
  }
`;

export const customStylesSelect = isMobile => ({
  control: styles => ({
    ...styles,
    backgroundColor: 'white',
    width: isMobile ? '280px' : '394px',
    height: '32px',
    border: '1px solid transparent',
    borderRadius: '0',
    borderBottom: '1px solid #E0E0E0',

    color: '#e0e0e0',
    fontFamily: 'Circe,  sans-serif',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 1.5,
    boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.1)',

    paddingLeft: '8px',
    paddingRight: '8px',

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
  menu: styles => ({
    ...styles,
    background: 'rgba(255, 255, 255, 0.5)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(25px)',
    borderRadius: '20px',
    height: '325px',
    zIndex: '1000000',
  }),
  menuList: styles => ({
    ...styles,
    overflow: 'visible',
  }),
});

export const Amount = styled.input`
  padding-left: 8px;
  padding-right: 8px;
  width: 190px;
  height: 32px;
  border: 0;
  border-bottom: 1px solid #e0e0e0;
  font-family: Circe, sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  &:active,
  &:hover,
  &:focus {
    outline: 1px solid #e0e0e0;
    border-radius: 6px;
  }
  &::placeholder {
    text-align: center;
  }
  @media screen and (max-width: 767px) {
    width: 280px;
    text-align: center;
    &::placeholder {
      text-align: left;
    }
  } ;
`;

export const Comment = styled.textarea`
  padding-left: 8px;
  padding-right: 8px;
  width: 394px;
  height: 32px;
  border: 0;
  border-bottom: 1px solid #e0e0e0;
  resize: none;
  font-family: Circe, sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  &:active,
  &:hover,
  &:focus {
    outline: 1px solid #e0e0e0;
    border-radius: 6px;
  }
  @media screen and (max-width: 767px) {
    width: 280px;
    height: 84px;
  }
`;

export const Button = styled.button`
  position: relative;
  padding: 13px;
  border-radius: 20px;
  min-width: 200px;
  font-size: 18px;
  font-weight: 400;
  line-height: calc(27 / 18);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  overflow: hidden;
  background-color: #fff;
  transition: all 0.3s;
  z-index: 10;
  &:hover {
    transform: scale(1.05);
  }
  ${p => {
    if (p.primary) {
      return `
      background:#24CCA7;
      color: #ffffff;
      border: 1px solid transparent;
      &:hover {
        box-shadow: 0px 6px 15px #24CCA7;
      }`;
    }
    return `    
    border: 1px solid #4A56E2;
    color: #4A56E2;
    
    &:hover {
      box-shadow: 0px 6px 15px #4A56E2;
    }`;
  }}
  min-height: 50px;
  @media screen and (min-width: 768px) {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const DateInput = styled.div`
  width: 181px;
  height: 32px;
  border: 0;
  position: relative;
  svg {
    position: relative;
    top: 25%;
    left: 90%;
    fill: blue;
  }
  &:focus svg {
    fill: #4a56e2;
  }
  &:hover svg {
    fill: #4a56e2;
  }
  @media screen and (max-width: 767px) {
    width: 280px;
  }
`;

export const DivFlex = styled.div`
  display: flex;
  gap: 30px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 40px;
  }
`;
export const Error = styled.div`
  position: absolute;
  max-width: 190px;
  margin: 0;
  font-size: 15px;
  line-height: calc(27 / 18);
  color: #ff6596;
`;

export const Income = styled(AiOutlinePlus)`
  width: 20px;
  height: 20px;
  fill: #ffffff;
`;

export const Expense = styled(AiOutlineMinus)`
  width: 20px;
  height: 20px;
  fill: #ffffff;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: -60px;
  top: -100px;
  background-color: transparent;
  border: 0;
  font-size: 16px;
`;

export const ButtonFlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
