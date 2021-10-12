
import './App.css';
import { useState, React } from 'react';

function App() {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1)
  }

  const decrement = () => {
    setcount(count - 1)
  }
  
  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
