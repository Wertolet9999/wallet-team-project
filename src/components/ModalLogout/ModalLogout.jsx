import { Button } from 'components/ModalAddTransaction/ModalAddTransaction.styled';
import { ModalAddTransactionTitle } from 'components/ModalAddTransaction/ModalAddTransaction.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { Backdrop } from 'components/ModalWindowOverlay/ModalWindowOverlay.styled';
import { ButtonWrapper, Container } from './Logout.styled';

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
        <Container>
          <ModalAddTransactionTitle>
            Are you sure you want to exit?
          </ModalAddTransactionTitle>
          <ButtonWrapper>
            <Button
              primary
              onClick={() => {
                dispatch(logout());
              }}
            >
              Yes, I am
            </Button>
            <Button onClick={closeModalFunc}>No, not yet</Button>
          </ButtonWrapper>
        </Container>
      </Backdrop>
    </>
  );
};
