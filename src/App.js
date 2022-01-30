import React, { useState } from 'react';
import './style.css';
import Message from './Message';
import Message2 from './Message2';

export default function App() {
  const [isError, setIsError] = useState(false);

  return (
    <div>
      <h1>classes using CLSX</h1>
      <Message isError={isError} />
      <Message2 isError={isError} />
    </div>
  );
}
