import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to FBC Beasley</h1>
        <p>This is the home page.</p>
        
        <div className="welcome-card">
          <h2>Welcome!</h2>
          <p>Welcome to First Baptist Church Beasley</p>
          <p>Welcome to a place where God gives us NEW BEGINNINGS!</p>
          <p>It is our sincere hope that you enjoy the fellowship here.</p>
          <p>We would love for you to join us as we come together to worship God.</p>
          <p>Located: 7319 Avenue J, Beasley, Texas 77417</p>
          <p>Phone: (281) 406-0808</p>
        </div>
        
        <div className="custom-shape custom-drop-shadow"></div>
        <div className="schedule-card">
          <h2>Our Schedule</h2>
          <p><strong>Sunday</strong><br />Worship 11:00am</p>
          <p><strong>Wednesday</strong><br />Prayer and Bible Study 6:00pm</p>
          <p>See the <a href="/whats-happening">What's Happening</a> page for other activities.</p>
        </div>
        
        <div className="info-card">
          <h2>Beasley Kids Starts</h2>
          <p>Sept 11th 2024 - 3:00pm - 4:30pm</p>
        </div>
      </div>
      <div className="image-card">
        <h2>Gallery</h2>
        <div className="home-images">
          <img src="http://nebula.wsimg.com/967fa6bc1ff74090c258309b933d1c21?AccessKeyId=4390D5A739376433E559&disposition=0&alloworigin=1" alt="Church event" style={{ width: '200px', height: 'auto' }} />
          <img src="http://nebula.wsimg.com/cbea9f4143e808f44c58ffa6513638da?AccessKeyId=4390D5A739376433E559&disposition=0&alloworigin=1" alt="Community gathering" style={{ width: '200px', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

export default Home;