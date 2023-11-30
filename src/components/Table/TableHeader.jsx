import { Fragment } from 'react';

const rows = [
  'id',
  'Month',
  'Income',
  'Costs',
  'Accumulation UAH',
  'Accumulation USD',
  'Accumulation EUR',
  'Edit',
];

export const TableHeader = () => (
  <thead>
    <tr className="table__row">
      {
        rows.map(row => (
          <Fragment key={row}>
            <th className="table__cell">{row}</th>
          </Fragment>
        ))
      }
    </tr>
  </thead>
);
