const Interface = (props) => {
    const decrease = () => {
        if (props.counter > 0) {
            props.setCounter(props.counter - 1);
        }
    };
    const increase = () => {
        props.setCounter(props.counter + 1);
    };
    const reset = () => {
        props.setCounter(0);
    };
    
    return (
    <div id="interface-item">
        <button id="interface-button" onClick={decrease}>-</button>
        <button id="interface-button" onClick={increase}>+</button>
        <span id="interface-counter">{props.counter}</span>
        <button id="interface-button" onClick={reset}>x</button>
    </div>
    )
}

export default Interface;