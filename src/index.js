import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = ({ defaultCount = 0 }) => {
  const [count, setCount] = useState(defaultCount);
  const [text, setText] = useState('');

  return (
    <div>
      <p>The current {text || 'count'} is {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(defaultCount)}>-Reset</button>
      <input value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App />
);
