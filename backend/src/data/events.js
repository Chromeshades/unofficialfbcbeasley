const fs = require('fs');
const path = require('path');

const eventsFilePath = path.join(__dirname, 'events.json');

// Ensure the events file exists and is initialized
if (!fs.existsSync(eventsFilePath)) {
  fs.writeFileSync(eventsFilePath, JSON.stringify([]), 'utf8');
}

// Read events from the JSON file
const getEvents = () => {
  try {
    const data = fs.readFileSync(eventsFilePath, 'utf8');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading events file:', error);
    return [];
  }
};

// Write events to the JSON file
const addEvent = (event) => {
  try {
    const events = getEvents();
    events.push(event);
    fs.writeFileSync(eventsFilePath, JSON.stringify(events, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing to events file:', error);
  }
};

module.exports = { getEvents, addEvent };
