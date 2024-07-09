// src/components/Calendar.js
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = ({ events }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  return (
    <div className="calendar-container">
      <p>DPOP Studio  /  Workplace  /  General  /  <b>Team Schedule</b></p>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%', width: '100%' }}
        onSelectEvent={handleSelectEvent}
        components={{
          toolbar: CustomToolbar,
          event: CustomEvent,
        }}
      />
      {modalOpen && <AddScheduleModal event={selectedEvent} onClose={() => setModalOpen(false)} />}
    </div>
  );
};

const CustomToolbar = (toolbar) => {
  const goToBack = () => {
    let mDate = toolbar.date;
    let newDate = new Date(mDate.getFullYear(), mDate.getMonth() - 1, 1);
    toolbar.onNavigate('PREV', newDate);
  };

  const goToNext = () => {
    let mDate = toolbar.date;
    let newDate = new Date(mDate.getFullYear(), mDate.getMonth() + 1, 1);
    toolbar.onNavigate('NEXT', newDate);
  };

  const goToCurrent = () => {
    let now = new Date();
    toolbar.onNavigate('TODAY', now);
  };

  const label = () => {
    const date = toolbar.date;
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    return (
      <span className="toolbar-label">
        {month} {year}
      </span>
    );
  };

  return (
    <div className="rbc-toolbar">
      <button onClick={goToBack}>Back</button>
      <button onClick={goToCurrent}>Today</button>
      <button onClick={goToNext}>Next</button>
      <div>{label()}</div>
    </div>
  );
};

const CustomEvent = ({ event }) => {
  return (
    <div className="custom-event">
      <span>{event.title}</span>
    </div>
  );
};

export default MyCalendar;
