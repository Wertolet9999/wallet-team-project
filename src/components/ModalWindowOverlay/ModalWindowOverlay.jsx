import React, { useCallback, useEffect } from 'react';
import { Backdrop, Content } from './ModalWindowOverlay.styled';

const ModalWindowOverlay = ({ children, clickOnBackdrop }) => {
  const handleOnClick = evt => {
    if (evt.target === evt.currentTarget) {
      clickOnBackdrop();
    }
  };
  const handleOnKey = useCallback(
    e => {
      if (e.key === 'Escape') {
        clickOnBackdrop();
      }
    },
    [clickOnBackdrop]
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleOnKey);
    return () => {
      window.removeEventListener('keydown', handleOnKey);
      document.body.style.overflow = 'auto';
    };
  }, [handleOnKey]);

  return (
    <Backdrop onClick={handleOnClick}>
      <Content>{children}</Content>
    </Backdrop>
  );
};

export default ModalWindowOverlay;
