import './App.css';
import Menu from './components/Menu.js';
import Items from './components/Items.js';
import Interface from './components/Interface.js';
import Total from './components/Total.js';
import React, { useState } from 'react';

function App() {
  
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
            <Interface/>
            <Interface/>
            <Interface/>
            <Total/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
