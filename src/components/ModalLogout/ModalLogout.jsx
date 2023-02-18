import { Button } from 'components/ModalAddTransaction/ModalAddTransaction.styled';
import { ModalAddTransactionTitle } from 'components/ModalAddTransaction/ModalAddTransaction.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { Wrapper } from 'components/LoginForm/Form.styled';
import { Backdrop } from 'components/ModalWindowOverlay/ModalWindowOverlay.styled';

export const LogoutForm = ({ closeModalFunc }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const closeModal = e => {
      if (e.key === 'Escape') {
        closeModalFunc();
      }
    };
    window.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, [closeModalFunc]);
  return (
    <>
      <Backdrop>
        <Wrapper>
          <ModalAddTransactionTitle>
            Are you sure want to exit?
          </ModalAddTransactionTitle>
          <Button
            primary
            onClick={() => {
              dispatch(logout());
            }}
          >
            Yes, am sure
          </Button>
          <Button onClick={closeModalFunc}>No, I forgot something</Button>
        </Wrapper>
      </Backdrop>
    </>
  );
};
