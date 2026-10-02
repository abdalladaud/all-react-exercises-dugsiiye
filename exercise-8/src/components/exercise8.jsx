import { useState, useEffect } from "react";


const Countdown = ()=> {

    const [inputTime, setInputTime] = useState(0);
    const [time, setTime] = useState(0);

    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
    if (!isRunning) return;

    const timerId = setInterval(() => {
        setTime((prev) => {
            if (prev <= 1) {
                clearInterval(timerId);
                setIsRunning(false);
                return 0;
            }

            return prev - 1;
        });
    }, 1000);

    return () => clearInterval(timerId);
}, [isRunning]);

    const handleStart = ()=> {
        setTime(inputTime);
        setIsRunning(true)
    }

    const handleStop = ()=> {
        setIsRunning(false);
    }

    const handleReset = ()=> {
        setIsRunning(false);
        setTime(inputTime);
    }

    return (

         <>

            <h1>Count Down Timer</h1>
            <span>Set Time (seconds):</span>
            <input type="number" 
            value={inputTime}
            onChange={(e) => {
            setInputTime(Number(e.target.value));
            setTime(Number(e.target.value));
        }}
            />
            <p>Time Left: {time} seconds</p>
            <button disabled={isRunning || time <= 0} onClick={handleStart}>Start</button>
            <button disabled={!isRunning} onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reser</button> 
        </>
    )
}

export default Countdown;