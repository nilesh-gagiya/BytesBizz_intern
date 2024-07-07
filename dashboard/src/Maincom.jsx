import React from 'react';
import Chart from './Chart';
import TasksTable from './Tasktable';
import CircularChart from './CircularChart';

function MainContent() {
  return (
    <div className="main-content">
      <div className='g1'>
      <p className="sidebar-box"> Filter</p>
      <p className="sidebar-box">Use Sample</p>
      </div>
      <div className="charts">
        
        <div className="chart">
          <h1>Requests per Phase</h1>
          <Chart />
        </div>
        <div className="circular-chart">
          <h2>Priority</h2>
          <CircularChart />
        </div>
      </div>
      <div className="new-tasks-section">
        <div className="card">
          <h2>New Tasks</h2>
          <div className="card-count">1</div>
        </div>
        <div className="tasks-table-section">
          <h2>Tasks on Backlog</h2>
          <TasksTable />
        </div>
      </div>
    </div>
  );
}
export default MainContent;
