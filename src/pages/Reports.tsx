import React from 'react';
import Layout from '../components/Layout';
import DataTable from '../components/DataTable';

const Reports: React.FC = () => {
  const demoData = [
    { id: 1, name: 'John', age: 28, status: 'Active' },
    { id: 2, name: 'Doe', age: 32, status: 'Inactive' },
    { id: 3, name: 'Jeff', age: 25, status: 'Active' },
    { id: 4, name: 'Sri', age: 38, status: 'Active' },
    { id: 5, name: 'Anne', age: 21, status: 'Active' },
    { id: 6, name: 'Dan', age: 34, status: 'Inactive' },
    { id: 7, name: 'Simon', age: 29, status: 'Active' },
    { id: 8, name: 'Sam', age: 45, status: 'Inactive' }
  ];

  const columns = ['id', 'name', 'age', 'status'];

  return (
    <Layout>
      <h1>Reports</h1>
      <DataTable data={demoData} columns={columns} />
    </Layout>
  );
};

export default Reports;
