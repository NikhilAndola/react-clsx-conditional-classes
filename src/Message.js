import React from 'react';
import './style.css';

export default function Message({ isError }) {
  return (
    <div>
      <p className={`bold-text ${isError ? 'error' : 'success'}`}>This is a message</p>
    </div>
  );
}
