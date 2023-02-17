import {
  CurrencyList,
  HeaderList,
  HeaderTitle,
  Table,
  Wrapper,
} from './Currency.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrency } from 'redux/monoBank/monoBankOperations';
import { selectCurrentCurrency } from 'redux/monoBank/monoBankSelectors';
import { selectIsLoading } from 'redux/categories/categoriesSelectors';
import { Loader } from 'components/Loader/Loader';
import { nanoid } from '@reduxjs/toolkit';
import { CurrencyItem } from 'components/CurrencyItem/CurrencyItem';

export const Currency = () => {
  const dispatch = useDispatch();
  const currentCurrency = useSelector(selectCurrentCurrency);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCurrency());
  }, [dispatch]);

  return (
    <>
      <Wrapper>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <HeaderList>
              <HeaderTitle>Currency</HeaderTitle>
              <HeaderTitle>Purchase</HeaderTitle>
              <HeaderTitle>Sale</HeaderTitle>
            </HeaderList>
            <Table>
              <CurrencyList>
                {currentCurrency.length > 0 &&
                  currentCurrency.map(item => (
                    <CurrencyItem key={nanoid()} {...item} />
                  ))}
              </CurrencyList>
            </Table>
          </>
        )}
      </Wrapper>
    </>
  );
};
