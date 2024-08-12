import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Welcome from './Welcome';
import Navbar from './Navbar';
import Calendar from './Calendar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Welcome />
    <Calendar />
  </React.StrictMode>
);
