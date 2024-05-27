import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';
import '../styles/Chart.scss';

interface ChartProps {
  type: 'line' | 'bar' | 'pie' | 'doughnut' | 'radar' | 'polarArea' | 'bubble' | 'scatter';
  data: Chart.ChartData;
  options?: Chart.ChartOptions;
  title: string;
}

const DemoChart: React.FC<ChartProps> = ({ type, data, options, title }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartInstanceRef.current = new Chart(chartRef.current, {
        type,
        data,
        options,
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [type, data, options]);

  return (
    <div className="chart-container">
      <h2>{title}</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default DemoChart;
