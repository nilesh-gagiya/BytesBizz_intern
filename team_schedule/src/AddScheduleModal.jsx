import React, { useState } from 'react';

const AddScheduleModal = ({ event, onClose }) => {
  const [title, setTitle] = useState(event?.title || '');
  const [date, setDate] = useState(event?.start || '');
  const [time, setTime] = useState(event?.time || '');

  const handleSave = () => {
    // Logic to save the schedule
    onClose();
  };

  return (
    <div className="modal">
      <h2>{event ? 'Edit Schedule' : 'Add Schedule'}</h2>
      <input type="text" placeholder="Event title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default AddScheduleModal;
