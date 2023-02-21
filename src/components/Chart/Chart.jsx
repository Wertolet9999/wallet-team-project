import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Loader, LoaderMobile } from 'components/Loader/Loader';
import { Doughnut } from 'react-chartjs-2';
import { useMedia } from 'react-use';
import { switchBg } from 'stylesheet/switchBg';
import { BalanceText, Loading } from './Chart.styled';

export const Chart = ({ trSummary, isLoading, balance }) => {
  ChartJS.register(ArcElement, Tooltip);

  const data = {
    labels: [],
    datasets: [
      {
        label: 'Statistics',
        data: trSummary && trSummary?.categoriesSummary.length > 0 ? [] : [100],
        backgroundColor:
          trSummary && trSummary?.categoriesSummary.length > 0
            ? []
            : ['#BDBDBD'],
        borderColor: ['transparent'],
      },
    ],
  };

  const options = {
    cutout: '70%',
    plugins: {
      tooltip: {
        callbacks: {
          label: function ({ label, raw }) {
            return `${label}: ${raw}%`;
          },
        },
      },
    },
  };

  let redraw = false;

  const chartInfoList = () => {
    if (trSummary.categoriesSummary.length > 0) {
      trSummary.categoriesSummary.forEach(({ name, type, total }) => {
        if (type === 'INCOME') {
          return;
        }
        const bgColor = switchBg({ name });
        const amount = Math.abs(total);
        const expence = Math.abs(trSummary.expenseSummary);
        data.datasets[0].backgroundColor.push(bgColor);
        data.labels.push(name);

        const percentage = Math.round((amount / expence) * 100);
        data.datasets[0].data.push(percentage);
      });
    }
  };

  if (trSummary) {
    chartInfoList();
  }

  const redrawValue = () => {
    if (trSummary) {
      redraw = true;
      return redraw;
    } else {
      redraw = false;
      return redraw;
    }
  };

  const isMobile = useMedia('(max-width: 767px)');

  return (
    <>
      {isLoading ? (
        <Loading>{isMobile ? <LoaderMobile /> : <Loader />}</Loading>
      ) : (
        <>
          <Doughnut redraw={redrawValue()} options={options} data={data} />
          <BalanceText>&#8372; {balance.toFixed(2)}</BalanceText>
        </>
      )}
    </>
  );
};
