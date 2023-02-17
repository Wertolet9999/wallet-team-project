import {
  CurrencyItem,
  CurrencyList,
  HeaderList,
  HeaderTitle,
  SpanDescr,
  Table,
  Wrapper,
} from './Currency.styled';

export const Currency = () => {
  return (
    <>
      <Wrapper>
        <HeaderList>
          <HeaderTitle>Currency</HeaderTitle>
          <HeaderTitle>Purchase</HeaderTitle>
          <HeaderTitle>Sale</HeaderTitle>
        </HeaderList>
        <Table>
          <CurrencyList>
            <CurrencyItem>
              <SpanDescr>3</SpanDescr>
              <SpanDescr>2</SpanDescr>
              <SpanDescr>1</SpanDescr>
            </CurrencyItem>
          </CurrencyList>
        </Table>
      </Wrapper>
    </>
  );
};
