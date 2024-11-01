import { getEvents, addEvent } from '../data/events.js';

export const getAllEvents = (req, res) => {
  res.json(getEvents());
};

export const createEvent = (req, res) => {
  const { date, title, description } = req.body;
  if (!date || !title || !description) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  const newEvent = { date: new Date(date), title, description };
  addEvent(newEvent);
  res.status(201).json(newEvent);
};
