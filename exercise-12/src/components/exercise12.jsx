// Exercise12 - Event Handling

import { useState } from "react"

const CounterEvent = () => {

        const [count, setCount] = useState(0);

        const handleDecrement = () => {
            setCount(prev => prev - 1);
        }

        const handleIncrement = () => {
            setCount(prev => prev + 1);
        }

    return (

        <>
            <h1>Count: {count}</h1>
            <button disabled={count === 0} onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrement}>Increment</button>
        </>
    )
}

export default CounterEvent