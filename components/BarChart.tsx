import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Legend, scales } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { plugin } from 'postcss';
import { title } from 'process';

ChartJS.register(CategoryScale, LinearScale, BarElement);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

const data: ChartData = {
  labels: ['emotions', 'social', 'academics', 'confidence', 'sleep','interests'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
    
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true, 
  plugin:{
    Legend:{
        position:"bottom",
        display:true,
    },
    title:{
        display:true,
        text:"your child's mental wellbeing",
        font:{
            size:20,
        }
    },
    scales:{
        x:{
            title:{
                display:true,
                text:"categories"
            }
        },
        y: {
            title: {
              display: true,
              text: 'Values',
            },
          },
    }

  },
  
};

const BarChart: React.FC = () => {
  return (
    <div className='w-full h-fit max-w-[600px] px-2'>
      <h2>My Chart</h2>
      <Bar data={data} options={options} className=' h-[100%] w-[80%] bg-blue-100  hover:shadow-2xl hover:shadow-blue-200 border rounded-2xl p-3 '/> 
    </div>
  );
};

export default BarChart;