import React, { useState } from 'react';

const Interface = () => {
    const [counter, setCounter] = useState(0);
    const decrease = () => {
        if (counter > 0) {
            setCounter(count => count - 1);
        }
    };
    const increase = () => {
        setCounter(count => count + 1);
    };
    const reset = () => {
        setCounter(0);
    };
    
    return (
    <div id="interface-item">
        <button id="interface-button" onClick={decrease}>-</button>
        <button id="interface-button" onClick={increase}>+</button>
        <span id="interface-counter">{counter}</span>
        <button id="interface-button" onClick={reset}>x</button>
    </div>
    )
}

export default Interface;