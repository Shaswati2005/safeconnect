import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
import { title } from 'process';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['social', 'sleep', 'academics'],
  datasets: [
    {
      label: 'points to improve',
      data: [300, 50, 100],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    Legend: {
      position: 'bottom',
      display:true,
    },
    title:{
      display: true,
      text: 'Improvements',

    }
  },
  cutout:'50%',
};

const PieChart: React.FC = () => {
  return (
    <div>
      <h2>Improvements Needed</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;