import { Chart } from 'components/Chart/Chart';
import { Tabel } from 'components/Table/Table';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBalance } from 'redux/transactions/transactionSelectors';
import { getStatistic } from 'redux/transactionStatistic/statisticOperations';
import { selectError, selectIsLoadingStatistic, selectStatistic } from 'redux/transactionStatistic/statisticSelectors';
import { ChartBox, Box, Title, Wrapper } from './Statistic.styled';

export const Statistic = () => {
  const [month, setMonth] = useState(
    () => JSON.parse(localStorage.getItem('month-statistic')) ?? ''
  );
  const [year, setYear] = useState(
    () => JSON.parse(localStorage.getItem('year-statistic')) ?? ''
  );

  let trSummary = useSelector(selectStatistic);

  const isLoadingSummary = useSelector(selectIsLoadingStatistic);
  const balance = useSelector(selectBalance);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (month && year) {
      dispatch(getStatistic({ month, year }));
    }
  }, [month, year, dispatch]);

  const setMonthLS = month => {
    setMonth(month);
    localStorage.setItem('month-statistic', month);
  };

  const setYearLS = year => {
    setYear(year);
    localStorage.setItem('year-statistic', year);
  };

  return (
    <Wrapper>
      <Title>Statistics</Title>
      <Box>
        <ChartBox>
          <Chart
            trSummary={trSummary}
            isLoading={isLoadingSummary}
            balance={balance}
          />
        </ChartBox>
        <Tabel
          month={month}
          year={year}
          setYear={setYearLS}
          setMonth={setMonthLS}
          trSummary={trSummary}
        />
        {error && <p>{error}</p>}
      </Box>
    </Wrapper>
  );
};
