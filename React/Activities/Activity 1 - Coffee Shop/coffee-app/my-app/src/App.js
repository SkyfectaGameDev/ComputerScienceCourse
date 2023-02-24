import './App.css';
import Menu from './components/Menu.js';
import Items from './components/Items.js';
import Interface from './components/Interface.js';
import Total from './components/Total.js';
import React, { useState } from 'react';

function App() {

  const [counters, setCounters] = useState([0, 0, 0]);

  return (
    <div className="container">
      <h1>Coffee Shop</h1>
      <div className="menu-container">
        <Menu source="./images/menu.png"/>
        <div className="order">
          <div className="menu-list">
            <Items item="Latte: £2.20"/>
            <Items item="Espresso: £2.70"/>
            <Items item="Macchiato: £3.40"/>
          </div>
          <div className ="interface">
          <Interface counter={counters[0]} setCounter={(value) => setCounters([value, counters[1], counters[2]])} />
          <Interface counter={counters[1]} setCounter={(value) => setCounters([counters[0], value, counters[2]])} />
          <Interface counter={counters[2]} setCounter={(value) => setCounters([counters[0], counters[1], value])} />
            <Total total={counters}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
