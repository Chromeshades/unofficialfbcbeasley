const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('./logger');

const app = express();
const port = 3003;

app.use(bodyParser.json());
app.use(cors());

let events = []; // In-memory array to store events

app.post('/api/events', (req, res) => {
  const { name, date, description } = req.body;
  if (!name || !date || !description) {
    return res.status(400).send({ message: 'All fields are required.' });
  }
  const newEvent = { name, date, description };
  events.push(newEvent);
  console.log('Event received:', newEvent);
  res.status(200).send({ message: 'Event added successfully!', event: newEvent });
});

app.post('/api/log', (req, res) => {
  const { error } = req.body;
  logger.error(error);
  res.status(200).send({ message: 'Error logged successfully!' });
});

app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
