import { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (<div className="counter-container">
        <p className="counter-display">{count}</p>
        <button onClick={decrement} className="counter-button"> Decrement</button>
        <button onClick={increment} className="counter-button">  Increment</button>
        <button onClick={reset} className="counter-button">  Reset</button>


    </div>);



}

export default Counter