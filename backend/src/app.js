const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/index');
const { addEvent, getEvents } = require('./data/events'); // Import addEvent function

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('API is running');
});

// Endpoint to get the list of events
app.get('/api/events', (req, res) => {
    // try {
        // res.send('API is running');
      const events = getEvents();
      res.send(events);
    //   res.status(200).send(events);
    // } catch (error) {
    //   console.error('Error fetching events:', error);
    //   res.send({ message: 'Failed to fetch events' });
    // }
  });

app.post('/api/events', (req, res) => {
  const { name, date, description } = req.body;
  // Add logic to save the event to events array
  addEvent({ title: name, date: new Date(date), description }); // Save the event
  
  console.log('Event received:', { name, date, description });
  res.status(200).send({ message: 'Event added successfully!' });

});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://10.2.69.127:${PORT}`);
});