import React, { useState, useEffect } from "react";
import "./timer.css";

// try to make this into a component where u just pass it a variable like "<Timer number={10} />"
const Timer = ({ number }) => {
    const [timer, setTimer] = useState(1);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (timer > number) {
            setCount(1);
        }
        if (count === 0) {
            console.log("hello");
            timer <= number
                ? setTimeout(() => setTimer(timer + 1), 1000)
                : setTimer(0);
        }
    }, [timer, number, count]);

    return <div className="timer">{timer}</div>;
};

export default Timer;
