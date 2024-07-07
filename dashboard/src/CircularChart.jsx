import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Low', value: 33 },
  { name: 'Medium', value: 33 },
  { name: 'High', value: 17 },
  { name: 'No value', value: 17 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function CircularChart() {
  return (
    <PieChart width={450} height={375}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={100}
        outerRadius={120}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}

export default CircularChart;
