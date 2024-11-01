import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles/App.css';
import './GlobalStyles.css'; // Import the global CSS file
import GlobalStyles from './GlobalStyles';
import AddEvent from './pages/AddEvent';
import WhatsHappening from './pages/WhatsHappening';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here */}
        </Routes>
      </Router>
      <div className="container">
        <AddEvent />
        <WhatsHappening />
      </div>
    </>
  );
};

export default App;