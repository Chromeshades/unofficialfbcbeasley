import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import WhatsHappening from '../pages/WhatsHappening';
import AddEvent from '../pages/AddEvent';
import '../styles/App.css';
import AdminPanel from '../pages/AdminPanel'; // Import the AdminPanel component


function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <Router>
      <div>
        <nav>
          <div className="img">
            <img src="//nebula.wsimg.com/c19205f8461cd7d2478851457448728a?AccessKeyId=4390D5A739376433E559&amp;disposition=0&amp;alloworigin=1" alt="Logo" />
          </div>
          <div className="menu-toggle" onClick={toggleMenu}>
            &#9776;
          </div>
          <ul className={menuActive ? 'active' : ''}>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about-us" onClick={toggleMenu}>About Us</Link></li>
            <li><Link to="/contact-us" onClick={toggleMenu}>Contact Us</Link></li>
            <li><Link to="/whats-happening" onClick={toggleMenu}>What's Happening</Link></li>
            <li><Link to="/add-event" onClick={toggleMenu}>Add Event</Link></li>
          </ul>
          <div className="nav-buttons">
            <a href="https://tithe.ly/give_new/www/#/tithely/give-one-time/299803?kiosk=1" target="_blank" rel="noopener noreferrer" className="button">Donate</a>
            <a href="https://studio.youtube.com/channel/UCREu1fbyky7uKD681fArJlQ/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D" target="_blank" rel="noopener noreferrer" className="button">Sermon Videos</a>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/whats-happening" element={<WhatsHappening />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPanel />} /> {/* Add the admin route */}
        </Routes>
      </div>
    </Router>
  );
}


export default App;