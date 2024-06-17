// frontend/mainpage/main.js
import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <h1>Welcome to Main Page</h1>
      <p>This is a separate page from the main React app.</p>
    </div>
  );
};

ReactDOM.render(<MainPage />, document.getElementById('main-root'));
