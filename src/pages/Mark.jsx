import React from "react";
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 90, label: 'Java' },
  { id: 1, value: 80, label: 'Python' },
  { id: 2, value: 70, label: 'Html' },
];


function Mark() {
  return (
    <>
      <h1>Marks:</h1>
      <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />
    </>
  );
}

export default Mark;
