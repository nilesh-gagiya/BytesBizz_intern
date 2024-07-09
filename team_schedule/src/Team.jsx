// src/pages/TeamSchedule.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MyCalendar from './Celender';

const TeamSchedule = () => {
  const [events, setEvents] = useState([
    { title: 'Standup Call', start: new Date(), end: new Date(), allDay: false },
    // More events
  ]);

  return (
    <div className="team-schedule">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <MyCalendar events={events} />
      </div>
    </div>
  );
};

export default TeamSchedule;
