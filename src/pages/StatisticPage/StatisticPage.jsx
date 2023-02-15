import { Chart } from 'components/Chart/Chart';
import { DiagramTab } from 'components/DiagramTab/DiagramTab';
import { Table } from 'components/Table/Table';
import React from 'react';

export const StatisticPage = () => {
  return (
    <>
      <Chart />
      <Table />
      <DiagramTab />
    </>
  );
};
