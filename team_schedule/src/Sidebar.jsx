// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome, FaCalendarAlt, FaFolder, FaCog, FaLightbulb,
  FaBookmark, FaStickyNote, FaSearch
} from 'react-icons/fa';
import {
  FiUsers, FiFileText, FiBell, FiMessageCircle,
  FiBookOpen, FiDatabase
} from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>DPOP Studio</h2>
      </div>
      <div className="sidebar-search">
        <FaSearch className="sidebar-search-icon" />
        <input id='i1' type="text" placeholder="Quick search..." />
      </div>
      <ul className="sidebar-nav">
        <li><Link to="/"><FaHome /> Dashboard</Link></li>
        <li><Link to="/schedule"><FaCalendarAlt /> My Schedule</Link></li>
        <li><Link to="/documents"><FiFileText /> My Document</Link></li>
        <li><Link to="/settings"><FaCog /> Settings</Link></li>
        <li><Link to="/general"><FiUsers /> General</Link></li>
        <li><Link to="/announcement"><FiBell /> Announcement</Link></li>
        <li><Link to="/tasks"><FaLightbulb /> Tasks</Link></li>
        <li><Link to="/wiki"><FiBookOpen /> Wiki</Link></li>
        <li><Link to="/docs"><FaFolder /> Docs</Link></li>
        <li><Link to="/resource"><FiDatabase /> Resource</Link></li>
        <li><Link to="/meeting"><FiMessageCircle /> Meeting</Link></li>
        <li><Link to="/team-schedule"><FaCalendarAlt /> Team Schedule</Link></li>
      </ul>
      <div className="sidebar-footer">
        <ul className="sidebar-footer-nav">
          <li><Link to="/getting-started"><FiBookOpen /> Getting Started</Link></li>
          <li><Link to="/bookmarked"><FaBookmark /> Bookmarked</Link></li>
          <li><Link to="/notes"><FaStickyNote /> Notes</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
