import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = ({ defaultCount = 0 }) => {
  const [count, setCount] = useState(defaultCount);

  return (
    <div>
      <p>The current count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(defaultCount)}>-Reset</button>
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App />
);
