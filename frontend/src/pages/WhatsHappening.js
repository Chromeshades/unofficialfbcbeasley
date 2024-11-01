import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import './WhatsHappening.css';

/**
 * WhatsHappening component
 *
 * This component displays a calendar and lists events based on the selected date.
 * It fetches events from an API and categorizes them into events on the selected date,
 * upcoming events, and past events.
 *
 * @component WhatsHappening
 * @example
 * return (
 *   <WhatsHappening />
 * )
 *
 * @returns {JSX.Element} The rendered component.
 */
const WhatsHappening = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events'); // Ensure this URL is correct
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const eventDates = events.map(event => new Date(event.date).toDateString());
      if (eventDates.includes(date.toDateString())) {
        return <div className="event-indicator"></div>;
      }
    }
    return null;
  };

  const renderEvents = () => {
    return events
      .filter(event => new Date(event.date).toDateString() === date.toDateString())
      .map((event, index) => (
        <div key={index} className="event">
          <h3>{event.title}</h3>
          <p>{new Date(event.date).toDateString()}</p>
          <p>{event.description}</p>
        </div>
      ));
  };


  /**
   * Renders a list of upcoming events.
   *
   * Filters the events to include only those with a date greater than or equal to the current date,
   * sorts them in ascending order by date, and maps each event to a JSX element.
   *
   * @returns {JSX.Element[]} An array of JSX elements representing the upcoming events.
   */
  const renderUpcomingEvents = () => {
    return events
      .filter(event => new Date(event.date) >= new Date())
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .map((event, index) => (
        <div key={index} className="event">
          <h3>{event.title}</h3>
          <p>{new Date(event.date).toDateString()}</p>
          <p>{event.description}</p>
        </div>
      ));
  };

  /**
   * Renders a list of past events.
   *
   * This function filters the `events` array to include only those events
   * that have a date earlier than the current date. It then sorts the filtered
   * events in descending order by date and maps over the sorted events to return
   * a JSX element for each event, displaying the event's title, date, and description.
   * Only the last 10 events are displayed.
   *
   * @returns {JSX.Element[]} An array of JSX elements representing past events.
   */
  const renderPastEvents = () => {
    return events
      .filter(event => new Date(event.date) < new Date())
      .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort in descending order
      .slice(0, 10) // Only take the last 10 events
      .map((event, index) => (
        <div key={index} className="event">
          <h3>{event.title}</h3>
          <p>{new Date(event.date).toDateString()}</p>
          <p>{event.description}</p>
        </div>
      ));
  };

  return (
    <div>
      <h1>What's Happening</h1>
      <div className="calendar">
        <Calendar onChange={onChange} value={date} tileContent={tileContent} />
      </div>
      <div className="events">
        <h2>Events on {date.toDateString()}</h2>
        {renderEvents().length > 0 ? renderEvents() : <p>No events for this day.</p>}
      </div>
      <div className="upcoming-events">
        <h2>Upcoming Events</h2>
        {renderUpcomingEvents().length > 0 ? renderUpcomingEvents() : <p>No upcoming events.</p>}
      </div>
      <div className="past-events">
        <h2>Past Events</h2>
        {renderPastEvents().length > 0 ? renderPastEvents() : <p>No past events.</p>}
      </div>
    </div>
  );
};

export default WhatsHappening;
