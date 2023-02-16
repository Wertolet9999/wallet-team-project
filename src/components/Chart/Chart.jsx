import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { BalanceText } from './Chart.styled';

export const Chart = () => {
  ChartJS.register(ArcElement, Tooltip);

  return (

        <>
          <Doughnut/>
          <BalanceText>Text</BalanceText>
        </>
  );
};
