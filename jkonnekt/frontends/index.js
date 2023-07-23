// App.js (or index.js, or any other main app file)
import React from 'react';
import EventOwnerList from './components/EventOwnerList'; // Import the EventOwnerList component

const App = () => {
  return (
    <div>
      <h1>Welcome to Your App</h1>
      <EventOwnerList /> {/* Use the EventOwnerList component */}
    </div>
  );
};

export default App;
