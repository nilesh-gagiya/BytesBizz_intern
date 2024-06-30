import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        requests: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/bookings', formData);
            alert('Reservation made successfully!');
        } catch (error) {
            console.error('Error making reservation:', error);
        }
    };

    return (
        <div className="booking-container">
            <h1 className="booking-header">Restaurant Table Booking</h1>
            <form className="booking-form" onSubmit={handleSubmit}>
                <h2 className="form-header">Make a Reservation</h2>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
                <input type="date" name="date" onChange={handleChange} required />
                <input type="time" name="time" onChange={handleChange} required />
                <input type="number" name="guests" placeholder="Number of Guests" onChange={handleChange} required />
                <textarea name="requests" placeholder="Special Requests" onChange={handleChange}></textarea>
                <button type="submit">Book Now</button>
            </form>
            <footer className="booking-footer">© 2024 Restaurant. All rights reserved.</footer>
        </div>
    );
};

export default BookingForm;
