import React from 'react';
import Layout from '../components/Layout';
import Chart from '../components/Chart';
import DisplayPlot from '../components/DisplayPlot';
import '../styles/Overview.scss';

const Overview: React.FC = () => {
  const salesData = {
    labels: ['March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [65, 59, 70, 81, 56, 55, 40, 89],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const salesOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      ticks: {
        beginAtZero: true,
      },
    },
  };

  const userData = {
    labels: ['March', 'April', 'May', 'June', 'July', 'August', 'September', 'OCtober'],
    datasets: [
      {
        label: 'New Users',
        data: [30, 45, 70, 40, 60, 80, 95, 100],
        backgroundColor: 'rgba(153,102,255,0.2)',
        borderColor: 'rgba(153,102,255,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(153,102,255,0.4)',
        hoverBorderColor: 'rgba(153,102,255,1)',
      },
    ],
  };

  const userOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      ticks: {
        beginAtZero: true,
      },
    },
  };

  const plotLayout = {
    xaxis: { title: 'Month' },
    yaxis: { title: 'Total Subscriptions' },
  };

  const plotData = [
    {
      x: ['March', 'April', 'May', 'June', 'July', 'August', 'September'],
      y: [35, 50, 65, 70, 75, 95, 100],
      mode: 'lines+markers',
      marker: { color: 'rgba(153,102,255,0.5)' },
    },
  ];

  return (
    <Layout>
      <section className="overview">
        <header>
          <h1>Overview</h1>
          <p>Welcome to the dashboard overview.</p>
        </header>
        <div className="charts">
          <Chart
            type="bar"
            data={salesData}
            options={salesOptions}
            title="Monthly Sales Data"
          />
          <Chart
            type="line"
            data={userData}
            options={userOptions}
            title="New Users Over Time"
          />
          <DisplayPlot
            data={plotData}
            layout={plotLayout}
            title="Monthly Subscriptions"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Overview;
