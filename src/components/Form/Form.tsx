import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppContext';
import { IAppState } from '../../types';

const Form = () => {
    const context: IAppState = useContext(AppContext);
    const { activeSeat, events, bookedSeats } = context
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        seatNumber: activeSeat,
        bookingDate: '',
    });

    const handleChange = (event: any) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        events.setBookedSeat(formData)
        events.setPassengerFormPopup(false)
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Booking Form</h2>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="seatNumber">Seat Number:</label>
                <input
                    type="text"
                    name="seatNumber"
                    id="seatNumber"
                    value={activeSeat}
                    readOnly
                />
            </div>
            <div>
                <label htmlFor="bookingDate">Date of Booking:</label>
                <input
                    type="date"
                    name="bookingDate"
                    id="bookingDate"
                    value={formData.bookingDate}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit Booking</button>
        </form>
    );
};

export default Form;
