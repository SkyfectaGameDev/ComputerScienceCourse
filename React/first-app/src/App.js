import './App.css';
import Person from './components/Person.js';
import Gallery from './components/Gallery.js';
import Counter from './components/Counter.js';
import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const decrease = () => {
    if (counter > 0) {
      setCounter(count => count - 1);
    }
  };

  const increase = () => {
    setCounter(count => count + 1);
  };

  return (
    <div className="counter">
      <h1>React Counter</h1>
      <div className="btn__container">
        <button className="control__btn" onClick={decrease}>-</button>
        <span className="counter__output">{counter}</span>
        <button className="control__btn" onClick={increase}>+</button>
      </div>
    </div>
  );
}

/*
function App() {
  return (
    <div className="container">
      <Gallery source="./images/img1.jpg" text="House"/>
      <Gallery source="./images/img2.jpg" text="Boat House"/>
      <Gallery source="./images/img3.jpg" text="Triangular House"/>
      <Gallery source="./images/img4.jpg" text="Dog"/>
    </div>
  );
}
*/

export default App;