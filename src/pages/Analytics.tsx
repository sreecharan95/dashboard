import React from 'react';
import Layout from '../components/Layout';
import Chart from '../components/Chart';

const Analytics: React.FC = () => {
  const chartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [11, 14, 13, 4, 8, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1.5
      }
    ]
  };

  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      ticks: {
        beginAtZero: true,
      }
    }
  };

  return (
    <Layout>
      <h1>Analytics</h1>
      <Chart type="pie" data={chartData} options={chartOptions} title="Analytics" />
    </Layout>
  );
};

export default Analytics;
