
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingForm from './Form';
import BookingsList from './Bookinglist';
import EditBooking from './Edit';


const App = () => {
  return (
    <Router>
      <div>
        <h1>Restaurant Table Booking</h1>
        <Routes>
        <Route path="/" element={<BookingForm />} />
        <Route path="/bookings" element={<BookingsList />} />
        <Route path="/edit/:id" element={<EditBooking />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
