// EventOwnerList.js
import React, { useEffect, useState } from 'react';
import { fetchEventOwners } from './api'; // Import the fetchEventOwners function

const EventOwnerList = () => {
  const [eventOwners, setEventOwners] = useState([]);

  useEffect(() => {
    const fetchEventOwnersData = async () => {
      try {
        const eventOwnersData = await fetchEventOwners(); // Use the fetchEventOwners function
        setEventOwners(eventOwnersData);
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchEventOwnersData();
  }, []);

  return (
    <div>
      {eventOwners.map((eventOwner) => (
        <div key={eventOwner.id}>
          <h3>{eventOwner.name}</h3>
          <p>Email: {eventOwner.email}</p>
        </div>
      ))}
    </div>
  );
};

export default EventOwnerList;
