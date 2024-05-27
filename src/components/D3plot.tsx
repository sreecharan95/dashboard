import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import '../styles/D3plot.scss';

interface D3InteractiveComponentProps {
  data: { date: string; value: number }[];
  title: string;
}

const D3InteractiveComponent: React.FC<D3InteractiveComponentProps> = ({ data, title }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); 

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const x = d3.scaleTime().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);

    const parseDate = d3.timeParse('%Y-%m-%d');
    const dataParsed = data.map(d => ({ date: parseDate(d.date) as Date, value: d.value }));

    x.domain(d3.extent(dataParsed, d => d.date) as [Date, Date]);
    y.domain([0, d3.max(dataParsed, d => d.value) as number]);

    const line = d3.line<{ date: Date; value: number }>()
      .x(d => x(d.date) as number)
      .y(d => y(d.value) as number);

    const tooltip = d3.select('body').append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0);

    svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    svg.append('g')
      .attr('transform', `translate(${margin.left},${height + margin.top})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)
      .call(d3.axisLeft(y));

    svg.append('path')
      .datum(dataParsed)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('d', line)
      .attr('transform', `translate(${margin.left},${margin.top})`);

    svg.selectAll('dot')
      .data(dataParsed)
      .enter().append('circle')
      .attr('r', 5)
      .attr('cx', d => x(d.date) as number + margin.left)
      .attr('cy', d => y(d.value) as number + margin.top)
      .attr('fill', 'steelblue')
      .on('mouseover', (event, d) => {
        tooltip.transition()
          .duration(200)
          .style('opacity', .9);
        tooltip.html(`Date: ${d3.timeFormat('%Y-%m-%d')(d.date)}<br/>Value: ${d.value}`)
          .style('left', (event.pageX + 5) + 'px')
          .style('top', (event.pageY - 28) + 'px');
      })
      .on('mouseout', () => {
        tooltip.transition()
          .duration(500)
          .style('opacity', 0);
      });
  }, [data]);

  return (
    <div className="d3-container">
      <h2>{title}</h2>
      <svg ref={svgRef} width="800" height="400"></svg>
    </div>
  );
};

export default D3InteractiveComponent;
