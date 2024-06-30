import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BookingsList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/bookings');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log(`Attempting to delete booking with ID: ${id}`);
      await axios.delete(`http://localhost:5000/api/bookings/${id}`);
      setBookings(bookings.filter(booking => booking._id !== id));
      console.log(`Successfully deleted booking with ID: ${id}`);
    } catch (error) {
      console.error(`Error deleting booking with ID: ${id}`, error);
    }
  };

  return (
    <div className="bookings-container">
      <h1 className="bookings-header">Admin - Manage Bookings</h1>
      <table className="bookings-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Time</th>
            <th>Guests</th>
            <th>Special Requests</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking._id}>
              <td>{booking._id}</td>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.phone}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.guests}</td>
              <td>{booking.requests}</td>
              <td>occupied</td>
              <td>
                <Link className="edit-button" to={`/edit/${booking._id}`}>Edit</Link>
                <button className="delete-button" onClick={() => handleDelete(booking._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer className="bookings-footer">© 2024 Restaurant. All rights reserved.</footer>
    </div>
  );
};

export default BookingsList;
