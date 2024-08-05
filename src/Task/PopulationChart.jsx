import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopulation } from '../store/populationSlice';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PopulationChart = () => {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.population);

  useEffect(() => {
    dispatch(fetchPopulation());
  }, [dispatch]);

  if (error) {
    return <p>Error: {error}</p>;
  }
  const chartData = {
    labels: data.map(item => item.Year), 
    datasets: [
      {
        label: 'Population',
        data: data.map(item => item.Population), 
        backgroundColor: 'tomato',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw.toLocaleString()}`;
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true
      },
      y: {
        beginAtZero: false
      }
    }
  };

  return (
    <div style={{ width: '1000px', height: '100px', padding : '100px'}}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px',textAlign:'center' }}>Population Chart</h1>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default PopulationChart;
