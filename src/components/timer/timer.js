import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./timer.css";
 
// try to make this into a custom hook where u just pass it a variable like const timer = useTimer(10)
const Timer = () => {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        timer <= 5 ? setTimeout(() => setTimer(timer + 1), 1000) : setTimer(0);
    }, [timer]);

    return <div className="timer">{timer}</div>;
};

export default Timer;
