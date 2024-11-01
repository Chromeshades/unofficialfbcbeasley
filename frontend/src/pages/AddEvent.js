import React, { useState } from 'react';
import axios from 'axios';
import './AddEvent.css';

const AddEvent = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Replace 'yourPassword' with the actual password you want to use
    if (password === 'yourCoolPassword') {
      setIsAuthenticated(true);
    } else {
      setMessage('Incorrect password. Please try again.');
      setIsError(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://10.2.69.127:5000/api/events', {
        name: eventName,
        date: eventDate,
        description: eventDescription,
      });
      if (response.status === 200) {
        setMessage('Event added successfully!');
        setIsError(false);
      } else {
        setMessage('Failed to add event. Please try again.');
        setIsError(true);
      }
    } catch (error) {
      setMessage('Failed to add event. Please try again.');
      setIsError(true);
      // Log error to backend
      await axios.post('http://10.2.69.127:5000/api/log', { error: error.message });
    }
  };

  return (
    <div className="add-event-container">
      <h1>Add Event</h1>
      {message && (
        <div className={`message ${isError ? 'error-message' : 'success-message'}`}>
          {message}
        </div>
      )}
      {!isAuthenticated ? (
        <form onSubmit={handlePasswordSubmit}>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              id="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="button">Submit</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="eventName" className="form-label">Event Name:</label>
            <input
              type="text"
              id="eventName"
              className="form-input"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventDate" className="form-label">Event Date:</label>
            <input
              type="date"
              id="eventDate"
              className="form-input"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventDescription" className="form-label">Event Description:</label>
            <textarea
              id="eventDescription"
              className="form-textarea"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="button">Add Event</button>
        </form>
      )}
    </div>
  );
};

export default AddEvent;
