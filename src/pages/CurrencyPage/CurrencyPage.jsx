import { Currency } from 'components/Currency/Currency';
import React from 'react';
import { useMedia } from 'react-use';
import { Section } from './CurrencyPage.styled';

export const CurrencyPage = () => {
  const isMobile = useMedia('(max-width: 767px)');
  return (
    <>
      {isMobile && (
        <Section>
          <Currency />
        </Section>
      )}
    </>
  );
};
