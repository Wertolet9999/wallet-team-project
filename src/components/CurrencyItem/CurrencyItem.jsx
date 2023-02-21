import React from 'react';
import { ItemWrapper, SpanDescr } from './CurrencyItem.styled';

const currencyMap = new Map();
currencyMap.set(840, 'USD');
currencyMap.set(978, 'EUR');

export const CurrencyItem = ({ currencyCodeA, rateBuy, rateSell }) => {
  return (
    <ItemWrapper>
      <SpanDescr>{currencyMap.get(currencyCodeA)}</SpanDescr>
      <SpanDescr>{rateBuy.toFixed(2)}</SpanDescr>
      <SpanDescr>{rateSell.toFixed(2)}</SpanDescr>
    </ItemWrapper>
  );
};
