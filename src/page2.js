import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cube from "./components/cube/cube";
import "./App.css";

export default function Page2() {
    const [isFinished, setisFinished] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setisFinished(true);
        }, 7000);
    }, []);

    return (
        <>
            <motion.div className="text-container">
                <motion.h1
                    key="modal"
                    className="header"
                    initial={{ x: "-100vh", opacity: 0 }}
                    animate={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{
                        type: "spring",
                        delay: 2,
                        duration: 2,
                    }}
                    exit={{ x: "-100vh" }}
                >
                    Joa Leitola
                </motion.h1>

                <motion.h2
                    className="profession"
                    initial={{ x: "-100vh", opacity: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 3,
                        duration: 2,
                        type: "spring",
                    }}
                >
                    Front End Web Developer
                </motion.h2>
            </motion.div>
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
