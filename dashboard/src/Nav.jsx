import React from 'react';
import { FaShareAlt, FaUsers, FaCog, FaBell } from 'react-icons/fa';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo">pipefy</div>
        <div className="navbar-links">
          <a href="#">Kanban</a>
          <a href="#">Reports</a>
          <a href="#">Form</a>
          <a href="#">Emails</a>
          <a href="#" className="active">Dashboards</a>
        </div>
      </div>
      <div className="navbar-right">
        <FaShareAlt />
        <FaUsers />
        <FaBell />
        <FaCog />
        <div className="navbar-user">Company</div>
      </div>
    </div>
  );
}

export default Navbar;
