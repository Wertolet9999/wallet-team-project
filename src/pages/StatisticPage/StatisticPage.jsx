import { Chart } from 'components/Chart/Chart';
import { DiagramTab } from 'components/DiagramTab/DiagramTab';
import { Patron } from 'components/Patron/Patron';

import { Table } from 'components/Table/Table';
import React from 'react';

export const StatisticPage = () => {
  return (
    <div>
      <Chart />
      <Table />
      <DiagramTab />
      <Patron />
    </div>
  );
};
