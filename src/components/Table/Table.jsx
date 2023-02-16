import {
  TableList,
  TableHeading,
  Wrapper,
  TrSummaryWrap,
  TrSummaryField,
  TrSummaryStr,
  TrSummaryNum,
  SelectWrap,
  NoDataField,
  TextMessage,
  Box,
} from './Table.styled';

//import { useMedia } from 'react-use';

import Select from 'react-select';

// const dataMonth = [
//   { label: 'January', value: 1 },
//   { label: 'February', value: 2 },
//   { label: 'March', value: 3 },
//   { label: 'April', value: 4 },
//   { label: 'May', value: 5 },
//   { label: 'June', value: 6 },
//   { label: 'July', value: 7 },
//   { label: 'August', value: 8 },
//   { label: 'September', value: 9 },
//   { label: 'October', value: 10 },
//   { label: 'November', value: 11 },
//   { label: 'December', value: 12 },
// ];

// function generateArrayOfYears() {
//   const max = new Date().getFullYear();
//   const min = max - 4;
//   const years = [];

//   for (const i = max; i >= min; i--) {
//     years.push({
//       value: i,
//       label: i.toString(),
//     });
//   }
//   return years;
// }

export const Tabel = ({ trSummary, setYear, setMonth, month, year }) => {
  //const isMobile = useMedia('(max-width: 767px)');

  return (
    <Box>
      <SelectWrap>
        <Select name="month" placeholder="Month"></Select>

        <Select name="year" placeholder="Year"></Select>
      </SelectWrap>

      <Wrapper>
        <>
          <TableList>
            <thead>
              <tr>
                <TableHeading left>Category</TableHeading>
                <TableHeading>Sum</TableHeading>
              </tr>
            </thead>
            <tbody>1111</tbody>
          </TableList>

          <TrSummaryWrap>
            <TrSummaryField>
              <TrSummaryStr>Expanses: </TrSummaryStr>
              <TrSummaryNum red></TrSummaryNum>
            </TrSummaryField>
            <TrSummaryField>
              <TrSummaryStr>Incomes: </TrSummaryStr>
              <TrSummaryNum></TrSummaryNum>
            </TrSummaryField>
          </TrSummaryWrap>
        </>

        <NoDataField>
          <TextMessage>In this period you don't have any expances.</TextMessage>
        </NoDataField>
        <NoDataField>
          <TextMessage firtsTime>
            Choose month and year to see statistics.
          </TextMessage>
        </NoDataField>
      </Wrapper>
    </Box>
  );
};
