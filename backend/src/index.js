const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getEvents, addEvent } = require('./data/events'); // Import getEvents and addEvent functions

const app = express();
const port = 5000; // Ensure the port matches the one used in the frontend

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running');
});



app.post('/api/events', (req, res) => {
  const { name, date, description } = req.body;
  // Add logic to save the event to events array
  try {
    addEvent({ title: name, date: new Date(date), description }); // Save the event
  } catch (error) {
    console.error('Error adding event:', error);
    return res.status(500).send({ message: 'Failed to add event' });
  }
  
  console.log('Event received:', { name, date, description });
  res.status(200).send({ message: 'Event added successfully!' });

});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
