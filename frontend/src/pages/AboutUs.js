import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      <div className="about-card">
        <p>We are beginning anew as a church as well. What does that mean? Our church is celebrating 114 years of being a generational family here.</p>
        <p>We are multicultural, we are missional, and yes, we are rebuilding. The mission of the church (family) is to go and tell and serve the community. The mission of its members are the same. Apple trees produce apples, and Christians produce Christians.</p>
        <p>We are as a church seeking new ways to connect with the community God has entrusted us with. We choose to tell and to serve until Christ’s return to claim us. There is a process to do all of that. Connect to God, one another, and to minister to those around us. Join us as we love each other, serve God, and fulfill the Great Commission stated in Matthew 28:18-20.</p>
        
        <h2>What Do We Teach?</h2>
        <p>We use both the Old Testament and the Gospels as the foundation of our faith and the inspiration, and for our daily lives. We put those teachings into practice at home and at work.</p>
        
        <h2>What Are Our Core Values?</h2>
        <p>Just as Jesus said in the Beatitudes, blessed are the poor and the hungry. Our mission is not just to love one another, but to make sure we spread the love of the Gospels everywhere.</p>
        
        <h2>Who Is Our Senior Pastor?</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="http://nebula.wsimg.com/2188231038dd2eca14a649f494b874ee?AccessKeyId=4390D5A739376433E559&disposition=0&alloworigin=1" alt="Pastor Ken Collins" style={{ marginRight: '20px', borderRadius: '8px', width: '150px', height: 'auto' }} />
          <p>Pastor Ken Collins joined our community of believers after 10 years of service in FBC Alief Tx. Pastor Ken has served here at FBC Beasley for 5 years on Feb 18 2023.</p>
        </div>
        
        <p>Our Church has been here for 114 years.</p>
      </div>
    </div>
  );
};

export default AboutUs;