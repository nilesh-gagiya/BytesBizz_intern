import React from 'react';
import { FaDatabase, FaChartPie } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <div className="sidebar-box"><FaDatabase /> Explore Data</div>
      <div className="sidebar-box"><FaChartPie /> Create Dashboard</div>
      <ul>
        <li>Samples</li>
      </ul>
     
    </div>
  );
}

export default Sidebar;
