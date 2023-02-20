import { Currency } from 'components/Currency/Currency';

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useMedia } from 'react-use';
import { routes } from 'service/routes';
import { Section } from './CurrencyPage.styled';

export const CurrencyPage = () => {
  const isMobile = useMedia('(max-width: 767px)');
  return (
    <>
      {isMobile ? (
        <Section>
          <Currency />
        </Section>
      ) : (
        <Navigate to={routes.HOME} />
      )}
    </>
  );
};
