import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/customers">Customers</Link></li>
      </ul>
    </div>
  );
};

export default Menu;
