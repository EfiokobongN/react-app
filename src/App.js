
import { useState } from 'react';
import './App.css';



function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
    <button onClick={() => setCounter((prevCount) => prevCount -1)}>PrevCount -</button>
    <h1>{counter}</h1>
    <button onClick={() => setCounter((nextCount) => nextCount +1)}>NextCount +</button>
    </div>
  );
}

export default App;
