import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const saved = () => Number(window.localStorage.getItem('COUNTER_STILL')) || 0;
  const [counter, setCounter] = useState(saved);
  

  const increase = () => {
    setCounter(counter + 1)
  }

  useEffect(() => {
    window.localStorage.setItem('COUNTER_STILL', counter);
  }, [counter])

  return (
    <div>
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <button onClick={() => increase()}>Click Me!</button>
    </div>
  );
}

export default App;
