import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Doing', count: 2 },
  { name: 'Backlog', count: 1 },
  { name: 'On hold', count: 1 },
];

function Chart() {
  return (
    <BarChart width={700} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#ff7043" />
    </BarChart>
  );
}

export default Chart;
