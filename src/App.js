// App.js
import React from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import './App.css'; // Custom CSS

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default App;
