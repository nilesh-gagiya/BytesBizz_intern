import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditBooking = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        requests: '',
        status: ''
    });

    useEffect(() => {
        const fetchBooking = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/bookings/${id}`);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching booking:', error);
            }
        };

        fetchBooking();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/bookings/${id}`, formData);
            navigate('/bookings');
        } catch (error) {
            console.error('Error updating booking:', error);
        }
    };

    return (
        <div className="booking-container">
            <h1 className="booking-header">Edit Restaurant Booking</h1>

            <form className="booking-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                <input type="date" name="date" value={formData.date} onChange={handleChange} />
                <input type="time" name="time" value={formData.time} onChange={handleChange} />
                <input type="number" name="guests" placeholder="Number of Guests" value={formData.guests} onChange={handleChange} />
                <textarea name="requests" placeholder="Special Requests" value={formData.requests} onChange={handleChange}></textarea>
                <input type="text" name="status" placeholder="Status" value={formData.status} onChange={handleChange} />
                <button type="submit">Update Booking</button>
            </form>
        </div>
    );
};

export default EditBooking;
