import React from 'react';
import Plot from 'react-plotly.js';
import '../styles/DisplayPlot.scss';

interface DisplayProps {
  data: Plotly.Data[];
  layout?: Partial<Plotly.Layout>;
  config?: Partial<Plotly.Config>;
  title: string;
}

const PlotComponent: React.FC<DisplayProps> = ({ data, layout, config, title }) => {
  return (
    <div className="container">
      <h2>{title}</h2>
      <Plot
        data={data}
        layout={{ ...layout, title }}
        config={config}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default PlotComponent;
