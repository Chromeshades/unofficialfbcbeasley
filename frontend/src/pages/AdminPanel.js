import React, { useState } from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === 'yourAdminPassword') {
      setIsAuthenticated(true);
    } else {
      setMessage('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="admin-panel-container">
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
          {message && <p className="error-message">{message}</p>}
        </form>
      ) : (
        <div>
          <h1>Admin Panel</h1>
          <p>Welcome to the admin panel.</p>
          {/* Add more admin functionalities here */}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;