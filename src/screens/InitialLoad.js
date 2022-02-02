import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Cube from "../components/cube/cube";
import "../App.css";
import Title from "../components/title/title";

export default function InitialLoad() {
    const [isFinished, setisFinished] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setisFinished(true);
        }, 7000);
    }, []);

    return (
        <>
            <div className="text-container">
                <Title />
            </div>
            <motion.div
                animate={{ y: [0, -25, 25] }}
                transition={{
                    duration: 3,
                    delay: 1,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
            >
                <Cube isFinished={isFinished} />
            </motion.div>
        </>
    );
}
