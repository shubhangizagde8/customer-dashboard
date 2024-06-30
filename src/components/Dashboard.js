import React from 'react';
import Menu from './Menu';
import CustomerList from './CustomerList';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Menu />
      <CustomerList />
    </div>
  );
};

export default Dashboard;
